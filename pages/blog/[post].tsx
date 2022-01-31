import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './Post.module.css'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Heading from '../../components/Heading/Heading'
import Layout from '../../components/Layout/Layout'
import { API_HOST, WP_API_HOST } from '../../utils/const'
import { IInit } from '../../@types/common'
import { MultiImage } from '../about'

interface PageProps {
  init: IInit
  data: {
    id: string
    title: {
      rendered: string | null
    }
    content: {
      rendered: string | null
    }
    acf: {
      short: string | null
      seo_heading: string | null
      seo_desc: string | null
      image: {
        sizes: MultiImage | null
      } | null
    }
  }
}

const Post: NextPage<PageProps> = ({
  init,
  data: { content, title, acf },
}: PageProps) => {
  return (
    <Layout init={init}>
      <div className={style.root}>
        <Head>
          <title>{acf.seo_heading || 'Блог ПрофКомплектация'}</title>
          {acf.seo_desc && (
            <meta
              property="description"
              name="Description"
              key="description"
              content={acf.seo_desc}
            />
          )}
          {acf.seo_heading && (
            <meta property="og:title" content={acf.seo_heading} />
          )}
          {acf?.image?.sizes && (
            <meta property="og:image" content={acf.image.sizes?.medium_large} />
          )}
          <meta property="og:type" content="page" />
        </Head>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              {title.rendered && <Heading weight={1}>{title.rendered}</Heading>}
              {acf.image?.sizes?.large && (
                <div
                  className={style.image}
                  style={{
                    backgroundImage: acf.image?.sizes?.large
                      ? `url(${acf.image?.sizes?.large})`
                      : `none`,
                  }}
                ></div>
              )}
              {content.rendered && (
                <div
                  className={style.content}
                  dangerouslySetInnerHTML={{ __html: content.rendered }}
                ></div>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  params,
}) {
  if (!params?.post) {
    throw new Error('id is not defined')
  }

  const [res, initRes] = await Promise.all([
    fetch(`${WP_API_HOST}/posts/${params.post}`),
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

export default Post
