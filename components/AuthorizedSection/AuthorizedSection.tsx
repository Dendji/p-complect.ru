import React from 'react'
import style from './AuthorizedSection.module.css'
import Heading from '../Heading/Heading'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import StandardImage from '../StandardImage/StandardImage'
import Section from '../Section/Section'
const items = [
  { url: '#', image: '/images/tenders/roseltorg.svg' },
  { url: '#', image: '/images/tenders/portal.svg' },
  { url: '#', image: '/images/tenders/rts.svg' },
]

interface Props {}
export default function AuthorizedSection(props: Props) {
  return (
    <Section className={style.root} dark>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Heading weight={2} className={style.heading}>
              Мы являемся авторизованным участником торговых площадок
            </Heading>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <div className={style.grid}>
              {items.map((b, idx) => (
                <StandardImage src={b.image} key={idx} />
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
