import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './home/index.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../components/Section/Section'
import DistributorSection from '../components/DistributorSection/DistributorSection'
import BrandsSection from '../components/BrandsSection/BrandsSection'
import BlogSection from '../components/BlogSection/BlogSection'
import AuthorizedSection from '../components/AuthorizedSection/AuthorizedSection'
import FeedbackSection from '../components/FeedbackSection/FeedbackSection'
import faker from 'faker'
// import SlidersSection from '../components/SlidersSection/SlidersSection'

interface PageProps {}

const articles = [
  {
    heading: 'Мастики как использовать',
    description:
      'Если вы сейчас ищете простой и надежный способ справиться с подобными проблемами, сделайте ремонт кровли битумной мастикой.',
    img: '/images/blog/blog1.jpeg',
  },
  {
    heading: 'Монтаж теплоизоляции',
    description:
      'Если остались материалы от ремонта, их можно превратить в настольную игру — не скучную плоскую карту.',
    img: '/images/blog/blog2.jpeg',
  },
  {
    heading: 'Труба зовет',
    description: 'Что нужно знать о монтаже системы водоснабжения',
    img: '/images/blog/blog3.jpeg',
  },
]

const reviews = [
  {
    img: faker.image.avatar(),
    content:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которое, которой своих? Продолжил реторический это ipsum курсивных, пустился заманивший буквенных одна встретил составитель щеке коварный рекламных рыбного страна всеми lorem своего напоивший! Языкового алфавит, по всей что грамматики образ моей!',
    link: 'https://yandex.ru/maps/org/profkomplektatsiya/80970129270/',
  },
  {
    img: faker.image.avatar(),
    content:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которое, которой своих? Продолжил реторический это ipsum курсивных, пустился заманивший буквенных одна встретил составитель щеке коварный рекламных рыбного страна всеми lorem своего напоивший! Языкового алфавит, по всей что грамматики образ моей!',
    link: 'https://yandex.ru/maps/org/profkomplektatsiya/80970129270/',
  },
  {
    img: faker.image.avatar(),
    content:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которое, которой своих? Продолжил реторический это ipsum курсивных, пустился заманивший буквенных одна встретил составитель щеке коварный рекламных рыбного страна всеми lorem своего напоивший! Языкового алфавит, по всей что грамматики образ моей!',
    link: 'https://yandex.ru/maps/org/profkomplektatsiya/80970129270/',
  },
  {
    img: faker.image.avatar(),
    content:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которое, которой своих? Продолжил реторический это ipsum курсивных, пустился заманивший буквенных одна встретил составитель щеке коварный рекламных рыбного страна всеми lorem своего напоивший! Языкового алфавит, по всей что грамматики образ моей!',
    link: 'https://yandex.ru/maps/org/profkomplektatsiya/80970129270/',
  },
]

// const mainSlides = [
//   {
//     img: '',
//     content: '',
//     heading: '',
//     buttonText: '',
//     buttonHref: '',
//   },
// ]
const ContactPage: NextPage<PageProps> = ({}: PageProps) => {
  return (
    <div className={style.root}>
      <Head>
        <title>ПрофКомплектация | Строительные материалы</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      {/* <SlidersSection mainSlides={mainSlides} /> */}
      <Section className={style.intro}>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} md={12}></Grid>
          </Grid>
        </Container>
      </Section>
      <FeedbackSection items={reviews} />
      <DistributorSection />
      <BrandsSection />
      <BlogSection items={articles} />
      <AuthorizedSection />
    </div>
  )
}

export default ContactPage
