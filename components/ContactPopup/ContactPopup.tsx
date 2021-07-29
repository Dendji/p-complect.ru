import React, { FC } from 'react'
import { Dialog, DialogContent, DialogActions } from '@material-ui/core'

import s from './index.module.css'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import TextInput from '../TextInput/TextInput'

type Props = {
  children: React.ReactNode
  isModal: boolean
  isLoading?: boolean
  onCancel: () => void
  onConfirm: () => void
}
export const ContactPopup: FC<Props> = ({
  children,
  isModal,
  isLoading,
  onCancel,
  onConfirm,
}) => {
  return (
    <Dialog open={isModal}>
      <DialogContent className={s.content}>
        <Heading weight={2}>Оставьте заявку</Heading>
        <p>на бесплатную консультацию</p>
        <form>
          <TextInput placeholder="Имя" />
          <TextInput placeholder="e-mail" />
          <TextInput placeholder="+7(___)___-__-__" />
          <p>
            Нажимая на кнопку , вы даете согласие на обработку персональных
            данныхи соглашаетесь с политикой конфиденциальности
          </p>
          <Button onClick={onConfirm}>Отправить</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
