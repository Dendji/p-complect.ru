import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import Typography from '../../components/Typography/Typography'
import Section from '../../components/Section/Section'
import RoundedCard from '../../components/RoundedCard/RoundedCard'
import ClientCard from '../../components/ClientCard/ClientCard'
import Carousel from '../../components/Carousel/Carousel'

interface PageProps {}

const clients = [
  {
    image: '/images/client1.jpg',
    heading: 'Жилые коплексы',
  },
  {
    image: '/images/client2.jpg',
    heading: 'Торговые центры',
  },
  {
    image: '/images/client3.jpg',
    heading: 'Школы',
  },
  {
    image: '/images/client4.jpg',
    heading: 'Детские сады',
  },
  {
    image: '/images/client5.jpg',
    heading: 'Тендеры',
  },
]

const objects = [
  {
    images: ['/images/client1.jpg', '/images/client2.jpg'],
    heading: 'Объект №1',
    content: (
      <>
        <Typography>
          Завершены работы по монтажу вентилируемого фасада по адресу г. Люберцы
          Ул. Юбилейная 5а ЖЭУ №1
        </Typography>
        <Typography>
          При монтаже вентилируемого фасада, использовали материалы: утепление
          Baswool ВЕНТ ФАСАД т. 100 мм, керамогранит Эстима.
        </Typography>
      </>
    ),
  },
  {
    images: ['/images/client1.jpg', '/images/client2.jpg'],
    heading: 'Объект №2',
    content: (
      <>
        <Typography>
          Начали монтаж вентилируемого фасада г. Люберцы ул. Попова 19 по
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
          content="Dbrain ✅ позволяет распознать документы любого качества. ⭐ Безопасное распознавание документов без передачи персональных данных. ✅ Автоматизируйте обработку документов"
        />
      </Head>
      <Section>
        <Container>
          <Heading weight={2}>С кем мы работаем</Heading>
          <div className={style.clientsGrid}>
            {clients.map((item) => (
              <ClientCard {...item} />
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className={style.objects}>
            {objects.map((o) => (
              <RoundedCard>
                <div className={style.object}>
                  <Carousel>
                    <img
                      src="/images/distributor.jpg"
                      className={style.slideImg}
                    ></img>
                    <img src="/images/distributor.jpg"></img>
                  </Carousel>
                  <div className={style.cardContent}>
                    <Heading weight={1} size="medium" theme="orange" noMt>
                      {o.heading}
                    </Heading>
                    <div className={style.content}>{o.content}</div>
                  </div>
                </div>
              </RoundedCard>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

export default About
