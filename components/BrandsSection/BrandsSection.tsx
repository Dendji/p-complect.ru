import React from 'react'
import style from './BrandsSection.module.css'
import Heading from '../Heading/Heading'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '../Typography/Typography'
import StandardImage from '../StandardImage/StandardImage'
import Hidden from '@mui/material/Hidden'
import Section from '../Section/Section'
const items = [
  { url: '#', image: '/images/brands/baswool.png' },
  { url: '#', image: '/images/brands/fobos.png' },
  { url: '#', image: '/images/brands/bolars.png' },
  { url: '#', image: '/images/brands/kerama.png' },
  { url: '#', image: '/images/brands/T.png' },
  { url: '#', image: '/images/brands/termoclip.png' },
]

interface Props {}
export default function BrandsSection(props: Props) {
  return (
    <Section className={style.root} dark>
      <Container>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} md={6}>
            <Heading weight={2} className={style.heading}>
              Также дистрибьюторы следующих брендов
            </Heading>
            <Hidden smDown>
              <Typography>
                Так же можем предложить материалы для внутренней отделки,
                следующих производителей: Кнауф, Юнис, Волма, Седрус, Вебер
                Ветонит и другие... За более подробной информацией, просим
                обращаться в отдел продаж по телефонам.
              </Typography>
            </Hidden>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={style.grid}>
              {items.map((b, key) => (
                <StandardImage src={b.image} key={key} />
              ))}
            </div>
          </Grid>
          <Hidden smUp>
            <Typography>
              Можем предложить материалы для внутренней отделки, следующих
              производителей: Кнауф, Юнис, Волма, Седрус, Вебер Ветонит и
              другие... За более подробной информацией, просим обращаться в
              отдел продаж по телефонам.
            </Typography>
          </Hidden>
        </Grid>
      </Container>
    </Section>
  )
}
