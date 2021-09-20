import { Container, useMediaQuery, useTheme } from '@material-ui/core'
import React, { RefObject, useRef, useState } from 'react'
import Button, { ButtonTheme } from '../Button/Button'
import Heading from '../Heading/Heading'
import RoundedCard from '../RoundedCard/RoundedCard'
import Section from '../Section/Section'
import style from './Objects.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel from '../Carousel/Carousel'

interface Props {
  tabs: {
    value: string
    text: string
  }[]
  objects: {
    images: string[]
    heading: string
    content: string
    category: string[]
  }[]
}
export default function Objects({ tabs, objects }: Props) {
  tabs = [{ value: '', text: 'Все' }, ...tabs]
  const [activeTab, setActiveTab] = useState(tabs[0].value)

  const refGrid = useRef<HTMLDivElement | null>(null)
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const renderTabs = () => {
    return tabs.map((t, index) => (
      <Button
        key={index}
        theme={
          activeTab === t.value
            ? ButtonTheme.Orange
            : ButtonTheme.OrangeBordered
        }
        onClick={() => setActiveTab(t.value)}
      >
        {t.text}
      </Button>
    ))
  }

  const renderTab = (t: any) => (
    <Button
      theme={
        activeTab === t.value ? ButtonTheme.Orange : ButtonTheme.OrangeBordered
      }
      onClick={() => setActiveTab(t.value)}
    >
      {t.text}
    </Button>
  )

  const filteredObjects = objects
    .filter((o) => (activeTab.length ? o.category.includes(activeTab) : true))
    .map((o, index) => (
      <RoundedCard key={index} className={style.card}>
        <div className={style.object}>
          <Carousel>
            {o.images.map((im) => (
              <div
                className={style.slideImgContainer}
                style={{ backgroundImage: `url(${im})` }}
                key={im}
              >
                {/* <img src={im} className={style.slideImg} key={im}></img> */}
              </div>
            ))}
          </Carousel>
          <div className={style.cardContent}>
            {o.heading && (
              <Heading weight={1} size="medium" theme="orange" noMt>
                {o.heading}
              </Heading>
            )}
            {o.content && (
              <div
                className={style.content}
                dangerouslySetInnerHTML={{ __html: o.content }}
              ></div>
            )}
          </div>
        </div>
      </RoundedCard>
    ))

  return (
    <Section>
      <Container>
        <Heading weight={2} noMt>
          Наши объекты
        </Heading>
      </Container>
      {isMobile && (
        <Swiper
          speed={800}
          slidesPerView={'auto'}
          freeMode
          resistance={false}
          slidesOffsetAfter={100}
          slidesOffsetBefore={20}
          spaceBetween={10}
          className={style.slider}
          preloadImages={false}
          lazy
        >
          {tabs.map((t, index) => (
            <SwiperSlide className={style.slide} tag="span">
              {renderTab(t)}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <Container>
        {!isMobile && (
          <div
            className={style.tabs}
            style={
              {
                // gridTemplateColumns: `repeat(auto-fill, 186px)`,
              }
            }
          >
            {renderTabs()}
          </div>
        )}
        <div className={style.objects} ref={refGrid}>
          {filteredObjects.length ? (
            filteredObjects
          ) : (
            <div className={style.empty}>
              <div>
                <svg
                  height="48"
                  viewBox="0 0 511.977 511.977"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m498.237 366.527-114.499-114.527c21.484-48.774 12.291-107.913-27.594-147.808-51.966-51.978-136.081-51.985-188.053 0-51.844 51.856-51.844 136.232 0 188.088 41.198 41.207 101.574 49.053 149.773 26.771l113.914 113.941c18.366 18.37 48.097 18.372 66.463-.004 18.316-18.324 18.314-48.138-.004-66.461zm-308.931-95.458c-40.151-40.16-40.151-105.505 0-145.666 40.24-40.25 105.375-40.257 145.622 0 40.151 40.161 40.151 105.506 0 145.666-40.241 40.251-105.376 40.257-145.622 0zm287.717 140.711c-6.64 6.643-17.388 6.646-24.03.001l-108.834-108.86c8.946-7.042 16.919-15.128 23.842-24.23l109.02 109.046c6.627 6.629 6.628 17.414.002 24.043z" />
                    <path d="m15 244.947h63.962c8.284 0 15-6.716 15-15s-6.716-15-15-15h-63.962c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
                    <path d="m15 308.947h87.948c8.284 0 15-6.716 15-15s-6.716-15-15-15h-87.948c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
                    <path d="m15 372.947h151.911c8.284 0 15-6.716 15-15s-6.716-15-15-15h-151.911c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
                    <path d="m342.809 406.947h-327.809c-8.284 0-15 6.716-15 15s6.716 15 15 15h327.809c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
                  </g>
                </svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                Объекты будут добавлены в скором времени
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
