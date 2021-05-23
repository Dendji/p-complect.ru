import classnames from 'classnames'
import React from 'react'
import style from './Hamburger.module.css'

interface Props {
  open?: boolean
  onClick?: () => void
}

export default function Hamburger({ onClick, open }: Props) {
  return (
    <div
      onClick={onClick}
      className={classnames(style.hamburger, { [style.open]: open })}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
