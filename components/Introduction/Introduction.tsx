import React from 'react'
import style from './Introduction.module.css'
import Container from '@material-ui/core/Container'
import Heading from '../Heading/Heading'
import Button, { ButtonTheme } from '../Button/Button'
import { AlphabetSize } from '../../@types/common'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

export interface IntroductionProps {
  heading: React.ReactNode
  subheading: React.ReactNode
  background?: React.ReactNode
  route?: string
  className?: string
  buttonText?: string
  onButtonClick: () => void
}

export default function Introduction(props: IntroductionProps) {
  const { heading, subheading, className, buttonText, background } = props

  const classes = [style.root]

  if (className) {
    classes.push(className)
  }

  return (
    <div className={classes.join(' ')}>
      <div className={style.bg}>{background}</div>
      <div className={style.content}>
        <Container>
          <Grid container spacing={3}>
            <Hidden xsDown>
              <Grid item xs="auto" sm={2} md={2} lg={2} className="hidden-xs" />
            </Hidden>
            <Grid item xs={12} sm={8} md={10} lg={10}>
              <Heading weight={1}>{heading}</Heading>
              <div className={style.subheading}>{subheading}</div>
              <Button
                onClick={props.onButtonClick}
                theme={ButtonTheme.White}
                size={AlphabetSize.L}
              >
                {buttonText ? buttonText : 'Запросить демо'}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
