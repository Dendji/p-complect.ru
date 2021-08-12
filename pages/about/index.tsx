import { NextPage } from 'next'
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

interface PageProps {}

const conceptionItems = [
  {
    icon: '/images/conception1.png',
    heading: 'Каждому новому клиенту',
    content: (
      <>
        &laquo;ПРОФКОМПЛЕКТАЦИЯ&raquo; предлагает продукцию нескольких надежных
        производителей в&nbsp;разных ценовых сегментах&nbsp;&mdash;
        от&nbsp;эконом до&nbsp;премиум-класса. Вы&nbsp;гарантированно сможете
        подобрать строительные и&nbsp;отделочные материалы под конкретную цель
        и&nbsp;бюджет.
      </>
    ),
  },
  {
    icon: '/images/conception2.png',
    heading: 'Каждый топ-менеджер',
    content: (
      <>
        команды ООО &laquo;ПРОФКОМПЛЕКТАЦИЯ&raquo; прошел специальное обучение
        и&nbsp;аттестацию, поэтому является профессионалом в&nbsp;своей сфере.
        Сотрудники с&nbsp;радостью расскажут вам обо всех характеристиках
        и&nbsp;области применения материалов, важности их&nbsp;комплексного
        подбора и&nbsp;технологиях, которые должны соблюдаться при строительстве
        и&nbsp;отделке.
      </>
    ),
  },
  {
    icon: '/images/conception3.png',
    heading: 'Современная техника',
    content: (
      <>
        и&nbsp;штат опытных сотрудников&nbsp;&mdash; то, что нужно для
        организации погрузки и&nbsp;доставки материалов. Система упаковки
        и&nbsp;хранения товаров отработана, поэтому вы&nbsp;получите
        их&nbsp;в&nbsp;лучшем виде.
        <br /> <br />
        Большая часть представленного ассортимента уже есть на&nbsp;складах.
        Не&nbsp;теряйте время на&nbsp;ожидание прибытия заказа&nbsp;&mdash;
        обратитесь к&nbsp;нам, выберите удобную дату отгрузки и&nbsp;получите
        материалы в&nbsp;ближайшее время.
      </>
    ),
  },
  {
    icon: '/images/conception4.png',
    heading: 'Наша миссия',
    content: (
      <>
        это продвижение высоких стандартов строительства по&nbsp;всей России.
        Профиль ООО &laquo;ПРОФКОМПЛЕКТАЦИЯ&raquo;&nbsp;&mdash; это работа
        с&nbsp;жилищными комплексами, торговыми центрами, школами
        и&nbsp;детскими садами, а&nbsp;также обеспечение коттеджного
        и&nbsp;малоэтажного строительства.
      </>
    ),
  },
]
const About: NextPage<PageProps> = ({}: PageProps) => {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Layout>
      <Head>
        <title>О ПрофКомплектации</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      <Section className={style.section}>
        <Container>
          <Heading weight={2}>О компании</Heading>
          <RoundedCard className={style.card}>
            <div className={style.grid}>
              <div
                className={style.img}
                style={{
                  backgroundImage: `url(${'/images/about-company.jpeg'})`,
                }}
              ></div>
              <div className={style.cardContent}>
                <Heading
                  weight={1}
                  size="medium"
                  theme="orange"
                  noMt
                  className={style.h1}
                >
                  ООО «ПРОФКОМПЛЕКТАЦИЯ»
                </Heading>
                <p>
                  Крупный и&nbsp;надежный поставщик строительно-отделочных
                  материалов, имеющий дилерские соглашения с&nbsp;известными
                  российскими и&nbsp;зарубежными производителями.
                </p>
                <p>
                  Мы&nbsp;организуем комплексные поставки стройматериалов
                  по&nbsp;всей стране, каждый год обеспечивая ими сотни
                  строительных объектов. Являемся участниками тендеров
                  на&nbsp;строительство и&nbsp;ремонт.
                </p>
                <p>
                  Нашим клиентам доступен широкий ассортимент высококачественной
                  продукции, достойное сервисное обслуживание и&nbsp;приятные
                  цены. Мы&nbsp;обеспечиваем лучшие условия как и&nbsp;для
                  строительства крупного складского комплекса, так и&nbsp;для
                  простого утепления стен жилого дома.
                </p>
              </div>
            </div>
          </RoundedCard>
        </Container>
      </Section>
      <Section dark>
        <Container>
          <Heading weight={2} className={style.h2}>
            Благодарственные письма
          </Heading>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3}>
              <ImageLightbox src={'/images/letters/IMG_0001.jpg'} />
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading weight={2}>О концепции</Heading>
          <Grid container spacing={3}>
            {conceptionItems.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <div className={style.conceptionItem}>
                  <StandardImage
                    src={item.icon}
                    className={style.conceptionImage}
                  />
                  <div className="content">
                    <p>
                      <strong>{item.heading}</strong> <br />
                      {item.content}
                    </p>
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
                <Heading
                  weight={2}
                  size="big"
                  theme="orange"
                  noMt
                  className={style.h2}
                >
                  Вы занимаетесь строительством профессионально?
                </Heading>
                {isMobile && (
                  <StandardImage src="/images/distributor.jpeg"></StandardImage>
                )}
                <p>
                  Мы — дистрибьютор, который сможет воплотить ваши самые смелые
                  идеи быстро, выгодно и с комфортом. Компания
                  «ПРОФКОМПЛЕКТАЦИЯ» — это индивидуальный подход к каждому
                  клиенту и полное выполнение всех обязательств. Мы нацелены на
                  максимально высокий результат и долгосрочные отношения с
                  клиентами.
                </p>
              </div>
              {!isMobile && (
                <div
                  className={style.sectionImage}
                  style={{
                    backgroundImage: `url(${'/images/distributor.jpeg'})`,
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

export default About
