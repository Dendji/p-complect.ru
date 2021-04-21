import React from 'react'
import style from './Hamburger.module.css'

interface HamburgerProps {
  isOpen: boolean
  isLight?: boolean
  onClick: () => void
}

export default function Hamburger(props: HamburgerProps) {
  return (
    <button
      onClick={e => {
        e.preventDefault()
        props.onClick()
      }}
      className={[
        style.hamburger,
        props.isOpen ? style.enabled : style.disabled,
        ...(props.isLight ? [style.light] : [])
      ].join(' ')}
    >
      <span className={style['hamburger-line']} />
      <span className={style['hamburger-line']} />
    </button>
  )
}
