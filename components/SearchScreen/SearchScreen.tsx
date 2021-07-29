import React, { FC, useState } from 'react'
import { Dialog, DialogContent, DialogActions, Modal } from '@material-ui/core'

import s from './SearchScreen.module.css'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import TextInput from '../TextInput/TextInput'
import { useRouter } from 'next/router'
import CloseButton from '../CloseButton/CloseButton'

type Props = {
  // children: React.ReactNode
  isModal: boolean
  // isLoading?: boolean
  onClose: () => void
  // onConfirm: () => void
}
export const SearchScreen: FC<Props> = ({
  // children,
  isModal,
  // isLoading,
  onClose,
  // onConfirm,
}) => {
  const [query, setQuery] = useState('')

  const router = useRouter()

  const onSearch = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!query.length) return
    router.push(`/search/?q=${query}`)
  }

  return (
    // <Dialog open={true} fullScreen className={s.container} hideBackdrop>
    //   <DialogContent className={s.content}>
    //     <Heading weight={2}>Поиск по товарам</Heading>
    //     <form>
    //       <TextInput placeholder="Имя" />
    //     </form>
    //   </DialogContent>
    // </Dialog>
    <Modal open={isModal} onClose={() => {}} hideBackdrop>
      <div className={s.content}>
        <div className={s.close}>
          <CloseButton onClose={onClose} />
        </div>
        <form className={s.form}>
          <Heading weight={2}>Поиск по товарам</Heading>
          <TextInput
            placeholder="Я ищу..."
            className={s.input}
            onChange={(e) => setQuery(e.currentTarget.value)}
            focus
          />
          <Button onClick={onSearch}>Искать</Button>
        </form>
      </div>
    </Modal>
  )
}
