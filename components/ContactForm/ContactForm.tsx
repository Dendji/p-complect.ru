import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextInput, { InputTheme } from '../TextInput/TextInput'
import Textarea from '../Textarea/Textarea'
import { ButtonTheme } from '../Button/Button'
import style from './ContactForm.module.css'
import Utils from '../../utils/utils'
import InputMask from 'react-input-mask'
import * as Sentry from '@sentry/browser'
import ContactFormFooter from '../ContactFormFooter/ContactFormFooter'
import { FormApi } from '../../api/formApi'
import { Formik } from 'formik'
import * as Yup from 'yup'
export interface ContactFormProps {
  submitTheme: ButtonTheme
  theme: InputTheme
  autoFocus?: boolean
  extended?: boolean
  onSubmit?: () => void
}

export default function ContactForm(props: ContactFormProps) {
  const [isSubmitError, setSubmitError] = useState<boolean>(false)
  const [isSubmitted, setSubmitted] = useState<boolean>(false)

  const FormSchema = Yup.object().shape({
    name: Yup.string().max(50, 'Слишком длинный'),
    phone: Yup.string().required('Обязательное поле'),
    foundOut: Yup.string()
      .min(2, 'Слишком короткий')
      .max(100, 'Слишком длинный')
      .required('Обязательное поле'),
    company: Yup.string()
      .min(2, 'Слишком короткий')
      .max(100, 'Слишком длинный')
      .required('Обязательное поле'),
    email: Yup.string().email('Неверный e-mail').required('Обязательное поле'),
  })

  const initialValues = {
    email: '',
    phone: '',
    company: '',
    issue: '',
    name: '',
    foundOut: '',
    volume: '',
  }

  return (
    <div className={style.form}>
      <Formik
        validationSchema={FormSchema}
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true)
          try {
            const res = await FormApi.sendForm(values)

            if (res.status === 200) {
              setSubmitError(false)
              setSubmitted(true)
              if (props.onSubmit) {
                props.onSubmit()
              }
            } else {
              setSubmitError(true)
            }

            if (res.data.status === 'failure') {
              console.error(`ERRORS: ${res.data.errors}`)
            }
          } catch (e) {
            Sentry.captureException(`Form submit error ${JSON.stringify(e)}`)
            setSubmitError(true)
          }
          setSubmitting(false)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} autoComplete="no">
            <Grid container direction="column" spacing={2}>
              <Grid item className={style.formField}>
                <TextInput
                  placeholder="Имя"
                  theme={props.theme}
                  focus={props.autoFocus && !Utils.isMobile()}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.name}
                  isError={!!errors.name && touched.name}
                  autoComplete="no"
                />
              </Grid>
              <Grid item className={style.formField}>
                <InputMask
                  mask="+7(999) 999-99-99"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  children={() => (
                    <TextInput
                      name="phone"
                      theme={props.theme}
                      type="tel"
                      placeholder="Номер телефона"
                      autoComplete="no"
                      error={errors.phone}
                      isError={!!errors.phone && touched.phone}
                    />
                  )}
                />
              </Grid>
              <Grid item className={style.formField}>
                <TextInput
                  theme={props.theme}
                  type="email"
                  placeholder="Эл. почта"
                  error={errors.email}
                  isError={!!errors.email && touched.email}
                  autoComplete="no"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item className={style.formField}>
                <TextInput
                  placeholder="Компания"
                  name="company"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  theme={props.theme}
                  error={errors.company}
                  isError={!!errors.company && touched.company}
                  autoComplete="no"
                />
              </Grid>
              <Grid item className={style.formField}>
                <TextInput
                  placeholder="Объем документов"
                  name="volume"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  theme={props.theme}
                  error={errors.volume}
                  isError={!!errors.volume && touched.volume}
                  autoComplete="no"
                />
              </Grid>

              <Grid item className={style.formField}>
                <TextInput
                  placeholder="Откуда вы узнали про нас?"
                  theme={props.theme}
                  error={errors.foundOut}
                  isError={!!errors.foundOut && touched.foundOut}
                  autoComplete="no"
                  name="foundOut"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item className={style.formField}>
                <Textarea
                  theme={props.theme}
                  placeholder="Опишите задачу в двух словах"
                  autoComplete="no"
                  rows={5}
                  name="issue"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </Grid>
              {isSubmitted ? (
                <Grid item className={style.formField}>
                  <div className={style.success}>
                    Спасибо, скоро мы свяжемся с вами
                  </div>
                </Grid>
              ) : (
                <ContactFormFooter
                  isSubmitting={isSubmitting}
                  submitTheme={props.submitTheme}
                />
              )}
              {isSubmitError && (
                <Grid item className={style.formField}>
                  <div className={style.failure}>
                    Что-то пошло не так, пожалуйста, свяжитесь с нами –
                    hello@dbrain.io :)
                  </div>
                </Grid>
              )}
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  )
}
