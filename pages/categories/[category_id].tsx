import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Section from '../../components/Section/Section'
import CatalogSidebar from '../../components/CatalogSidebar/CatalogSidebar'
import ProductCard, { IProduct } from '../../components/ProductCard/ProductCard'
import { IFilter, IInit } from '../../@types/common'
import classnames from 'classnames'
import Empty from '../../components/Empty/Empty'
import CatalogHeader from '../../components/CatalogHeader/CatalogHeader'
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress'
import Layout from '../../components/Layout/Layout'
import Pagination from '@material-ui/lab/Pagination'
import { API_HOST } from '../../utils/const'

interface PageProps {
  data: {
    filters: IFilter
    products: { items: IProduct[]; total: number }
  }
  categoryId: string
  init: IInit
}

export const AMOUNT_PER_PAGE = 20

const getPaginationParams = (page: number): URLSearchParams => {
  const params = new URLSearchParams()

  params.set('amount', AMOUNT_PER_PAGE + '')
  params.set('start', AMOUNT_PER_PAGE * (page - 1) + '')
  return params
}

const Catalog: NextPage<PageProps> = ({
  data,
  init,
  categoryId,
}: PageProps) => {
  const currentCategory = init.categories?.find((c) => c.id + '' === categoryId)

  const r = useRouter()

  const handleProductClick = (id: number | string) => {
    r.push(`/product/${id}`)
  }

  const emptyFilters = Object.keys(data.filters).length > 0

  const [products, setProducts] = useState(data.products)
  const [isLoading, setLoading] = useState(false)
  const [filter, setFilter] = useState<any[]>([])
  const [sub, setSub] = useState<string | null>(null)
  const [page, setPage] = useState(1)

  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  const onFilterChange = async (filter: any[], sub: string | null) => {
    setFilter(filter)
    if (sub) {
      setSub(sub)
    }
  }

  useEffect(() => {
    onGetProducts()
  }, [filter, sub, page])

  const onGetProducts = async () => {
    setLoading(true)

    const query = filter.map((f) => `filters[${f.name}][]=${f.value.value}`)
    let url = `${API_HOST}/categories/${sub ? sub : categoryId}`

    if (query.length > 0) {
      url += `?${query.join('&')}`
    }

    const params = new URLSearchParams()

    params.set('amount', AMOUNT_PER_PAGE + '')
    params.set('start', AMOUNT_PER_PAGE * (page - 1) + 1 + '')

    const res = await fetch(url + `?${params.toString()}`)
    const data = await res.json()

    setProducts(data.products)
    setLoading(false)
  }

  const renderProducts = () => {
    if (isLoading)
      return (
        <div className={style.loading}>
          <CircularProgress size={100} />
        </div>
      )

    return products.items.length > 0 ? (
      <div className={style.products}>
        {products.items.map((p) => (
          <ProductCard
            small
            key={p.id}
            product={p}
            onProductClick={() => handleProductClick(p.id)}
          />
        ))}
      </div>
    ) : (
      <div className={style.empty}>
        <div className={style.emptyIcon}>
          <Empty />
        </div>
        <h3>Товары отсутствуют</h3>
      </div>
    )
  }

  return (
    <Layout>
      <Head>
        <title>Каталог ПРОФКОМПЛЕКТАЦИИ</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      <Section>
        <Container>
          <CatalogHeader isFilter={products.items.length > 0}>
            {currentCategory?.name || 'Без названия'}
          </CatalogHeader>
          <main
            className={classnames({
              [style.fullwidth]: !emptyFilters,
              [style.layout]: emptyFilters,
            })}
          >
            {emptyFilters && currentCategory && (
              <CatalogSidebar
                currentCategory={currentCategory}
                categories={init.categories || []}
                filters={data.filters}
                onFilterChange={onFilterChange}
                isSubmitLoading={isLoading}
              />
            )}
            <div className={style.productGrid}>
              {renderProducts()}
              {products.items.length > 0 && (
                <div className={style.pagination}>
                  <Pagination
                    count={Math.ceil(products.total / AMOUNT_PER_PAGE)}
                    shape="rounded"
                    size="large"
                    page={page}
                    onChange={onPageChange}
                  />
                </div>
              )}
            </div>
          </main>
        </Container>
      </Section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  params,
}) {
  if (!params?.category_id) {
    throw new Error('id is not defined')
  }

  const paginationParams = getPaginationParams(1)

  const [res, initRes] = await Promise.all([
    fetch(
      `${API_HOST}/categories/${
        params.category_id
      }?${paginationParams.toString()}`
    ),
    fetch(`${API_HOST}/init`),
  ])

  // const categoriesRes = await fetch(
  //   `${API_HOST}/categories`
  // )

  const data = await res.json()
  const init = await initRes.json()

  return {
    props: {
      data,
      init,
      categoryId: params.category_id,
    },
  }
}

export default Catalog
