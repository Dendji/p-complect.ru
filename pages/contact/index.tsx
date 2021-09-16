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
import { API_HOST } from '../../utils/const'
import { IInit } from '../../@types/common'

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
  init: IInit
}

const ContactPage: NextPage<PageProps> = ({ data, init }: PageProps) => {
  return (
    <Layout init={init}>
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
  const [res, initRes] = await Promise.all([
    fetch(`${API_HOST}/pages/contact`),
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

export default ContactPage
