import React from 'react'
import style from './BrandsSection.module.css'
import Heading from '../Heading/Heading'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '../Typography/Typography'
import StandardImage from '../StandardImage/StandardImage'
import Hidden from '@mui/material/Hidden'
import Section from '../Section/Section'
import { MultiImage } from '../../pages/about'

const items = [
  { url: '#', image: '/images/brands/baswool.png' },
  { url: '#', image: '/images/brands/fobos.png' },
  { url: '#', image: '/images/brands/bolars.png' },
  { url: '#', image: '/images/brands/kerama.png' },
  { url: '#', image: '/images/brands/T.png' },
  { url: '#', image: '/images/brands/termoclip.png' },
]

interface Props {
  title: string | null
  desc: string | null
  items: MultiImage[]
}

export default function BrandsSection({ title, desc, items }: Props) {
  return (
    <Section className={style.root} dark>
      <Container>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} md={6}>
            <Heading weight={2} className={style.heading}>
              {title}
            </Heading>
            <Hidden smDown>
              {desc && <div dangerouslySetInnerHTML={{ __html: desc }}></div>}
            </Hidden>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={style.grid}>
              {items.map((b, key) => (
                <StandardImage src={b.large} key={key} />
              ))}
            </div>
          </Grid>
          <Hidden smUp>
            {desc && <div dangerouslySetInnerHTML={{ __html: desc }}></div>}
          </Hidden>
        </Grid>
      </Container>
    </Section>
  )
}
