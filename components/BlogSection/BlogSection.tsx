import React from 'react'
import style from './BlogSection.module.css'
import Heading from '../Heading/Heading'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '../Typography/Typography'
import StandardImage from '../StandardImage/StandardImage'
import Hidden from '@material-ui/core/Hidden'
import Section from '../Section/Section'
import BlogItem, { IBlogItem } from '../BlogItem/BlogItem'
import Button, { ButtonTheme } from '../Button/Button'
import Link from 'next/link'
import { AlphabetSize } from '../../@types/common'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery, useTheme } from '@material-ui/core'

interface Props {
  items: IBlogItem[]
}

export default function BlogSection({ items }: Props) {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Section className={style.root}>
      <Container>
        <Heading weight={2}>Статьи</Heading>
        {isMobile ? (
          <Swiper
            speed={800}
            slidesPerView={1.15}
            centeredSlides
            spaceBetween={10}
            initialSlide={1}
            className={style.slider}
          >
            {items.map((a, index) => (
              <SwiperSlide className={style.slide} tag="span" key={index}>
                <BlogItem {...a} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Grid container spacing={3}>
            {items.map((a, index) => (
              <Grid item xs={12} md={4} key={index}>
                <BlogItem {...a} />
              </Grid>
            ))}
          </Grid>
        )}
        <div className={style.buttons}>
          <Link href="/blog">
            <Button theme={ButtonTheme.Orange} size={AlphabetSize.L}>
              Читать всё
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
