import React from 'react'
import classnames from 'classnames'
import style from './Carousel.module.css'
import Carousel, { CarouselSlideRenderControlProps } from 'nuka-carousel'

// const getDots = (
//   count: number,
//   goToSlide: (index: number) => void,
//   currentSlide: number
// ) => {
//   const dots = []
//   for (let i = 0; i < count; i++) {
//     dots.push(
//       <div
//         className={classnames(style.dot, i === currentSlide && style.active)}
//         key={i}
//         onClick={() => goToSlide(i)}
//       ></div>
//     )
//   }
//   return dots
// }

export interface CarouselSlide {
  path: string
}

export interface CustomizedCarouselProps {
  children: any
}

export default function CustomizedCarousel({
  children,
}: CustomizedCarouselProps) {
  const renderCenterLeftControls = (props: CarouselSlideRenderControlProps) => {
    return (
      <div
        className={classnames(style.control, style.left)}
        onClick={props.previousSlide}
      >
        <svg
          width="14"
          height="23"
          viewBox="0 0 14 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21L2 11.5L12 2"
            stroke="#8E8E8E"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    )
  }
  const renderCenterRightControls = (
    props: CarouselSlideRenderControlProps
  ) => {
    return (
      <div
        className={classnames(style.control, style.right)}
        onClick={props.nextSlide}
      >
        <svg
          width="14"
          height="23"
          viewBox="0 0 14 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 21L12 11.5L2 2"
            stroke="#8E8E8E"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    )
  }
  return (
    <Carousel
      className={style.root}
      easing="easeSinInOut"
      renderCenterLeftControls={renderCenterLeftControls}
      renderCenterRightControls={renderCenterRightControls}
      renderBottomCenterControls={null}
      // renderBottomCenterControls={(props: CarouselSlideRenderControlProps) => {
      //   return (
      //     <div className={style.dots}>
      //       {getDots(props.slideCount, props.goToSlide, props.currentSlide)}
      //     </div>
      //   )
      // }}
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
