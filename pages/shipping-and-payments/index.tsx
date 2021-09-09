import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout/Layout'
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
}

const ShippingAndPayments: NextPage<PageProps> = ({
  data: { title, items },
}: PageProps) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content={title}
        />
      </Head>
      <Shipping items={items} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({}) {
  const res = await fetch(`${API_HOST}/pages/shipping-and-payments`)

  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default ShippingAndPayments
