import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Section from '../../components/Section/Section'
import CatalogSidebar from '../../components/CatalogSidebar/CatalogSidebar'
import ProductCard, { IProduct } from '../../components/ProductCard/ProductCard'
import { Category } from '../../components/Header/Header'
import { IFilter } from '../../@types/common'
import classnames from 'classnames'
import Empty from '../../components/Empty/Empty'
import CatalogHeader from '../../components/CatalogHeader/CatalogHeader'
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress'

interface PageProps {
  data: {
    filters: IFilter
    products: { items: IProduct[]; total: number }
  }
  categoryId: string
  categories: Category[]
}

const Catalog: NextPage<PageProps> = ({
  data,
  categories,
  categoryId,
}: PageProps) => {
  const currentCategory = categories.find((c) => c.id + '' === categoryId)

  const r = useRouter()

  const handleProductClick = (id: number | string) => {
    r.push(`/product/${id}`)
  }

  const emptyFilters = Object.keys(data.filters).length > 0

  const [products, setProducts] = useState(data.products)
  const [isLoading, setLoading] = useState(false)

  const onFilterChange = async (filter: any[]) => {
    setLoading(true)

    const query = filter.map((f) => `filters[${f.name}][]=${f.value.value}`)
    let url = `http://wp-api.testing.monster/wp-json/api/v1/categories/${categoryId}`

    if (query.length > 0) {
      url += `?${query.join('&')}`
    }

    const res = await fetch(url)
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
    <>
      <Head>
        <title>О ПрофКомплектации</title>
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
            {emptyFilters && (
              <CatalogSidebar
                filters={data.filters}
                onFilterChange={onFilterChange}
                isSubmitLoading={isLoading}
              />
            )}

            {renderProducts()}
          </main>
        </Container>
      </Section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  params,
}) {
  if (!params?.category_id) {
    throw new Error('id is not defined')
  }
  const res = await fetch(
    `http://wp-api.testing.monster/wp-json/api/v1/categories/${params.category_id}`
  )

  const categoriesRes = await fetch(
    `http://wp-api.testing.monster/wp-json/api/v1/categories`
  )

  const data = await res.json()
  const categories = await categoriesRes.json()

  return {
    props: {
      data,
      categories,
      categoryId: params.category_id,
    },
  }
}

export default Catalog
