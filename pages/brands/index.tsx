import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../../components/Section/Section'
import StandardImage from '../../components/StandardImage/StandardImage'
import RoundedCard from '../../components/RoundedCard/RoundedCard'
import Heading from '../../components/Heading/Heading'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useTheme from '@material-ui/core/styles/useTheme'
import ImageLightbox from '../../components/ImageLightbox/ImageLightbox'
import Layout from '../../components/Layout/Layout'
import { API_HOST, WP_API_HOST } from '../../utils/const'
import { MultiImage } from '../about'

interface PageProps {
  data: {
    title: {
      rendered: string
    }
    acf: {
      seo_description: string
      seo_title: string
      brands: {
        image: {
          sizes: MultiImage
        }
      }[]
    }
  }
}

const About: NextPage<PageProps> = ({ data }: PageProps) => {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Layout>
      <Head>
        <title>{data.acf.seo_title || 'ПРОФКОМПЛЕКТАЦИЯ'}</title>
        {data.acf.seo_description && (
          <meta
            property="description"
            name="Description"
            key="description"
            content={data.acf.seo_description}
          />
        )}
      </Head>
      <Section className={style.section}>
        <Container>
          {data.title && (
            <Heading weight={2} className={style.title}>
              {data.title.rendered}
            </Heading>
          )}
          <div className={style.grid}>
            {data.acf.brands.map((b, i) => (
              <div className={style.brand} key={i}>
                <img src={b.image.sizes.large} alt="" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({}) {
  const res = await fetch(`${WP_API_HOST}/pages/442`)

  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default About
