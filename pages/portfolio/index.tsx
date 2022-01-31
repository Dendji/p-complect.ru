import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useRef } from 'react'
import style from './index.module.css'
import Container from '@mui/material/Container'
import Heading from '../../components/Heading/Heading'
import Section from '../../components/Section/Section'
import ClientCard from '../../components/ClientCard/ClientCard'
import Objects from '../../components/Objects/Objects'
import Layout from '../../components/Layout/Layout'
import { API_HOST } from '../../utils/const'
import { MultiImage } from '../about'
import { IInit } from '../../@types/common'

interface PageProps {
  data: {
    categories: {
      title?: string
      items?: {
        name?: string
        image?: MultiImage
      }[]
    }
    items: {
      category?: string[]
      content?: string
      images?: MultiImage[]
      name?: string
    }[]
  }
  init: IInit
}

const Portfolio: NextPage<PageProps> = ({ data, init }: PageProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const onScroll = () => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <Layout init={init}>
      <Head>
        <title>Клиенты и объекты – ПрофКомплектация</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      <Section className={style.section}>
        <Container>
          <Heading weight={2}>С кем мы работаем</Heading>
          <div className={style.clientsGrid}>
            {data.categories.items?.map((item, index) => (
              <ClientCard
                key={index}
                image={item.image?.large}
                heading={item.name}
                onClick={onScroll}
              />
            ))}
          </div>
        </Container>
      </Section>
      <div ref={ref}>
        <Objects
          tabs={
            data.categories.items?.map((item) => ({
              value: item.name || '',
              text: item.name || '',
            })) || []
          }
          objects={data.items.map((item) => ({
            images: item.images?.map((image) => image.large) || [],
            category: item.category || [],
            content: item.content || '',
            heading: item.name || '',
          }))}
        />
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function () {
  const [res, initRes] = await Promise.all([
    fetch(`${API_HOST}/objects`),
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

export default Portfolio
