import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Section from '../Section/Section'
import style from './Shipping.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import RoundedCard from '../RoundedCard/RoundedCard'
import StandardImage from '../StandardImage/StandardImage'
import { SwiperOptions } from 'swiper'

import SwiperCore from 'swiper'
import SliderControl from '../SliderControl/SliderControl'

interface Props {
  items: {
    title: string
    icon: string
    content: string
  }[]
}
export default function Shipping({ items }: Props) {
  // const refGrid = useRef<HTMLDivElement | null>(null)
  // const theme = useTheme()

  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  const params: SwiperOptions = {
    speed: 500,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1.15,
        slidesOffsetBefore: 10,
        slidesOffsetAfter: 10,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      640: {
        spaceBetween: 40,
        centeredSlides: false,
        slidesPerView: 'auto',
        freeMode: true,
      },
      1024: {
        slidesOffsetBefore: 200,
        spaceBetween: 40,
        centeredSlides: false,
        slidesPerView: 2.5,
      },
    },
  }

  return (
    <Section className={style.root}>
      <Container>
        <Heading weight={2}>Доставка и оплата</Heading>
        <div className={style.controls}>
          <SliderControl onClick={() => swiperInstance?.slideNext()} />
          <SliderControl onClick={() => swiperInstance?.slidePrev()} right />
        </div>
      </Container>
      <div className={style.slider}>
        <Swiper
          onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)}
          {...params}
        >
          {items.map((item, index) => (
            <SwiperSlide className={style.item} key={index}>
              <RoundedCard className={style.card}>
                <div className={style.icon}>
                  <StandardImage src={item.icon} />
                </div>
                <Heading weight={3} className={style.heading}>
                  {item.title}
                </Heading>
                <div
                  className={style.content}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </RoundedCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  )
}
