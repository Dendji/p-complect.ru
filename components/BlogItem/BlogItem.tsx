import React from 'react'
import { MultiImage } from '../../pages/about'
import style from './BlogItem.module.css'

export interface IBlogItem {
  name: string | null
  short: string | null
  image: MultiImage | null
}

interface Props extends IBlogItem {}

export default function BlogItem({ name, short, image }: Props) {
  return (
    <div
      className={style.root}
      style={{
        backgroundImage: image ? `url(${image.large})` : 'none',
      }}
    >
      <div className={style.content}>
        {name && <h4 className={style.heading}>{name}</h4>}
        {short && (
          <div
            className={style.description}
            dangerouslySetInnerHTML={{ __html: short }}
          ></div>
        )}
      </div>
    </div>
  )
}
