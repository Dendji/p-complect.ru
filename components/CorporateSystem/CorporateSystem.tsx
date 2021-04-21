import React from 'react'
import style from './CorporateSystem.module.css'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import SimpleText from '../SimpleText/SimpleText'
import Section from '../Section/Section'
import Heading from '../Heading/Heading'
import FlyingDocument from '../SVGs/FlyingDocument/FlyingDocument'
import YellowFlyingDocument from '../SVGs/FlyingDocument/YellowFlyingDocument'

export interface CorporateSystemProps {
  isOnboarding?: boolean
}

export default function CorporateSystem(props: CorporateSystemProps) {
  return (
    <Section>
      <Container>
        <Grid container spacing={3}>
          <Hidden smDown>
            <Hidden smDown>
              <Grid item xs="auto" sm={2} md={2} lg={2} />
            </Hidden>
          </Hidden>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Heading weight={2} noMbMobile>
              Получайте готовые данные в вашей корпоративной системе
            </Heading>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Hidden smDown>
            <Grid item xs="auto" sm={2} md={2} lg={2} />
          </Hidden>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            {props.isOnboarding ? <YellowFlyingDocument /> : <FlyingDocument />}
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} container alignItems="center">
            <div className={style.text}>
              <SimpleText>
                Отдавайте документы через простой API и&nbsp;получайте данные
                в&nbsp;нужной вам форме. Без&nbsp;изменения текущей системы
              </SimpleText>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
