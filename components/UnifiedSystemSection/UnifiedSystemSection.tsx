import React from 'react'
import style from './UnifiedSystemSection.module.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Heading from '../Heading/Heading'
import Section from '../Section/Section'
import StandardImage from '../StandardImage/StandardImage'

const items = [
  {
    image: '/images/mini-passport.jpg',
    title: 'Паспорт',
    description:
      'Главный разворот и прописка. Печатный и рукописный, разных стран и образцов',
    width: 62,
  },
  {
    image: '/images/mini-vu.jpg',
    title: 'Водительское удостоверение',
    description: 'Образцы разных стран и годов',
    width: 60,
  },
  {
    image: '/images/mini-sts.jpg',
    title: 'Документы на автомобиль',
    description: 'СТС, ПТС и другие',
    width: 51,
  },
  {
    image: '/images/mini-snils.jpg',
    title: 'Персональные документы',
    description: 'СНИЛС, ИНН, банковские карты, 2-НДФЛ и другие',
    width: 63,
  },
  {
    image: '/images/mini-faktura.jpg',
    title: 'Документы юрлиц',
    description: 'ОГРН, счета-фактуры, договоры и другие',
    width: 96,
  },
]

export default function UnifiedSystemSection() {
  return (
    <Section dark>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={8} md={8}>
            <div className={style.heading}>
              <Heading weight={2} className={style.heading} size="large">
                Одна система для всех документов
              </Heading>
              <Heading weight={3} size="medium">
                <span className={style.subheading}>
                  Загружайте и обрабатываете документы разных типов на одном
                  экране
                </span>
              </Heading>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div className={style.item}>
                <div className={style.img} style={{ width: item.width }}>
                  <StandardImage src={item.image} />
                </div>
                <div className={style.title}>{item.title}</div>
                <div className={style.description}>{item.description}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
