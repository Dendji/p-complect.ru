import classnames from 'classnames'
import React from 'react'
import style from './Typography.module.css'

export enum TypographyTheme {
  Standard = 'Standard',
  Blue = 'Blue',
}

interface TextProps {
  children: React.ReactNode
  theme?: TypographyTheme
  size?: 18 | 24 | 32
  className?: string
  mb?: number
}

export default function Typography({
  className,
  mb,
  theme,
  children,
  size,
}: TextProps) {
  const getClassByTheme = (theme?: TypographyTheme) => {
    switch (theme) {
      case TypographyTheme.Blue:
        return style.blue
      case TypographyTheme.Standard:
      default:
        return style.standard
    }
  }

  return (
    <p
      className={classnames(style.root, getClassByTheme(theme), className)}
      style={{ marginBottom: mb, fontSize: size }}
    >
      {children}
    </p>
  )
}
