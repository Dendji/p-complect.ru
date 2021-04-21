import Container from '@material-ui/core/Container'
import React from 'react'
import Heading from '../Heading/Heading'
import style from './ContactUs.module.css'
import Grid from '@material-ui/core/Grid'
import CloseButton from '../CloseButton/CloseButton'
import ContactForm from '../ContactForm/ContactForm'
import { InputTheme } from '../TextInput/TextInput'
import { ButtonTheme } from '../Button/Button'
import Popup from '../Popup/Popup'

export enum FormType {
  Extended = 'Extended',
  Compact = 'Compact',
}

export interface ContactUsProps {
  isOpen: boolean
  formType: FormType
  onSubmit: (formType: FormType) => void
  onClose: () => void
}

export default function ContactUs({
  isOpen,
  onClose,
  onSubmit,
  formType,
}: ContactUsProps) {
  const renderExtended = () => (
    <Grid container spacing={0} justify="center">
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className={style.form}>
          <Heading weight={2} className={style.heading}>
            Опишите задачу
          </Heading>
          <div className={style.subtitle}>А мы вернемся с решением</div>
          {isOpen && (
            <ContactForm
              onSubmit={() => onSubmit(FormType.Extended)}
              autoFocus
              theme={InputTheme.White}
              submitTheme={ButtonTheme.Blue}
            />
          )}
        </div>
      </Grid>
    </Grid>
  )

  const renderCompact = () => (
    <Grid container spacing={0} justify="center">
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <div className={style.form}>
          <Heading weight={2} className={style.heading}>
            Оставьте контакты
          </Heading>
          <div className={style.subtitle}>И скоро мы свяжемся с вами</div>
          {isOpen && (
            // <ContactFormCompact
            //   onSubmit={() => onSubmit(FormType.Compact)}
            //   autoFocus
            //   theme={InputTheme.White}
            //   submitTheme={ButtonTheme.Blue}
            // />
            <ContactForm
              onSubmit={() => onSubmit(FormType.Compact)}
              autoFocus
              theme={InputTheme.White}
              submitTheme={ButtonTheme.Blue}
            />
          )}
        </div>
      </Grid>
    </Grid>
  )

  return (
    <Popup isOn={isOpen}>
      <div className={style.root}>
        <Container>
          <div className={style.header}>
            <div className={style.logo}></div>
            <div className={style.close}>
              <CloseButton onClose={onClose} />
            </div>
          </div>
          <div className={style.formContainer}>
            {formType === FormType.Extended && renderExtended()}
            {formType === FormType.Compact && renderCompact()}
          </div>
        </Container>
      </div>
    </Popup>
  )
}
