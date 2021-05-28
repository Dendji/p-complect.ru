import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import Section from '../../components/Section/Section'

interface PageProps {}

const Catalog: NextPage<PageProps> = ({}: PageProps) => {
  return (
    <>
      <Head>
        <title>О ПрофКомплектации</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      <Section>
        <Container>
          <Heading weight={2} noMt>
            С кем мы работаем
          </Heading>
          <div className={style.clientsGrid}></div>
        </Container>
      </Section>
    </>
  )
}

export default Catalog
