import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import SimpleText from '../SimpleText/SimpleText'
import Section from '../Section/Section'
import Heading from '../Heading/Heading'
import Fifty from '../Fifty/Fifty'

export default function ProcessingCosts() {
  return (
    <Section>
      <Container>
        <Grid container spacing={3}>
          <Hidden smDown>
            <Hidden smDown>
              <Grid item xs="auto" sm={2} md={2} lg={2} />
            </Hidden>
          </Hidden>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Heading weight={2} noMbMobile>
              Сократите затраты <br />
              на обработку документов
            </Heading>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Hidden smDown>
            <Hidden smDown>
              <Grid item xs="auto" sm={2} md={2} lg={2} />
            </Hidden>
          </Hidden>
          <Hidden smDown>
            <Grid
              item
              xs="auto"
              sm={4}
              md={4}
              lg={4}
              container
              alignItems="center"
            >
              <Fifty />
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid
              item
              xs={12}
              sm={12}
              container
              alignItems="center"
              justify="center"
            >
              <Fifty />
            </Grid>
          </Hidden>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            container
            alignItems="center"
          >
            <SimpleText>
              Сократите затраты в 2 раза
              <br /> с помощью сервисов Dbrain. <br />
              Автоматизированная классификация <br />
              документов, распознавание
              <br />
              и извлечение данных освободит <br />
              сотрудников от рутинной работы
              <br />
              и ускорит процесс обработки&nbsp;заявок
            </SimpleText>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
