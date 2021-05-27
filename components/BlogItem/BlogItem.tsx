import React from 'react'
import style from './BlogItem.module.css'

export interface IBlogItem {
  heading: string
  description: string
  img: string
}

interface Props extends IBlogItem {}

export default function BlogItem({ heading, description, img }: Props) {
  return (
    <div
      className={style.root}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={style.content}>
        <h4 className={style.heading}>{heading}</h4>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  )
}
