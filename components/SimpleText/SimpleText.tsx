import classNames from 'classnames'
import React from 'react'
import style from './SimpleText.module.css'

interface TextProps {
  className?: string
  children: React.ReactNode
  mb?: number
}

export default function SimpleText({ className, children, mb }: TextProps) {
  return (
    <div
      className={classNames(style.root, className)}
      style={{ marginBottom: mb }}
    >
      {children}
    </div>
  )
}
