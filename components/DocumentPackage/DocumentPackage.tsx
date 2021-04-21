import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import SimpleText from '../SimpleText/SimpleText'
import Section from '../Section/Section'
import Heading from '../Heading/Heading'
import DocumentPackageImage from '../SVGs/DocumentPackageImage/DocumentPackageImage'

export default function DocumentPackage() {
  return (
    <Section dark>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs="auto" sm={2} md={2} lg={2} />
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Heading weight={2}>Берем на себя весь пакет документов</Heading>
          </Grid>
        </Grid>
        <Hidden mdUp>
          <Grid item xs={12} container alignItems="center" justify="center">
            <DocumentPackageImage />
          </Grid>
        </Hidden>
        <Grid container spacing={3}>
          <Grid item xs="auto" sm={2} md={2} lg={2} />
          <Grid item xs={12} sm={4} md={4} lg={4} container alignItems="center">
            <SimpleText>
              Dbrain извлекает нужную информацию из всех документов, необходимых
              при приеме на работу, в том числе неструктурированные и рукописные
            </SimpleText>
          </Grid>

          <Hidden smDown>
            <Grid
              item
              xs={false}
              sm={4}
              md={4}
              lg={4}
              container
              alignItems="center"
              justify="flex-end"
            >
              <DocumentPackageImage />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Section>
  )
}
