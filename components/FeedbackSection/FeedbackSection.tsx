import React, { useState } from 'react'
import style from './FeedbackSection.module.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Section from '../Section/Section'
import Heading from '../Heading/Heading'
import RoundedCard from '../RoundedCard/RoundedCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { SwiperOptions } from 'swiper'
import SwiperControls from '../SwiperControls/SwiperControls'
import Button, { ButtonTheme } from '../Button/Button'
import { MultiImage } from '../../pages/about'

export interface IReview {
  avatar: MultiImage | null
  content: string | null
  href: string | null
  name: string
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
  return items.length > 0 ? (
    <Section className={style.root} dark>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Heading weight={2}>Отзывы клиентов</Heading>
            <SwiperControls
              onLeftClick={() => swiperInstance?.slideNext()}
              onRightClick={() => swiperInstance?.slidePrev()}
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
              {items.map((r, key) => (
                <SwiperSlide className={style.slide} tag="span" key={key}>
                  <RoundedCard>
                    <div className={style.review}>
                      <div
                        className={style.avatar}
                        style={{ backgroundImage: `url(${r.avatar?.medium})` }}
                      >
                        {/* {r.avatar && <StandardImage src={r.avatar.medium} />} */}
                        {/* <StandardImage src={faker.image.avatar()} /> */}
                      </div>
                      <div className={style.content}>
                        {r.content && (
                          <div
                            className={style.text}
                            dangerouslySetInnerHTML={{ __html: r.content }}
                          ></div>
                        )}
                        {r.href && (
                          <a href={r.href} target="_blank">
                            <Button
                              theme={ButtonTheme.Link}
                              className={style.link}
                            >
                              Смотреть отзыв в Яндекс
                            </Button>
                          </a>
                        )}
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
  ) : null
}
