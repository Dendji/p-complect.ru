import classnames from 'classnames'
import React from 'react'
import style from './RoundedCard.module.css'

interface Props {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function RoundedCard({ children, className, onClick }: Props) {
  return (
    <div className={classnames(style.root, className)} onClick={onClick}>
      {children}
    </div>
  )
}
