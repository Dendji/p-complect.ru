import React from 'react'
import style from './AuthorizedSection.module.css'
import Heading from '../Heading/Heading'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '../Typography/Typography'
import StandardImage from '../StandardImage/StandardImage'
import Section from '../Section/Section'
const items = [
  { url: '#', image: '/images/tenders/roseltorg.png' },
  { url: '#', image: '/images/tenders/portal.png' },
  { url: '#', image: '/images/tenders/rts.png' },
]

interface Props {}
export default function AuthorizedSection(props: Props) {
  return (
    <Section className={style.root}>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            <Heading weight={2} className={style.heading}>
              Мы являемся авторизованным участником торговых площадок
            </Heading>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            <div className={style.grid}>
              {items.map((b) => (
                <StandardImage src={b.image} />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}