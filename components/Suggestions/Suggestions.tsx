import React, { useState } from 'react'
import style from './Suggestions.module.css'
import ProductCard, { IProduct } from '../ProductCard/ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { SwiperOptions } from 'swiper'
import SwiperControls from '../SwiperControls/SwiperControls'

interface Props {
  items: IProduct[]
  onClick: (id: string) => void
}

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
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      spaceBetween: 40,
      centeredSlides: false,
      slidesPerView: 4,
    },
  },
}

export default function Suggestions({ items, onClick }: Props) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  return (
    <div className={style.root}>
      <Swiper
        speed={800}
        slidesPerView={4}
        resistance={false}
        spaceBetween={10}
        className={style.swiper}
        onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)}
        {...swiperParams}
      >
        {items.map((p) => (
          <SwiperSlide className={style.slide} tag="span">
            <ProductCard
              product={p}
              onProductClick={() => onClick(p.id + '')}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperControls
        onLeftClick={() => swiperInstance?.slidePrev()}
        onRightClick={() => swiperInstance?.slideNext()}
      />
    </div>
  )
}
