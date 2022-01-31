import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Section from '../Section/Section'
import SimpleText from '../SimpleText/SimpleText'
import style from './CallToAction.module.css'
import Heading from '../Heading/Heading'
import ContactForm from '../ContactForm/ContactForm'
import { ButtonTheme } from '../Button/Button'
import { InputTheme } from '../TextInput/TextInput'
import Subheading from '../Subheading/Subheading'

interface CallToActionProps {
  className?: string
  buttonTheme?: ButtonTheme
}

export default function CallToAction(props: CallToActionProps) {
  const handleSubmit = () => {
    window.ym && window.ym(57871489, 'reachGoal', 'CALL_TO_ACTION_SUBMIT')
    window.gtag &&
      window.gtag('event', 'conversion', {
        send_to: 'AW-587610331/9p68CKXEguABENvxmJgC',
      })
  }

  return (
    <Section className={[style.root, props.className].join(' ')}>
      <Container>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} sm={5} md={5} lg={5} container alignItems="center">
            <div className={style.text}>
              <Subheading subheading="Свяжитесь с нами">
                <Heading weight={2} className={style.heading}>
                  Опишите задачу
                </Heading>
              </Subheading>
              <SimpleText>А мы вернемся с решением</SimpleText>
            </div>
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <ContactForm
              theme={InputTheme.WhiteOnBlue}
              submitTheme={props.buttonTheme || ButtonTheme.Black}
              onSubmit={handleSubmit}
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
