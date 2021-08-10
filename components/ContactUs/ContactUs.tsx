import Container from '@material-ui/core/Container'
import React from 'react'
import Heading from '../Heading/Heading'
import style from './ContactUs.module.css'
import CloseButton from '../CloseButton/CloseButton'
import ContactForm from '../ContactForm/ContactForm'
import { InputTheme } from '../TextInput/TextInput'
import { ButtonTheme } from '../Button/Button'
import Popup from '../Popup/Popup'

export interface ContactUsProps {
  isOpen: boolean
  onSubmit: () => void
  onClose: () => void
}

export default function ContactUs({
  isOpen,
  onClose,
  onSubmit,
}: ContactUsProps) {
  const renderExtended = () => (
    <div className={style.form}>
      <Heading weight={2} className={style.heading}>
        Оставьте заявку
      </Heading>
      <div className={style.subtitle}>
        И мы свяжемся с вами в ближайшее время
      </div>
      {isOpen && (
        <ContactForm
          onSubmit={onSubmit}
          autoFocus
          theme={InputTheme.White}
          submitTheme={ButtonTheme.Blue}
        />
      )}
    </div>
  )

  return (
    <Popup isOn={isOpen}>
      <div className={style.root}>
        <Container>
          <div className={style.formContainer}>
            <div className={style.close}>
              <CloseButton onClose={onClose} />
            </div>
            {renderExtended()}
          </div>
        </Container>
      </div>
    </Popup>
  )
}
