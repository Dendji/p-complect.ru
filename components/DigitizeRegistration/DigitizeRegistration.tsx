import React from 'react'
import style from './DigitizeRegistration.module.css'
import Container from '@material-ui/core/Container'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import SimpleText from '../SimpleText/SimpleText'
import Section from '../Section/Section'
import Heading from '../Heading/Heading'
import BlueFlyingDocument from '../SVGs/FlyingDocument/BlueFlyingDocument'

export default function DigitizeRegistration() {
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
              Полностью цифровизируйте процедуру оформления
            </Heading>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Hidden smDown>
            <Grid item xs="auto" sm={2} md={2} lg={2} />
          </Hidden>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <BlueFlyingDocument />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} container alignItems="center">
            <div className={style.text}>
              <SimpleText>
                Отправляйте фото и сканы документов через простой API
                и получайте данные в нужной вам корпоративной <br />
                системе
              </SimpleText>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
