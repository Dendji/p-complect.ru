import Grid from '@material-ui/core/Grid'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './product.module.css'
import Button, { ButtonTheme } from '../../components/Button/Button'
import FileIcon from '../../components/FileIcon/FileIcon'
import ProductCard from '../../components/ProductCard/ProductCard'
import { mockProducts } from '../../mocks/products'
import Suggestions from '../../components/Suggestions/Suggestions'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import ProductMain from '../../components/ProductMain/ProductMain'
import ProductInfo from '../../components/ProductInfo/ProductInfo'

interface Props {
  data: {
    credit?: {
      acf_credit?: {
        heading1?: string
        heading2?: string
        seoDesc?: string
        seoHeading?: string
        list?: string[]
        subheading?: string
        textColumnLeft?: string
        textColumnRight?: string
      }
    }
  }
}

export default function ProductPage({ data }: Props) {
  const onBuyClick = () => {}
  const onSuggestionClick = (id: string) => {}
  return (
    <>
      <Head>
        <title>{''}</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content={''}
        />
        <meta name="Keywords" property="keywords" key="keywords" content="" />
      </Head>
      <div className={style.root}>
        <Container>
          <ProductMain product={mockProducts[0]} onBuyClick={onBuyClick} />
        </Container>
        <Container>
          <ProductInfo />
        </Container>
        <div className="suggestions">
          <Container>
            <Heading weight={2} className={style.h2}>
              Рекомендуем вам
            </Heading>
            <Suggestions items={mockProducts} onClick={onSuggestionClick} />
          </Container>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  params,
}) {
  if (!params?.product_id) {
    throw new Error('id is not defined')
  }
  //   const data = await getCreditPage(params.id + '')

  return {
    props: {
      //   data,
    },
  }
}
