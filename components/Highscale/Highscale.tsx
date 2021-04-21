import React from 'react'
import style from './Highscale.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import SimpleText from '../SimpleText/SimpleText'
import Heading from '../Heading/Heading'
import Clouds from '../Clouds/Clouds'
import Section from '../Section/Section'

export default function Highscale() {
  return (
    <Section dark>
      <Container>
        <Grid container>
          <Grid item xs="auto" sm={2} md={2} lg={2}></Grid>
          <Grid item>
            <div className={style.heading}>
              <Heading weight={2}>Масштабируйте решение</Heading>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs="auto" sm={2} md={2} lg={2}></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <div className={style.clouds}>
              <Clouds />
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} container alignItems="center">
            <SimpleText>
              Предоставляем облачное решение, <br /> чтобы вы могли увеличивать{' '}
              <br />
              нагрузку с гарантированной <br />
              стабильностью
            </SimpleText>
          </Grid>
          <Grid item xs="auto" sm={2} md={2} lg={2}></Grid>
        </Grid>
      </Container>
    </Section>
  )
}
