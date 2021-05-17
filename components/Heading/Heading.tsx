import classes from './Heading.module.css'
import { CSSProperties } from 'react'
import React from 'react'
import classnames from 'classnames'

export type HeadingTheme = 'default' | 'orange'
export type HeadingSize = 'large' | 'big' | 'medium' | 'small'

export interface HeadingProps {
  weight?: number
  size?: HeadingSize
  children: React.ReactNode
  center?: boolean
  className?: string
  noMbMobile?: boolean
  style?: CSSProperties
  theme?: HeadingTheme
  noMt?: boolean
}

export default function Heading({
  size = 'big',
  weight,
  noMt,
  style,
  children,
  center,
  noMbMobile,
  className,
  theme,
}: HeadingProps) {
  const getTagByWeight = (weight: number) => {
    return `h${weight}`
  }

  return React.createElement(
    getTagByWeight(weight || 2),
    {
      className: classnames(
        classes.root,
        classes.title,
        classes[size],
        className,
        {
          [classes.noMt]: !!noMt,
          [classes.orange]: theme === 'orange',
          [classes.noMbMobile]: noMbMobile,
          [classes.center]: center,
        }
      ),
      style,
    },
    children
  )
}
