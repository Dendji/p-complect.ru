import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './product.module.css'
import Suggestions from '../../components/Suggestions/Suggestions'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import ProductMain from '../../components/ProductMain/ProductMain'
import ProductInfo from '../../components/ProductInfo/ProductInfo'
import { IProduct } from '../../components/ProductCard/ProductCard'
import { IImage } from '../../@types/common'

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
}

export default function ProductPage({ data }: Props) {
  console.log(
    '🚀 ~ file: [product_id].tsx ~ line 18 ~ ProductPage ~ data',
    data
  )

  const onBuyClick = () => {}
  const onSuggestionClick = (id: string) => {}
  return (
    <>
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
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  params,
}) {
  console.log('🚀 ~ file: [product_id].tsx ~ line 59 ~ params', params)
  if (!params?.product_id) {
    throw new Error('id is not defined')
  }
  const res = await fetch(
    `http://wp-api.testing.monster/wp-json/api/v1/products/${params.product_id}`
  )

  const data = await res.json()

  return {
    props: {
      data,
      productId: params.product_id,
    },
  }
}
