import React, { FC, useState } from 'react'
import { Dialog, DialogContent, DialogActions, Modal } from '@material-ui/core'

import s from './SearchScreen.module.css'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import TextInput from '../TextInput/TextInput'
import { useRouter } from 'next/router'
import CloseButton from '../CloseButton/CloseButton'
import dynamic from 'next/dynamic'

const SpeechRecognizer = dynamic(
  () => import('../SpeechRecognizer/SpeechRecognizer'),
  { ssr: false }
)

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

  const handleClose = () => {
    onClose()
    setQuery('')
  }
  const onSearch = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!query.length) return
    router.push(`/search/?q=${query}`)
    setQuery('')
  }

  return (
    <Modal open={isModal} onClose={() => {}} hideBackdrop>
      <div className={s.content}>
        <div className={s.close}>
          <CloseButton onClose={handleClose} />
        </div>

        <form className={s.form} onSubmit={onSearch}>
          <Heading weight={2} className={s.heading}>
            Поиск по товарам
          </Heading>
          <div className={s.inputContainer}>
            <TextInput
              placeholder="Я ищу..."
              value={query}
              className={s.input}
              onChange={(e) => setQuery(e.currentTarget.value)}
              focus
            />
            <div className={s.microphone}>
              <SpeechRecognizer
                onTranscript={(search: string) => {
                  search.length > 0 && setQuery(search)
                }}
              />
            </div>
          </div>
          <Button onClick={onSearch} type="submit">
            Искать
          </Button>
        </form>
      </div>
    </Modal>
  )
}
