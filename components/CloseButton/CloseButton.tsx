import React from 'react'
import CrossIcon from '../Icons/CrossIcon'
import style from './CloseButton.module.css'

export interface CloseButtonProps {
  onClose: () => void
}
export default function CloseButton(props: CloseButtonProps) {
  return (
    <div className={style.root} onClick={props.onClose}>
      <CrossIcon />
    </div>
  )
}
