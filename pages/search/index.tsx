import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Section from '../../components/Section/Section'
import ProductCard, { IProduct } from '../../components/ProductCard/ProductCard'
import { Category } from '../../components/Header/Header'
import { IFilter } from '../../@types/common'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import { API_HOST } from '../../utils/const'

interface PageProps {
  data: {
    filters: IFilter
    products: { items: IProduct[]; total: number }
  }
  // categoryId: string
  categories: Category[]
}

const Search: NextPage<PageProps> = ({
  data,
  categories,
}: // categoryId,
PageProps) => {
  // const currentCategory = categories.find((c) => c.id + '' === categoryId)

  const router = useRouter()
  const { q } = router.query

  const handleProductClick = (id: number | string) => {
    router.push(`/product/${id}`)
  }

  return (
    <Layout>
      <Head>
        <title>Поиск по товарам | ПрофКомплектация</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      <Section>
        <Container>
          <main className={style.layout}>
            {data.products.items.length !== 0 ? (
              <div className={style.products}>
                {data.products.items.map((p) => (
                  <ProductCard
                    small
                    key={p.id}
                    product={p}
                    onProductClick={() => handleProductClick(p.id)}
                  />
                ))}
              </div>
            ) : (
              <div className={style.notFound}>
                По вашему запросу: <strong>{q}</strong> <br />
                товары не найдены
              </div>
            )}
          </main>
        </Container>
      </Section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  query,
}) {
  console.log('🚀 ~ file: index.tsx ~ line 72 ~ query', query)
  // if (!params?.category_id) {
  //   throw new Error('id is not defined')
  // }
  const { q = '' } = query

  const res = await fetch(
    `${API_HOST}/search/${encodeURIComponent(q as string)}`
  )

  const categoriesRes = await fetch(`${API_HOST}/categories`)

  const data = await res.json()
  console.log('🚀 ~ file: index.tsx ~ line 85 ~ data', data)
  const categories = await categoriesRes.json()

  return {
    props: {
      data,
      categories,
      // categoryId: params.category_id,
    },
  }
}

export default Search
