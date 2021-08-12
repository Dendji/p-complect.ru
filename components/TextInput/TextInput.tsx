import style from './TextInput.module.css'
import React, { RefObject } from 'react'
import classnames from 'classnames'

export enum InputTheme {
  White = 'White',
  Box = 'Box',
  WhiteOnBlue = 'WhiteOnBlue',
}

export type TextInputProps = {
  isError?: boolean
  error?: string
  focus?: boolean
  inputSize?: 'standard' | 'small' | 'large'
  theme?: InputTheme
  oneSymboled?: boolean
  inputRef?:
    | RefObject<HTMLInputElement>
    | undefined
    | null
    | ((instance: HTMLInputElement | null) => void)
} & React.HTMLProps<HTMLInputElement>

export default class TextInput extends React.PureComponent<TextInputProps> {
  input: RefObject<HTMLInputElement>

  constructor(props: TextInputProps) {
    super(props)
    this.input = React.createRef()
  }

  getTextInputClassByTheme(theme?: InputTheme) {
    switch (theme) {
      case InputTheme.WhiteOnBlue:
        return style.whiteOnBlue
      case InputTheme.Box:
        return style.box
      case InputTheme.WhiteOnBlue:
        return style.whiteOnBlue
      case InputTheme.White:
      default:
        return style.white
    }
  }

  // componentDidMount() {
  //   const { focus } = this.props
  //   if (focus) {
  //     this.input?.current?.focus()
  //   }
  // }

  render() {
    const { error, theme, className } = this.props
    const { isError, focus, inputRef, ...inputProps } = this.props

    const classNames = classnames(
      style.root,
      ...(!!error || isError ? [style.error] : []),
      this.getTextInputClassByTheme(theme),
      className
    )

    return (
      <div className={classNames}>
        <input
          type="text"
          {...inputProps}
          className={style.input}
          ref={inputRef ? inputRef : this.input}
        />
        {error && <div className={style.errorText}>{error}</div>}
      </div>
    )
  }
}
