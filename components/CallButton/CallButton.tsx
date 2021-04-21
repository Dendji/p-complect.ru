import React from 'react'
import CallIcon from '../CallIcon/CallIcon'
import style from './CallButton.module.css'

interface Props {}
export default function CallButton(props: Props) {
  return (
    <button className={style.root}>
      <CallIcon />
    </button>
  )
}
