import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@mui/material/Container'
import Section from '../../components/Section/Section'
import Heading from '../../components/Heading/Heading'
import Layout from '../../components/Layout/Layout'
import { API_HOST, WP_API_HOST } from '../../utils/const'
import { MultiImage } from '../about'
import { IInit } from '../../@types/common'

interface PageProps {
  init: IInit
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

const About: NextPage<PageProps> = ({ data, init }: PageProps) => {
  return (
    <Layout init={init}>
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
  const [res, initRes] = await Promise.all([
    fetch(`${WP_API_HOST}/pages/442`),
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

export default About
