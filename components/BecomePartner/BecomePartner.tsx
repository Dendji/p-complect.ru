import React from 'react'
import Container from '@material-ui/core/Container'
import Section from '../Section/Section'
import style from './BecomePartner.module.css'
import Button, { ButtonTheme } from '../Button/Button'
import { AlphabetSize } from '../../@types/common'

export interface BecomePartnerProps {
  onModalCall: () => void
}

export default function BecomePartner({ onModalCall }: BecomePartnerProps) {
  return (
    <Section className={style.root}>
      <Container>
        <div className={style.callToAction}>
          <Button
            onClick={onModalCall}
            size={AlphabetSize.L}
            theme={ButtonTheme.White}
          >
            Стать партнером
          </Button>
        </div>
      </Container>
    </Section>
  )
}
