import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextInput, { InputTheme } from '../TextInput/TextInput'
import Textarea from '../Textarea/Textarea'
import { ButtonTheme } from '../Button/Button'
import style from './ContactForm.module.css'
import Utils, { wait } from '../../utils/utils'
import InputMask from 'react-input-mask'
import * as Sentry from '@sentry/browser'
import ContactFormFooter from '../ContactFormFooter/ContactFormFooter'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
export interface ContactFormProps {
  submitTheme: ButtonTheme
  theme: InputTheme
  autoFocus?: boolean
  extended?: boolean
  onSubmit?: () => void
}

export default function ContactForm(props: ContactFormProps) {
  const [, setSubmitError] = useState<boolean>(false)
  const [isSubmitted] = useState<boolean>(false)

  const FormSchema = Yup.object().shape({
    name: Yup.string().max(50, 'Слишком длинный'),
    phone: Yup.string().required('Обязательное поле'),
    email: Yup.string().email('Неверный e-mail'),
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

  const dispatch = useDispatch()

  return (
    <div className={style.form}>
      <Formik
        validationSchema={FormSchema}
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true)
          await wait(2000)
          try {
            // const res = await FormApi.sendForm(values)
            // if (res.status === 200) {
            //   setSubmitError(false)
            //   setSubmitted(true)
            //   if (props.onSubmit) {
            //     props.onSubmit()
            //   }
            // } else {
            //   setSubmitError(true)
            // }
            // if (res.data.status === 'failure') {
            //   console.error(`ERRORS: ${res.data.errors}`)
            // }
            dispatch({
              type: 'SET_FORM_SUCCESS',
              payload: true,
            })
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
            <div className={style.grid}>
              <div className={style.formField}>
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
              </div>
              <div className={style.formField}>
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
              </div>
              <div className={style.formField}>
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
              </div>
              <div className={style.formField}>
                <Textarea
                  theme={props.theme}
                  placeholder="Опишите ваш запрос в двух словах"
                  autoComplete="no"
                  rows={5}
                  name="issue"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <ContactFormFooter
                isSubmitting={isSubmitting}
                submitTheme={props.submitTheme}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
