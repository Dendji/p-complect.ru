import React from 'react'
import style from './ClientCard.module.css'

interface Props {
  image?: string
  heading?: string
  onClick: () => void
}

export default function ClientCard({ heading, image, onClick }: Props) {
  return (
    <div
      className={style.root}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className={style.gradient}>
        <div className={style.heading}>{heading}</div>
      </div>
    </div>
  )
}
