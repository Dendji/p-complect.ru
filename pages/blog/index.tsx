import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Article from '../../components/Article/Article'
import { mockPosts } from '../../mocks/blog'
import Layout from '../../components/Layout/Layout'
import { API_HOST, WP_API_HOST } from '../../utils/const'
import { IInit } from '../../@types/common'
import { MultiImage } from '../about'

export type IArticlePreview = Omit<IArticle, 'body'>

export interface IArticle {
  id: string
  url: string | null
  cover: string | null
  title: string | null
  preview: string | null
  body?: string | null
}

interface PageProps {
  init: IInit
  data: {
    id: string
    title: {
      rendered: string | null
    }
    acf: {
      short: string | null
      image: {
        sizes: MultiImage | null
      } | null
    }
  }[]
}

const Blog: NextPage<PageProps> = ({ init, data }: PageProps) => {
  console.log('🚀 ~ file: index.tsx ~ line 34 ~ data', data)
  const posts = mockPosts
  return (
    <Layout init={init}>
      <div className={style.root}>
        <Head>
          <title>Блог ПрофКомплектация</title>
          <meta
            property="description"
            name="Description"
            key="description"
            content=""
          />
          <meta property="og:title" content="" />
          <meta property="og:type" content="page" />
        </Head>
        <Container>
          <div className={style.headliner}>
            {data.slice(0, 1).map((a) => (
              <Article
                url={`/blog/${a.id}`}
                id={a.id}
                cover={a.acf.image?.sizes?.large || null}
                title={a.title.rendered}
                preview={a.acf.short}
                headliner
              />
            ))}
          </div>
          {posts.length > 1 && (
            <div className={style.articles}>
              {data.slice(1).map((a) => (
                <Article
                  url={`/blog/${a.id}`}
                  id={a.id}
                  cover={a.acf.image?.sizes?.large || null}
                  title={a.title.rendered}
                  preview={a.acf.short}
                />
              ))}
            </div>
          )}
        </Container>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function () {
  const [res, initRes] = await Promise.all([
    fetch(`${WP_API_HOST}/posts`),
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

export default Blog
