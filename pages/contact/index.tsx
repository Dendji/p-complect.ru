import { NextPage } from 'next'
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

interface PageProps {}

const ContactPage: NextPage<PageProps> = ({}: PageProps) => {
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
              <Heading weight={2}>Связаться</Heading>
              <div className="map">
                {/* <script
                  type="text/javascript"
                  charSet="utf-8"
                  async
                  src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A497006510b013bd96dcbd24921b9cb3f5ab5c7841beefa016a5b9c26b2bfd322&amp;width=100%25&amp;height=537&amp;lang=ru_RU&amp;scroll=false"
                ></script> */}
                <YandexMap src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A497006510b013bd96dcbd24921b9cb3f5ab5c7841beefa016a5b9c26b2bfd322&amp;width=100%25&amp;height=537&amp;lang=ru_RU&amp;scroll=false" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} md={4}>
              <Heading weight={4} size="small" className={style.blockTitle}>
                Время работы
              </Heading>
              <div className={style.contact}>
                <div>
                  <span>пн-чт</span>
                  <strong>9:00 – 18:00</strong>
                </div>
                <div>
                  <span>пт</span>
                  <strong>9:00 – 17:00</strong>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
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
            </Grid>
          </Grid>
        </Container>
      </Section>
    </div>
  )
}

export default ContactPage
