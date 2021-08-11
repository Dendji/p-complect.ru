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

interface PageProps {
  data: {
    title: string
    items: {
      title: string
      items: {
        [key: string]: string
      }[]
    }[]
  }
}

const ContactPage: NextPage<PageProps> = ({ data }: PageProps) => {
  // const dispatch = useDispatch()

  // const openContactUs = () => {
  //   dispatch({
  //     type: 'OPEN_CONTACT_US',
  //   })
  // }

  return (
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
              <div className="map">
                <YandexMap src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A497006510b013bd96dcbd24921b9cb3f5ab5c7841beefa016a5b9c26b2bfd322&amp;width=100%25&amp;height=537&amp;lang=ru_RU&amp;scroll=false" />
              </div>
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
                    if (d.title === 'Позвонить') {
                      return (
                        <div>
                          <RLink href={`tel: ${item['текст']}`}>
                            {item['текст']}
                          </RLink>
                        </div>
                      )
                    }
                    if (d.title === 'Адрес') {
                      return (
                        <div>
                          <RLink
                            href="https://yandex.ru/maps/-/CCUYJ0wDPB"
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
            {/* <Grid item xs={12} md={4}>
              <Heading weight={4} size="small" className={style.blockTitle}>
                Позвонить
              </Heading>
              <div className={style.contact}>
                <div>
                  <RLink href="tel: +7 495 970 55 05">+7 495 970 55 05</RLink>
                </div>
                <div>
                  <RLink href="tel: +7 916 825 03 03">+7 916 825 03 03</RLink>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <Heading weight={4} size="small" className={style.blockTitle}>
                Адрес
              </Heading>
              <div className={style.contact}>
                <RLink
                  href="https://yandex.ru/maps/-/CCUYJ0wDPB"
                  className={style.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Московская обл.,
                  <br /> г. Люберцы, ул. Кирова, д. 20А
                </RLink>
              </div>
            </Grid> */}
          </Grid>
        </Container>
      </Section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({}) {
  // if (!params?.category_id) {
  //   throw new Error('id is not defined')
  // }

  const res = await fetch(
    'https://wp-api.testing.monster/wp-json/api/v1/pages/contact'
  )

  // const categoriesRes = await fetch(
  //   `https://wp-api.testing.monster/wp-json/api/v1/categories`
  // )

  const data = await res.json()
  console.log('🚀 ~ file: index.tsx ~ line 85 ~ data', data)
  // const categories = await categoriesRes.json()

  return {
    props: {
      data,
      // categories,
      // categoryId: params.category_id,
    },
  }
}

export default ContactPage
