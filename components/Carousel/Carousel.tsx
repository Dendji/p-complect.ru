import React from 'react'
import classnames from 'classnames'
import style from './Carousel.module.css'
import Carousel, { CarouselSlideRenderControlProps } from 'nuka-carousel'

const getDots = (
  count: number,
  goToSlide: (index: number) => void,
  currentSlide: number
) => {
  const dots = []
  for (let i = 0; i < count; i++) {
    dots.push(
      <div
        className={classnames(style.dot, i === currentSlide && style.active)}
        key={i}
        onClick={() => goToSlide(i)}
      ></div>
    )
  }
  return dots
}

export interface CarouselSlide {
  path: string
}

export interface CustomizedCarouselProps {
  children: any
}

export default function CustomizedCarousel({
  children,
}: CustomizedCarouselProps) {
  return (
    <Carousel
      easing="easeSinInOut"
      renderCenterLeftControls={null}
      renderCenterRightControls={null}
      renderBottomCenterControls={(props: CarouselSlideRenderControlProps) => {
        return (
          <div className={style.dots}>
            {getDots(props.slideCount, props.goToSlide, props.currentSlide)}
          </div>
        )
      }}
      defaultControlsConfig={{
        pagingDotsContainerClassName: style.dotsContainer,
        pagingDotsClassName: style.dot,
        pagingDotsStyle: {
          background: '#aaaaaa',
        },
      }}
    >
      {children}
    </Carousel>
  )
}
