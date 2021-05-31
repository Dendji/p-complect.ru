import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import Typography from '../../components/Typography/Typography'
import Section from '../../components/Section/Section'
import ClientCard from '../../components/ClientCard/ClientCard'
import Objects from '../../components/Objects/Objects'

interface PageProps {}

const tabs = [
  {
    image: '/images/client1.jpg',
    text: 'Жилые коплексы',
    value: 'live',
  },
  {
    image: '/images/client2.jpg',
    text: 'Торговые центры',
    value: 'commercial',
  },
  {
    image: '/images/client3.jpg',
    text: 'Школы',
    value: 'school',
  },
  {
    image: '/images/client4.jpg',
    text: 'Детские сады',
    value: 'kindergarten',
  },
  {
    image: '/images/client5.jpg',
    text: 'Тендеры',
    value: 'tenders',
  },
  {
    image: '/images/client6.jpeg',
    text: 'Промышленно-производственные предприятия (ГРЭС, ТЭЦ)',
    value: 'industry',
  },
]

const objects = [
  {
    category: 'live',
    images: [
      '/images/objects/IMG_4978.JPG',
      '/images/objects/IMG_4979.JPG',
      '/images/objects/IMG_5365.JPG',
      '/images/objects/IMG_5366.JPG',
      '/images/objects/IMG_5367.JPG',
    ],
    heading: 'г. Люберцы ул. Попова 19',
    content: (
      <>
        <Typography>
          Начали монтаж вентилируемого фасада г. Люберцы, ул. Попова 19, по
          програме ФКР
        </Typography>
        <Typography>
          На объекте смонтирована подсистема и выполнено утепление фасада,
          ведётся монтаж керамогранита. Используемые материалы: подсистема
          Doksal, утепление Baswool ВЕНТ ФАСАД т. 50+50 мм, керамогранит Грани
          Таганая.
        </Typography>
      </>
    ),
  },
  {
    category: 'tenders',
    images: ['/images/objects/IMG_5348.jpeg', '/images/objects/IMG_5347.jpeg'],
    heading: 'г. Люберцы Ул. Юбилейная 5а ЖЭУ №1',
    content: (
      <>
        <Typography>
          Завершены работы по монтажу вентилируемого фасада по адресу г.
          Люберцы, ул. Юбилейная 5а, ЖЭУ №1
        </Typography>
        <Typography>
          При монтаже вентилируемого фасада, использовали материалы: утепление
          Baswool ВЕНТ ФАСАД т. 100 мм, керамогранит Эстима.
        </Typography>
      </>
    ),
  },
]

const Portfolio: NextPage<PageProps> = ({}: PageProps) => {
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
      <Section className={style.section}>
        <Container>
          <Heading weight={2}>С кем мы работаем</Heading>
          <div className={style.clientsGrid}>
            {tabs.map((item, index) => (
              <ClientCard key={index} image={item.image} heading={item.text} />
            ))}
          </div>
        </Container>
      </Section>
      <Objects tabs={tabs} objects={objects} />
    </>
  )
}

export default Portfolio
