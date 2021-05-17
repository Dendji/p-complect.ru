import React from 'react'
import { getAllPostsWithSlug, getPostWithSlug } from '../../api/api'
import style from './SingleArticle.module.css'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Paragraph from '../../components/Paragraph/Paragraph'
import Heading from '../../components/Heading/Heading'
import { Mapper } from '../../utils/mapper'
import { IArticle } from '.'
import Badge from '../../components/Badge/Badge'
import StandardImage from '../../components/StandardImage/StandardImage'

interface PageProps {
  post: IArticle | null
}

const FullArticle: NextPage<PageProps> = ({ post }: PageProps) => {
  if (!post) {
    throw new Error('no post')
  }

  const { title, cover, preview, body, badge, page_title, description } = post

  return (
    <div className={style.root}>
      <Head>
        <title>{page_title}</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content={description}
        />
        <meta property="og:title" content={post?.title} />
        <meta property="og:type" content="page" />
      </Head>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            <div>
              <Badge>{badge}</Badge>
              <Heading weight={1} className={style.h1}>
                {title}
              </Heading>
            </div>

            <Paragraph>{preview}</Paragraph>
          </Grid>
        </Grid>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} md={12}>
              <StandardImage src={cover} />
            </Grid>
          </Grid>
        </Container>
        {body && (
          <Container>
            <Grid container justify="center">
              <Grid item xs={12} md={8}>
                {body.map((b, index) => {
                  if (b.type === 'paragraph') {
                    return <Paragraph key={index}>{b.text}</Paragraph>
                  }
                  if (b.type.includes('heading')) {
                    return (
                      <Heading
                        key={index}
                        className={style.h2}
                        weight={Number.parseInt(b.type[b.type.length - 1])}
                      >
                        {b.text}
                      </Heading>
                    )
                  }

                  if (b.type === 'image') {
                    return <StandardImage src={b.url} key={index} />
                  }
                })}
              </Grid>
            </Grid>
          </Container>
        )}
      </Container>
    </div>
  )
}

export default FullArticle

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error('No params')
  }

  if (!params.id) {
    throw new Error('No page id specified')
  }

  if (Array.isArray(params.id)) {
    throw new Error('Params id is not valid type of array')
  }

  const data = await getPostWithSlug(params.id)

  return {
    props: {
      post: Mapper.mapFullBlogPost(data?.blog_post) ?? null,
    },
  }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const allPosts = await getAllPostsWithSlug()
//   return {
//     paths: allPosts?.map(({ node }: any) => `/blog/${node._meta.uid}`) || [],
//     fallback: false,
//   }
// }
