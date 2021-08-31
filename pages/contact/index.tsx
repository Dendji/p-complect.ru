import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Heading from '../../components/Heading/Heading'
import Section from '../../components/Section/Section'
// import { useDispatch } from 'react-redux'
import RLink from '../../components/RLink/RLink'
import YandexMap from '../../components/YandexMap/YandexMap'
import Layout from '../../components/Layout/Layout'

interface PageProps {
  data: {
    title: string
    map: string | null
    items: {
      type: 'text' | 'tel' | 'map'
      title: string
      items: {
        текст: string
      }[]
      link: string
    }[]
  }
}

const ContactPage: NextPage<PageProps> = ({ data }: PageProps) => {
  return (
    <Layout>
      <div className={style.root}>
        <Head>
          <title>Контакты – ПрофКомплектация</title>
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
              <Grid item xs={12} md={12}>
                <Heading weight={2}>{data.title}</Heading>
                {data.map && data.map.length > 0 && (
                  <div className="map">
                    <YandexMap src={data.map} />
                  </div>
                )}
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Section>
          <Container>
            <Grid container justify="center">
              {data.items.map((d) => (
                <Grid item xs={12} md={4}>
                  <Heading weight={4} size="small" className={style.blockTitle}>
                    {d.title}
                  </Heading>
                  <div className={style.contact}>
                    {d.items.map((item) => {
                      if (d.type === 'tel') {
                        return (
                          <div>
                            <RLink href={`tel: ${item['текст']}`}>
                              {item['текст']}
                            </RLink>
                          </div>
                        )
                      }
                      if (d.type === 'map') {
                        return (
                          <div>
                            <RLink
                              href={d.link}
                              className={style.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {item['текст']}
                            </RLink>
                          </div>
                        )
                      }
                      return (
                        <div
                          dangerouslySetInnerHTML={{ __html: item['текст'] }}
                        ></div>
                      )
                    })}
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({}) {
  const res = await fetch(
    'https://wp-api.testing.monster/wp-json/api/v1/pages/contact'
  )

  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default ContactPage
