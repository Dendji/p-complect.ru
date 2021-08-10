import React from 'react'
import style from './Button.module.css'
import classnames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'

export enum ButtonSize {
  L = 'L',
  M = 'M',
  S = 'S',
  XS = 'XS',
}
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
  theme?: ButtonTheme
  size?: ButtonSize
  disabled?: boolean
  isLoading?: boolean
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onMouseOver?: () => void
  onMouseLeave?: () => void
  on?: () => void
}

export enum ButtonTheme {
  White = 'Black',
  Black = 'White',
  Green = 'Green',
  Orange = 'Orange',
  BlackOnWhite = 'BlackOnWhite',
  Gray = 'Gray',
  Blue = 'Blue',
  Red = 'Red',
  OrangeBordered = 'OrangeBordered',
  Link = 'Link',
  LinkButton = 'LinkButton',
  WhiteLink = 'WhiteLink',
}

const getClassNameBySize = (size?: ButtonSize): string => {
  switch (size) {
    case ButtonSize.S:
      return style.sizeS
    case ButtonSize.XS:
      return style.sizeXS
    case ButtonSize.M:
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
    case ButtonTheme.Red:
      return style.red
    case ButtonTheme.BlackOnWhite:
      return style.blackOnWhite
    case ButtonTheme.Green:
      return style.green
    case ButtonTheme.Gray:
      return style.gray
    case ButtonTheme.OrangeBordered:
      return style.blueBordered
    case ButtonTheme.Link:
      return style.link
    case ButtonTheme.LinkButton:
      return style.linkButton
    case ButtonTheme.WhiteLink:
      return style.whiteLink
    case ButtonTheme.Orange:
      return style.orange
    case ButtonTheme.White:
    default:
      return style.white
  }
}

export const Button = (props: ButtonProps) => {
  const {
    theme,
    size,
    disabled,
    onClick,
    onMouseOver,
    onMouseLeave,
    isLoading,
    className,

    ...btnProps
  } = props

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (disabled || isLoading) {
      e.preventDefault()
      e.stopPropagation()
      return
    }

    if (onClick) onClick(e)
  }

  return (
    <button
      {...btnProps}
      className={classnames(
        style.root,
        className,
        getClassNameBySize(size),
        getClassNameByTheme(theme),
        {
          [style.disabled]: disabled,
          [style.isLoading]: isLoading,
          [style.disabled]: disabled,
        }
      )}
      onClick={handleOnClick}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {isLoading ? (
        <div className={style.loader}>
          <CircularProgress size={20} />
        </div>
      ) : (
        props.children
      )}
    </button>
  )
}

export default Button
