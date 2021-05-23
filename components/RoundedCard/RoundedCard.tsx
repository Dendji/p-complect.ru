import classnames from 'classnames'
import React from 'react'
import style from './RoundedCard.module.css'

interface Props {
  className?: string
  children: React.ReactNode
}

export default function RoundedCard({ children, className }: Props) {
  return <div className={classnames(style.root, className)}>{children}</div>
}
