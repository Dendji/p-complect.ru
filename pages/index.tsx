import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
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
// import SlidersSection from '../components/SlidersSection/SlidersSection'

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
      image: MultiImage
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
  }
}

const articles = [
  {
    heading: 'Мастики как использовать',
    description:
      'Если вы сейчас ищете простой и надежный способ справиться с подобными проблемами, сделайте ремонт кровли битумной мастикой.',
    img: '/images/blog/blog1.jpeg',
  },
  {
    heading: 'Монтаж теплоизоляции',
    description:
      'Если остались материалы от ремонта, их можно превратить в настольную игру — не скучную плоскую карту.',
    img: '/images/blog/blog2.jpeg',
  },
  {
    heading: 'Труба зовет',
    description: 'Что нужно знать о монтаже системы водоснабжения',
    img: '/images/blog/blog3.jpeg',
  },
]

const HomePage: NextPage<PageProps> = ({ data, init }: PageProps) => {
  console.log('🚀 ~ file: index.tsx ~ line 69 ~ init', init)
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
      <Section>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} md={12}></Grid>
          </Grid>
        </Container>
      </Section>
      <FeedbackSection items={data.reviews} />
      <DistributorSection />
      <BrandsSection />
      <BlogSection items={articles} />
      <AuthorizedSection />
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
