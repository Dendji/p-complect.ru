import React from 'react'
import style from './Carousel.module.css'
import Carousel, { CarouselSlideRenderControlProps } from 'nuka-carousel'
import SliderControl from '../SliderControl/SliderControl'

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
      <SliderControl onClick={props.previousSlide} className={style.left} />
    )
  }
  const renderCenterRightControls = (
    props: CarouselSlideRenderControlProps
  ) => {
    return (
      <SliderControl onClick={props.nextSlide} className={style.right} right />
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
