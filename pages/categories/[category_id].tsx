import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import Section from '../../components/Section/Section'
import CatalogSidebar from '../../components/CatalogSidebar/CatalogSidebar'
import ProductCard, { IProduct } from '../../components/ProductCard/ProductCard'
import Hidden from '@material-ui/core/Hidden'
import { Category } from '../../components/Header/Header'
import { IFilter } from '../../@types/common'

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
  console.log('🚀 ~ file: [category_id].tsx ~ line 34 ~ data', data)
  console.log('🚀 ~ file: [category_id].tsx ~ line 34 ~ categories', categories)
  const currentCategory = categories.find((c) => c.id + '' === categoryId)

  const handleProductClick = (id: number) => {}

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
          <Heading weight={2} noMt className={style.heading}>
            {currentCategory?.name || 'Без названия'}
          </Heading>
          <main className={style.layout}>
            <Hidden smDown>
              <CatalogSidebar filters={data.filters} />
            </Hidden>
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
