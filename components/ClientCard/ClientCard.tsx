import React from 'react'
import style from './ClientCard.module.css'

interface Props {
  image: string
  heading: string
}
export default function ClientCard({ heading, image }: Props) {
  return (
    <div className={style.root} style={{ backgroundImage: `url(${image})` }}>
      <div className={style.gradient}>
        <div className={style.heading}>{heading}</div>
      </div>
    </div>
  )
}
