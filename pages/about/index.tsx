import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Heading from '../../components/Heading/Heading'
import Typography from '../../components/Typography/Typography'
import Section from '../../components/Section/Section'
import StandardImage from '../../components/StandardImage/StandardImage'
import RoundedCard from '../../components/RoundedCard/RoundedCard'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'

interface PageProps {}

const conceptionItems = [
  {
    icon: '/images/conception1.png',
    heading: 'Каждому новому клиенту',
    content: (
      <>
        <Typography>
          «Профкомплектация» предлагает продукцию нескольких надежных
          производителей в разных ценовых сегментах — от эконом до
          премиум-класса. Вы гарантированно сможете подобрать строительные и
          отделочные материалы под конкретную цель и бюджет.
        </Typography>
        <Typography>
          Большая частьпредставленного ассортимента уже есть на складах. Не
          теряйте время на ожидание прибытия заказа — обратитесь к нам, выберите
          удобную дату отгрузки и получите материалы в ближайшее время.{' '}
        </Typography>
      </>
    ),
  },
  {
    icon: '/images/conception2.png',
    heading: 'Каждый топ-менеджер',
    content: (
      <>
        <Typography>
          Команды ООО «Профкомплектация» прошел специальное обучение и
          аттестацию, поэтому является профессионалом в своей сфере. Сотрудники
          с радостью расскажут вам обо всех характеристиках и области применения
          материалов, важности их комплексного подбора и технологиях, которые
          должны соблюдаться при строительстве и отделке.
        </Typography>
      </>
    ),
  },
  {
    icon: '/images/conception3.png',
    heading: 'Современная техника',
    content: (
      <>
        <Typography>
          и штат опытных сотрудников — то, что нужно для организации погрузки и
          доставки материалов. Система упаковки и хранения товаров отработана,
          поэтому вы получите их в лучшем виде.
        </Typography>
      </>
    ),
  },
  {
    icon: '/images/conception4.png',
    heading: 'Наша миссия',
    content: (
      <>
        <Typography>
          Продвижение высоких стандартов строительства по всей России.Профиль
          ООО «Профкомплектация» — это работа с жилищными комплексами, торговыми
          центрами, школами и детскими садами, а также обеспечение коттеджного и
          малоэтажного строительства.
        </Typography>
      </>
    ),
  },
]
const About: NextPage<PageProps> = ({}: PageProps) => {
  return (
    <>
      <Head>
        <title>О ПрофКомплектации</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      <Section>
        <Container>
          <RoundedCard>
            <div className={style.grid}>
              <div
                className={style.img}
                style={{
                  backgroundImage: `url(${'/images/about-company.jpg'})`,
                }}
              >
                {/* <StandardImage src="/images/about-company.jpg"></StandardImage> */}
              </div>
              <div className={style.cardContent}>
                <Heading weight={1} size="medium" theme="orange" noMt>
                  ООО «Профкомплектация»
                </Heading>
                <Typography>
                  Крупный и надежный поставщик строительно-отделочных
                  материалов, имеющий дилерские соглашения с известными
                  российскими и зарубежными производителями. Мы организуем
                  комплексные поставки стройматериалов по всей стране,каждый год
                  обеспечивая ими сотни строительных объектов. Являемся
                  участниками тендеров на строительство и ремонт. Нашим клиентам
                  доступен широкий ассортимент высококачественной продукции,
                  достойное сервисное обслуживание и приятные цены. Мы
                  обеспечиваем лучшие условия как и для строительства крупного
                  складского комплекса,так и для простого утепления стен жилого
                  дома.
                </Typography>
              </div>
            </div>
          </RoundedCard>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <Heading weight={2}>О концепции</Heading>
          <Grid container spacing={3}>
            {conceptionItems.map((item) => (
              <Grid item xs={12} md={6}>
                <div className={style.conceptionItem}>
                  <StandardImage
                    src={item.icon}
                    className={style.conceptionImage}
                  />
                  <div className="content">
                    <Typography>
                      <strong>{item.heading}</strong> <br />
                      {item.content}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <RoundedCard>
            <div className={style.grid}>
              <div className={style.cardContent}>
                <Heading weight={2} size="big" theme="orange" noMt>
                  Вы занимаетесь строительством профессионально?
                </Heading>
                <Typography>
                  Мы — дистрибьютор, который сможет воплотить ваши самые смелые
                  идеи быстро, выгодно и с комфортом. Компания
                  «Профкомплектация» — это индивидуальный подход к каждому
                  клиенту и полное выполнение всех обязательств. Мы нацелены на
                  максимально высокий результат и долгосрочные отношения с
                  клиентами.
                </Typography>
              </div>
              <StandardImage src="/images/distributor.jpg"></StandardImage>
            </div>
          </RoundedCard>
        </Container>
      </Section>
    </>
  )
}

export default About
