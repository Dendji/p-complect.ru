import Grid from '@material-ui/core/Grid'
import React from 'react'
import Button, { ButtonSize, ButtonTheme } from '../Button/Button'
import style from './ContactFormFooter.module.css'

interface ContactFormFooterProps {
  submitTheme?: ButtonTheme
  isSubmitting?: boolean
}

export default function ContactFormFooter({
  submitTheme,
  isSubmitting,
}: ContactFormFooterProps) {
  return (
    <Grid item className={style.formField}>
      <div className={style.submitSection}>
        <div className={style.submit}>
          <Button
            theme={submitTheme ? submitTheme : ButtonTheme.Blue}
            disabled={isSubmitting}
            size={ButtonSize.L}
            type="submit"
          >
            Отправить
          </Button>
        </div>
        <div className={style.submitPolicy}>
          Нажимая на кнопку, вы соглашаетесь <br />с{' '}
          <strong>
            <a
              href="/privacy-policy"
              className={style.policyLink}
              target="_blank"
            >
              политикой конфиденциальности
            </a>
          </strong>
        </div>
      </div>
    </Grid>
  )
}
