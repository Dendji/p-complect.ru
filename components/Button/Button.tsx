import React from 'react'
import style from './Button.module.css'
import { AlphabetSize } from '../../@types/common'

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
  theme?: ButtonTheme
  size?: AlphabetSize
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

export enum ButtonTheme {
  White = 'Black',
  Black = 'White',
  BlueGradient = 'BlueGradient',
  BlackOnWhite = 'BlackOnWhite',
  Blue = 'Blue',
  Link = 'Link',
  Orange = 'Orange',
}

const getClassNameBySize = (size?: AlphabetSize): string => {
  switch (size) {
    case AlphabetSize.S:
      return style.sizeS
    case AlphabetSize.L:
      return style.sizeL
    case AlphabetSize.M:
    default:
      return style.sizeM
  }
}

const getClassNameByTheme = (theme?: ButtonTheme): string => {
  switch (theme) {
    case ButtonTheme.Black:
      return style.black
    case ButtonTheme.Blue:
      return style.blue
    case ButtonTheme.BlackOnWhite:
      return style.blackOnWhite
    case ButtonTheme.BlueGradient:
      return style.blueGradient
    case ButtonTheme.Orange:
      return style.orange
    case ButtonTheme.Link:
      return style.link
    case ButtonTheme.White:
    default:
      return style.white
  }
}

export default function Button(props: ButtonProps) {
  const { theme, size, disabled, icon, ...p } = props
  const classNames = [
    style.root,
    getClassNameBySize(size),
    getClassNameByTheme(theme),
    ...(icon ? [style.withIcon] : []),
  ]

  if (disabled) classNames.push(style.disabled)

  return (
    <button {...p} className={classNames.join(' ')} onClick={props.onClick}>
      {props.icon && <div className={style.icon}>{props.icon}</div>}
      <span>{props.children}</span>
    </button>
  )
}
