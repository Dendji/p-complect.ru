import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import Article from '../../components/Article/Article'
import Text, { TypographyTheme } from '../../components/Typography/Typography'
import { mockPosts } from '../../mocks/blog'

export type IArticlePreview = Omit<IArticle, 'body'>

export interface IArticle {
  id: string
  url: string
  cover: string
  title: string
  preview: string
  body?: React.ReactNode
}

interface PageProps {
  posts: IArticlePreview[]
}

const Blog: NextPage<PageProps> = ({ posts }: PageProps) => {
  return (
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
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            <div className={style.intro}>
              <Heading weight={1}>Статьи</Heading>
              <Text theme={TypographyTheme.Standard} size={24}>
                Здесь мы делимся новостями нашей компании и знаниями из
                строительной сферы
              </Text>
            </div>
          </Grid>
        </Grid>
        <div className={style.headliner}>
          {posts.slice(0, 1).map((a) => (
            <Article {...a} headliner />
          ))}
        </div>
        {posts.length > 1 && (
          <div className={style.articles}>
            {posts.slice(1).map((a) => (
              <Article {...a} />
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}

export async function getStaticProps({ preview = false, previewData }: any) {
  // const allPosts = await getAllPostsForHome(previewData)
  return {
    props: { posts: mockPosts },
  }
}

export default Blog
