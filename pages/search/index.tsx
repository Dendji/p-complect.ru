import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@mui/material/Container'
import Section from '../../components/Section/Section'
import ProductCard, { IProduct } from '../../components/ProductCard/ProductCard'
import { IFilter, IInit } from '../../@types/common'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import { API_HOST } from '../../utils/const'

interface PageProps {
  data: {
    filters: IFilter
    products: { items: IProduct[]; total: number }
  }
  init: IInit
}

const Search: NextPage<PageProps> = ({ data, init }: PageProps) => {
  const router = useRouter()
  const { q } = router.query

  const handleProductClick = (id: number | string) => {
    router.push(`/product/${id}`)
  }

  return (
    <Layout init={init}>
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
  const { q = '' } = query

  const [res, initRes] = await Promise.all([
    fetch(`${API_HOST}/search/${encodeURIComponent(q as string)}`),
    fetch(`${API_HOST}/init`),
  ])
  const init = await initRes.json()
  const data = await res.json()

  return {
    props: {
      data,
      init,
    },
  }
}

export default Search
