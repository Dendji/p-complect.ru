import style from './Textarea.module.css'
import React from 'react'
import { InputTheme } from '../TextInput/TextInput'

export type TextareaProps = {
  theme?: InputTheme
} & React.HTMLProps<HTMLTextAreaElement>

export default function Textarea(props: TextareaProps) {
  const getTextInputClassByTheme = (theme?: InputTheme) => {
    switch (theme) {
      case InputTheme.WhiteOnBlue:
        return style.whiteOnBlue
      case InputTheme.White:
      default:
        return style.white
    }
  }

  return (
    <div className={style.root}>
      <textarea
        {...props}
        className={[style.input, getTextInputClassByTheme(props.theme)].join(
          ' '
        )}
      ></textarea>
    </div>
  )
}
