import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import Article from '../../components/Article/Article'
import Text, { TypographyTheme } from '../../components/Typography/Typography'

export type IArticlePreview = Omit<
  IArticle,
  'body' | 'page_title' | 'description'
>

export interface IArticle {
  slug: string
  cover: string
  badge: string
  title: string
  preview: string
  page_title: string
  description: string
  body?: {
    text: string
    url?: string
    type:
      | 'paragraph'
      | 'list-item'
      | 'heading1'
      | 'heading2'
      | 'heading3'
      | 'heading4'
      | 'heading5'
      | 'image'
  }[]
}

interface PageProps {
  allPosts: IArticlePreview[]
}

const Blog: NextPage<PageProps> = ({ allPosts }: PageProps) => {
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
                Здесь мы делимся кейсами, обновлениями продукта и другой
                полезной информацией
              </Text>
            </div>
          </Grid>
        </Grid>
        <div className={style.headliner}>
          {allPosts.slice(0, 1).map((a) => (
            <Article {...a} headliner />
          ))}
        </div>
        {allPosts.length > 1 && (
          <div className={style.articles}>
            {allPosts.slice(1).map((a) => (
              <Article {...a} />
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}

// export async function getStaticProps({ preview = false, previewData }: any) {
//   const allPosts = await getAllPostsForHome(previewData)
//   return {
//     props: { preview, allPosts: allPosts.map(Mapper.mapBlogPost) },
//   }
// }

export default Blog
