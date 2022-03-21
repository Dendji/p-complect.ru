import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Section from '../components/Section/Section'
import DistributorSection from '../components/DistributorSection/DistributorSection'
import BrandsSection from '../components/BrandsSection/BrandsSection'
import BlogSection from '../components/BlogSection/BlogSection'
import AuthorizedSection from '../components/AuthorizedSection/AuthorizedSection'
import FeedbackSection, {
  IReview,
} from '../components/FeedbackSection/FeedbackSection'
import Layout from '../components/Layout/Layout'
import SlidersSection from '../components/SlidersSection/SlidersSection'
import { MultiImage } from './about'
import { API_HOST } from '../utils/const'
import { IInit } from '../@types/common'
import { useTheme, useMediaQuery } from '@mui/material'

interface PageProps {
  init: IInit
  data: {
    reviews: IReview[]
    seo_description: string | null
    seo_title: string | null
    title: string | null
    slides: {
      category: string | null
      content: string | null
      heading: string | null
      href: string | null
      id: number
      image: string | null
      image_tablet: string | null
      image_mobile: string | null
      button: 'solid' | 'outlined' | null
    }[]
    distribution: {
      certificate: MultiImage
      content: string | null
      image: MultiImage | null
      title: string
    }
    tenders: {
      title: string | null
      items: MultiImage[]
    }
    brands: {
      title: string | null
      desc: string | null
      items: MultiImage[]
    }
    posts: {
      id: string
      short: string | null
      image: MultiImage | null
      name: string | null
    }[]
  }
}

const HomePage: NextPage<PageProps> = ({ data, init }: PageProps) => {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Layout init={init}>
      <Head>
        <title>ПрофКомплектация | Строительные материалы</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      <SlidersSection mainSlides={data.slides} />
      <FeedbackSection items={data.reviews} />
      <DistributorSection {...data.distribution} />
      <BrandsSection {...data.brands} />
      <BlogSection items={data.posts} />
      <AuthorizedSection {...data.tenders} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function () {
  const [res, initRes] = await Promise.all([
    fetch(`${API_HOST}/pages/home`),
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

export default HomePage
