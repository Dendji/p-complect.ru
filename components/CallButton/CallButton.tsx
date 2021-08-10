import React from 'react'
import CallIcon from '../CallIcon/CallIcon'
import style from './CallButton.module.css'

interface Props {
  onClick: () => void
}
export default function CallButton({ onClick }: Props) {
  return (
    <button className={style.root} onClick={onClick}>
      <CallIcon />
    </button>
  )
}
