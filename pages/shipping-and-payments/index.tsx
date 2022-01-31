import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { IInit } from '../../@types/common'
import Layout from '../../components/Layout/Layout'
import Section from '../../components/Section/Section'
import Shipping from '../../components/Shipping/Shipping'
import { API_HOST } from '../../utils/const'

interface PageProps {
  data: {
    title: string
    items: {
      title: string
      icon: string
      content: string
    }[]
  }
  init: IInit
}

const ShippingAndPayments: NextPage<PageProps> = ({
  data: { title, items },
  init,
}: PageProps) => {
  return (
    <Layout init={init}>
      <Head>
        <title>{title}</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content={title}
        />
      </Head>
      <Section>
        <Shipping items={items} />
      </Section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({}) {
  const [res, initRes] = await Promise.all([
    fetch(`${API_HOST}/pages/shipping-and-payments`),
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

export default ShippingAndPayments
