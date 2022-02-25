import React from 'react'
import style from './DistributorSection.module.css'
import Heading from '../Heading/Heading'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '../Typography/Typography'
import StandardImage from '../StandardImage/StandardImage'
import Hidden from '@mui/material/Hidden'
import { MultiImage } from '../../pages/about'

interface Props {
  certificate: MultiImage
  content: string | null
  image: MultiImage | null
  title: string
}

export default function DistributorSection(props: Props) {
  return (
    <div className={style.root}>
      <Hidden mdDown>
        <div className={style.left}>
          <StandardImage
            src={props.certificate.large}
            className={style.image}
          />
        </div>
      </Hidden>
      <Container>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} md={5}>
            <Heading weight={2} className={style.heading}>
              {props.title}
            </Heading>
            <Hidden mdUp>
              <StandardImage src={props.certificate.large} />
            </Hidden>
            {props.content && (
              <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
