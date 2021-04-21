import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Container from '@material-ui/core/Container'
import style from './Cases.module.css'
import Grid from '@material-ui/core/Grid'
import Section from '../Section/Section'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Button, { ButtonTheme } from '../Button/Button'
import { AlphabetSize } from '../../@types/common'
import Docker from '../Docker/Docker'
import CustomizedCarousel from '../Carousel/Carousel'
import StandardVideo from '../StandardVideo/StandardVideo'

const tabs: {
  title: string
  extra: string
  path: string
}[] = [
  {
    title: 'Стандартные',
    extra: 'Документы государственного образца и корпоративные стандарты',
    path: '/webms/Structured_RU.webm',
  },
  {
    title: 'Рукописные',
    extra:
      'Страховые документы, банковские формы, заявления от клиентов и прочее',
    path: '/webms/Handwritten_RU.webm',
  },
  {
    title: 'Полуструктурированные',
    extra: 'Счета-фактуры, бухгалтерская первичка, учетные документы и прочее',
    path: '/webms/Semi-structured_RU.webm',
  },
  {
    title: 'Полнотекстовые',
    extra: 'Правовая документация, корпоративные формы, отчеты и прочее',
    path: '/webms/Unstructured_RU.webm',
  },
]

export default function Demonstration() {
  const theme = useTheme()

  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const [tabIndex, setTabIndex] = useState<number>(0)

  // const tabsToRender = matches ? [tabs[1]] : tabs

  return matches ? (
    <Section className={style.root} dark>
      <Container>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={12}>
            <Heading weight={2}>Обрабатываем любые типы документов</Heading>
          </Grid>
        </Grid>
        <CustomizedCarousel>
          {tabs.map((tab, index) => (
            <div key={index} className={style.slide}>
              <div className={style.slideTitle}>{tab.title}</div>
              <div className={style.slideText}>{tab.extra}</div>
              <StandardVideo loop src={tabs[index].path} type="video/webm" />
            </div>
          ))}
        </CustomizedCarousel>
      </Container>
    </Section>
  ) : (
    <Section className={style.root} dark>
      <Container>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Heading weight={2}>Обрабатываем любые типы документов</Heading>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <div
              className={[style.tabContent, style.tabContentActive].join(' ')}
            >
              <StandardVideo
                key={tabs[tabIndex].path}
                loop
                src={tabs[tabIndex].path}
                type="video/webm"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <div className={style.tabs}>
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={[
                    style.tab,
                    tabIndex === index ? style.tabActive : '',
                  ].join(' ')}
                  onClick={() => setTabIndex(index)}
                >
                  <div className={style.tabTitle}>{tab.title}</div>
                  {tabIndex === index && (
                    <div className={style.tabExtra}>{tab.extra}</div>
                  )}
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center">
          <div className={style.button}>
            <a href="https://hub.docker.com/r/handl/docr" target="_blank">
              <Button
                icon={<Docker />}
                theme={ButtonTheme.Blue}
                size={AlphabetSize.L}
              >
                Наш сервис на Docker Hub
              </Button>
            </a>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}
