import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './404.module.css'
import Layout from '../components/Layout/Layout'
import { Container } from '@material-ui/core'

interface PageProps {}

const ContactPage: NextPage<PageProps> = ({}: PageProps) => {
  return (
    <Layout>
      <Head>
        <title>ПрофКомплектация | 404</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      <Container>
        <div className={style.root}>
          <h2 className={style.number}>404</h2>
          <h4>Страница не найдена</h4>
        </div>
      </Container>
    </Layout>
  )
}

export default ContactPage
