import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './product.module.css'
import Suggestions from '../../components/Suggestions/Suggestions'
import Container from '@mui/material/Container'
import Heading from '../../components/Heading/Heading'
import ProductMain from '../../components/ProductMain/ProductMain'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import { IProduct } from '../../components/ProductCard/ProductCard'
import { IImage, IInit } from '../../@types/common'
import { useDispatch } from 'react-redux'
import Layout from '../../components/Layout/Layout'
import { API_HOST } from '../../utils/const'
import { useRouter } from 'next/router'

export interface IFullProduct {
  id: number
  article?: string
  documents?: {
    title?: string
    type?: string
    url: string
  }[]
  description?: string
  in_stock: boolean
  tech: string | null
  brand?: string
  images?: IImage[]
  attributes?: {
    [key: string]: {
      id: number
      name: string
      type: 'checkbox' | 'dropdown'
      values: string[]
    }
  }
  pricelist?: {
    value?: string
    при_покупке_от?: string
  }[]
  seo?: {
    title?: string
    description?: string
  }
  recommended?: IProduct[]
  preview?: IImage[]
  price?: string
  unit?: string
  name?: string
}

interface Props {
  data: IFullProduct
  init: IInit
}

export default function ProductPage({ data, init }: Props) {
  console.log(
    '🚀 ~ file: [product_id].tsx ~ line 59 ~ ProductPage ~ data',
    data
  )
  const dispatch = useDispatch()

  const onBuyClick = () => {
    dispatch({
      type: 'OPEN_CONTACT_US',
    })
  }

  const router = useRouter()

  const onSuggestionClick = (id: string) => {
    router.push(`/product/${id}`)
  }

  return (
    <Layout init={init}>
      <Head>
        <title>{data.seo?.title || data.name}</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content={data.seo?.description || data.name}
        />
        <meta name="Keywords" property="keywords" key="keywords" content="" />
      </Head>
      <div className={style.root}>
        <Container>
          <ProductMain product={data} onBuyClick={onBuyClick} />
        </Container>
        <Container>
          <ProductInfo
            description={data.description}
            attributes={data.attributes}
            tech={data.tech}
          />
        </Container>
        {data.recommended && data.recommended.length > 0 && (
          <div className="suggestions">
            <Container>
              <Heading weight={2} className={style.h2}>
                Рекомендуем вам
              </Heading>
              <Suggestions
                items={data.recommended}
                onClick={onSuggestionClick}
              />
            </Container>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  params,
}) {
  if (!params?.product_id) {
    throw new Error('id is not defined')
  }

  const [res, initRes] = await Promise.all([
    fetch(`${API_HOST}/products/${params.product_id}`),
    fetch(`${API_HOST}/init`),
  ])

  const data = await res.json()
  const init = await initRes.json()

  return {
    props: {
      data,
      init,
    },
  }
}
