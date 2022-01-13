import React, { useState } from 'react'
import style from './SlidersSection.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../Section/Section'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { SwiperOptions } from 'swiper'
import Button, { ButtonTheme } from '../Button/Button'
import SliderControl from '../SliderControl/SliderControl'
import { useTheme, useMediaQuery } from '@material-ui/core'
import classnames from 'classnames'

export interface ISlide {
  category: string | null
  content: string | null
  heading: string | null
  href: string | null
  id: number
  image: string | null
  image_mobile: string | null
  image_tablet: string | null
  button: 'solid' | 'outlined' | null
}

interface Props {
  mainSlides: ISlide[]
}

export default function SlidersSection({ mainSlides }: Props) {
  console.log(
    '🚀 ~ file: SlidersSection.tsx ~ line 29 ~ SlidersSection ~ mainSlides',
    mainSlides
  )
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const isTablet = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  console.log(
    '🚀 ~ file: SlidersSection.tsx ~ line 34 ~ SlidersSection ~ isTablet',
    isTablet
  )

  const swiperParams: SwiperOptions = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        // slidesOffsetBefore: 10,
        // slidesOffsetAfter: 10,
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
        slidesPerView: 1,
      },
    },
  }
  return (
    <Section className={style.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className={style.swiperContainer}>
              <div className={style.controls}>
                <SliderControl
                  onClick={() => swiperInstance?.slidePrev()}
                  className={style.left}
                />
                <SliderControl
                  onClick={() => swiperInstance?.slideNext()}
                  className={style.right}
                  right
                />
              </div>
              <Swiper
                speed={800}
                slidesPerView={1}
                resistance={false}
                spaceBetween={10}
                className={style.slider}
                onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)}
                {...swiperParams}
              >
                {mainSlides.map((s, i) => (
                  <SwiperSlide className={style.slide} tag="span" key={i}>
                    <div
                      className={classnames(style.slideContent)}
                      style={{
                        backgroundImage: s.image
                          ? `url(${
                              isMobile
                                ? s.image_mobile
                                : isTablet
                                ? s.image_tablet
                                : s.image
                            })`
                          : 'none',
                      }}
                    >
                      <div className={style.content}>
                        <div className={style.text}>
                          {/* {s.heading && (
                            <div className={style.heading}>{s.heading}</div>
                          )} */}
                          {s.content && (
                            <div
                              className={style.text}
                              dangerouslySetInnerHTML={{ __html: s.content }}
                            ></div>
                          )}
                        </div>
                        {s.href && (
                          <a
                            href={s.href}
                            target="_blank"
                            className={style.link}
                          >
                            <Button
                              theme={
                                s.button === 'outlined'
                                  ? ButtonTheme.OrangeBordered
                                  : ButtonTheme.Orange
                              }
                              className={style.link}
                            >
                              {'Подробнее'}
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
