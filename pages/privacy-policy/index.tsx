import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import { Container, Grid } from '@material-ui/core'

interface PageProps {}

const PrivacyPolicy: NextPage<PageProps> = (props: PageProps) => {
  return (
    <div className={style.root}>
      <Head>
        <title>ПрофКомплектация – Политика конфиденциальности</title>
      </Head>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={8} lg={8}></Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default PrivacyPolicy
