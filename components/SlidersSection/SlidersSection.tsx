import React, { useState } from 'react'
import style from './SlidersSection.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../Section/Section'
import RoundedCard from '../RoundedCard/RoundedCard'
import StandardImage from '../StandardImage/StandardImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { SwiperOptions } from 'swiper'
import Button, { ButtonTheme } from '../Button/Button'

export interface ISlide {
  img?: string
  heading?: string
  content: React.ReactNode
  buttonText?: string
  buttonHref?: string
}

interface Props {
  mainSlides: ISlide[]
}

export default function SlidersSection({ mainSlides }: Props) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  const swiperParams: SwiperOptions = {
    breakpoints: {
      320: {
        slidesPerView: 1.15,
        slidesOffsetBefore: 10,
        slidesOffsetAfter: 10,
        spaceBetween: 10,
      },
      640: {
        spaceBetween: 40,
        centeredSlides: false,
        slidesPerView: 'auto',
        freeMode: true,
      },
      1024: {
        // slidesOffsetBefore: 200,
        spaceBetween: 40,
        centeredSlides: false,
        slidesPerView: 2,
      },
    },
  }
  return (
    <Section className={style.root} dark>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Swiper
              speed={800}
              slidesPerView={2}
              resistance={false}
              spaceBetween={10}
              className={style.slider}
              onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)}
              {...swiperParams}
            >
              {mainSlides.map((s) => (
                <SwiperSlide className={style.slide} tag="span">
                  <div
                    className={style.slideContent}
                    style={{
                      backgroundImage: `url(${s.img})`,
                    }}
                  >
                    <div className={style.content}>
                      <div className={style.heading}>{s.heading}</div>
                      <div className={style.text}>{s.content}</div>
                      <a href={s.buttonHref} target="_blank">
                        <Button theme={ButtonTheme.Link} className={style.link}>
                          {s.buttonHref}
                        </Button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
