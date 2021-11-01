import React from 'react'
import style from './ProductInfo.module.css'
import ElasticTabs from '../ElasticTabs/ElasticTabs'
import { useState } from 'react'
import { useMediaQuery, useTheme } from '@material-ui/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { SwiperOptions } from 'swiper'
import SwiperControls from '../SwiperControls/SwiperControls'
import Heading from '../Heading/Heading'
import RoundedCard from '../RoundedCard/RoundedCard'
interface Props {
  attributes?: {
    [key: string]: {
      id: number
      name: string
      type: string
      values: string[]
    }
  }
  description?: string
  tech?: string | null
}

export default function ProductInfo({ description, attributes, tech }: Props) {
  console.log('🚀 ~ file: ProductInfo.tsx ~ line 25 ~ ProductInfo ~ tech', tech)
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const tabs = [
    {
      value: 'desc',
      text: 'Описание',
    },
    {
      value: 'attr',
      text: 'Характеристики',
    },
    {
      value: 'tech',
      text: 'Техническая информация',
    },
  ]

  const [tab, setTab] = useState(tabs[0].value)
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
  return isMobile ? (
    <Swiper
      speed={800}
      slidesPerView={2}
      resistance={false}
      spaceBetween={10}
      className={style.slider}
      // onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)}
      {...swiperParams}
    >
      <SwiperSlide className={style.slide} tag="span">
        <RoundedCard className={style.card}>
          <div className={style.heading}>Описание</div>
          {description && (
            <div
              className={style.desc}
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          )}
        </RoundedCard>
      </SwiperSlide>
      {attributes && (
        <SwiperSlide className={style.slide} tag="span">
          <RoundedCard className={style.card}>
            <div className={style.heading}>Характеристики</div>
            <table className="table">
              <tbody>
                {Object.values(attributes).map((a, key) => (
                  <tr key={key}>
                    <td>{a.name}</td>
                    {a.values.map((v) => (
                      <td key={v}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </RoundedCard>
        </SwiperSlide>
      )}
      {tech && (
        <SwiperSlide className={style.slide} tag="span">
          <RoundedCard className={style.card}>
            <div className={style.heading}>Техническое описание</div>
            <div
              className="desc"
              dangerouslySetInnerHTML={{ __html: tech }}
            ></div>
          </RoundedCard>
        </SwiperSlide>
      )}
    </Swiper>
  ) : (
    <div className={style.root}>
      <ElasticTabs tabs={tabs} onChange={setTab} />
      <div className={style.content}>
        {tab === 'desc' && description && (
          <div
            className={style.desc}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        )}
        {tab === 'attr' && attributes && (
          <table className="table">
            <tbody>
              {Object.values(attributes).map((a, key) => (
                <tr key={key}>
                  <td>{a.name}</td>
                  {a.values.map((v) => (
                    <td key={v}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {tab === 'tech' && tech && (
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: tech }}
          ></div>
        )}
      </div>
    </div>
  )
}
