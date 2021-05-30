import React, { useState } from 'react'
import style from './FeedbackSection.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../Section/Section'
import Heading from '../Heading/Heading'
import RoundedCard from '../RoundedCard/RoundedCard'
import StandardImage from '../StandardImage/StandardImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { SwiperOptions } from 'swiper'
import SwiperControls from '../SwiperControls/SwiperControls'
import Button, { ButtonTheme } from '../Button/Button'

export interface IReview {
  img: string
  content: React.ReactNode
  link: string
}

interface Props {
  items: IReview[]
}

export default function FeedbackSection({ items }: Props) {
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
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Heading weight={2}>Отзывы клиентов</Heading>
            <SwiperControls
              onLeftClick={() => swiperInstance?.slidePrev()}
              onRightClick={() => swiperInstance?.slideNext()}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Swiper
              speed={800}
              slidesPerView={2}
              resistance={false}
              spaceBetween={10}
              className={style.slider}
              onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)}
              {...swiperParams}
            >
              {items.map((r) => (
                <SwiperSlide className={style.slide} tag="span">
                  <RoundedCard>
                    <div className={style.review}>
                      <div className={style.avatar}>
                        {r.img && r.img.length && <StandardImage src={r.img} />}
                      </div>
                      <div className={style.content}>
                        <div className={style.text}>{r.content}</div>
                        <a
                          href="https://yandex.ru/maps/org/profkomplektatsiya/80970129270/reviews/"
                          target="_blank"
                        >
                          <Button
                            theme={ButtonTheme.Link}
                            className={style.link}
                          >
                            Смотреть отзыв в Яндекс
                          </Button>
                        </a>
                      </div>
                    </div>
                  </RoundedCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
