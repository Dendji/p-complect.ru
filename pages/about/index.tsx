import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../../components/Section/Section'
import StandardImage from '../../components/StandardImage/StandardImage'
import RoundedCard from '../../components/RoundedCard/RoundedCard'
import Heading from '../../components/Heading/Heading'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useTheme from '@material-ui/core/styles/useTheme'
import ImageLightbox from '../../components/ImageLightbox/ImageLightbox'
import Layout from '../../components/Layout/Layout'
import { API_HOST } from '../../utils/const'

export interface MultiImage {
  thumbnail: string
  medium: string
  medium_large: string
  large: string
  '1536x1536': string
  '2048x2048': string
}

interface PageProps {
  data: {
    title: string
    about: {
      title: string
      content: string
      image: MultiImage
    }
    certificates: {
      title: string
      images: (MultiImage | null)[]
    }
    benefits: {
      title: string
      items: {
        icon: string
        title: string
        content: string
      }[]
    }
    extra: {
      title: string
      content: string
      image: MultiImage
    }
    seo_description: string
    seo_title: string
  }
}

const About: NextPage<PageProps> = ({ data }: PageProps) => {
  console.log('🚀 ~ file: index.tsx ~ line 115 ~ data', data)
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Layout>
      <Head>
        <title>{data.seo_title || 'ПРОФКОМПЛЕКТАЦИЯ'}</title>
        {data.seo_description && (
          <meta
            property="description"
            name="Description"
            key="description"
            content={data.seo_description}
          />
        )}
      </Head>
      <Section className={style.section}>
        <Container>
          {data.title && <Heading weight={2}>{data.title}</Heading>}
          <div className={style.card}>
            <div className={style.grid}>
              <div
                className={style.img}
                style={{
                  backgroundImage: `url(${data.about.image.large})`,
                }}
              ></div>
              <div className={style.text}>
                {/* <Heading
                  weight={1}
                  size="medium"
                  theme="orange"
                  noMt
                  className={style.h1}
                >
                  ООО «ПРОФКОМПЛЕКТАЦИЯ»
                </Heading> */}
                <div
                  dangerouslySetInnerHTML={{ __html: data.about.content }}
                ></div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section dark>
        <Container>
          {data.certificates.title && (
            <Heading weight={2} className={style.h2}>
              {data.certificates.title}
            </Heading>
          )}
          <Grid container spacing={3}>
            {data.certificates.images.map((image) =>
              image ? (
                <Grid item xs={6} md={3}>
                  <ImageLightbox src={image.large} />
                </Grid>
              ) : null
            )}
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          {data.benefits.title && (
            <Heading weight={2} className={style.h2}>
              {data.benefits.title}
            </Heading>
          )}
          <Grid container spacing={3}>
            {data.benefits.items.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <div className={style.conceptionItem}>
                  {item.icon && (
                    <StandardImage
                      src={item.icon}
                      className={style.conceptionImage}
                    />
                  )}
                  <div>
                    {item.title && <strong>{item.title}</strong>}
                    <br />
                    {item.content && (
                      <div
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      ></div>
                    )}
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
      <Section dark>
        <Container>
          <RoundedCard className={style.card}>
            <div className={style.grid}>
              <div className={style.cardContent}>
                {data.extra.title && (
                  <Heading
                    weight={2}
                    size="big"
                    theme="orange"
                    noMt
                    className={style.h2}
                  >
                    {data.extra.title}
                  </Heading>
                )}
                {isMobile && (
                  <StandardImage src={data.extra.image.large}></StandardImage>
                )}
                <div
                  dangerouslySetInnerHTML={{ __html: data.extra.content }}
                ></div>
              </div>
              {!isMobile && (
                <div
                  className={style.sectionImage}
                  style={{
                    backgroundImage: `url(${data.extra.image.large})`,
                  }}
                ></div>
              )}
            </div>
          </RoundedCard>
        </Container>
      </Section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({}) {
  const res = await fetch(`${API_HOST}/pages/about`)

  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default About
