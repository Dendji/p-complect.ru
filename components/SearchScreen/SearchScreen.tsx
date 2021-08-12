import React, { FC, useState } from 'react'
import { Modal } from '@material-ui/core'

import s from './SearchScreen.module.css'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import TextInput from '../TextInput/TextInput'
import { useRouter } from 'next/router'
import CloseButton from '../CloseButton/CloseButton'
import dynamic from 'next/dynamic'
import { ReactAutosuggest } from '../Autosuggest/Autosuggest'
import Autosuggest from 'react-autosuggest'

const SpeechRecognizer = dynamic(
  () => import('../SpeechRecognizer/SpeechRecognizer'),
  { ssr: false }
)

type Props = {
  isModal: boolean
  onClose: () => void
}

const suggestions = [
  'утеплитель',
  'мастика',
  'праймер',
  'битум',
  'геотекстиль',
  'воронка',
  'аэратор',
  'мембрана',
  'пена',
  'герметик',
  'техноэласт',
  'бикрост',
  'унифлекс',
  'плантер',
  'pir',
]

export const SearchScreen: FC<Props> = ({ isModal, onClose }) => {
  const [query, setQuery] = useState('')

  const router = useRouter()

  const handleClose = () => {
    onClose()
    setQuery('')
  }

  const onSearch = (e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
    startSearch(query)
  }

  const startSearch = (query: string) => {
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
            <ReactAutosuggest
              suggestions={suggestions}
              onSuggestionSelected={(e, data) =>
                startSearch(data.suggestionValue)
              }
              renderInput={(
                inputProps: Autosuggest.RenderInputComponentProps
              ) => (
                <TextInput
                  placeholder="Я ищу..."
                  className={s.input}
                  onChange={(e) => setQuery(e.currentTarget.value)}
                  {...inputProps}
                  ref={null}
                  inputRef={inputProps.ref}
                />
              )}
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
