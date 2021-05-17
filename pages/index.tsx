import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './home/index.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../components/Section/Section'
import DistributorSection from '../components/DistributorSection/DistributorSection'

interface PageProps {}

const ContactPage: NextPage<PageProps> = ({}: PageProps) => {
  return (
    <div className={style.root}>
      <Head>
        <title>ПрофКомплектация | Строительные материалы</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>

      <Section className={style.intro}>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} md={12}></Grid>
          </Grid>
        </Container>
      </Section>
      <DistributorSection />
    </div>
  )
}

export default ContactPage
