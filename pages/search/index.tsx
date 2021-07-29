import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import Section from '../../components/Section/Section'
import ProductCard, { IProduct } from '../../components/ProductCard/ProductCard'
import Hidden from '@material-ui/core/Hidden'
import { Category } from '../../components/Header/Header'
import { IFilter } from '../../@types/common'
import CatalogSidebar from '../../components/CatalogSidebar/CatalogSidebar'

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

  const handleProductClick = (id: number) => {}

  return (
    <>
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
          <Heading weight={2} noMt className={style.heading}>
            {/* {currentCategory?.name || 'Без названия'} */}
          </Heading>
          <main className={style.layout}>
            {/* <Hidden smDown>
              <CatalogSidebar filters={data.filters} />
            </Hidden> */}
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
          </main>
        </Container>
      </Section>
    </>
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
    `http://wp-api.testing.monster/wp-json/api/v1/search/${encodeURIComponent(
      q as string
    )}`
  )

  const categoriesRes = await fetch(
    `http://wp-api.testing.monster/wp-json/api/v1/categories`
  )

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
