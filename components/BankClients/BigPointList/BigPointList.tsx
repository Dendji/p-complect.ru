import React from 'react'
import style from './BigPointList.module.css'

interface BigPointListProps {
  items: React.ReactNode[]
  color?: string
}

export default function BigPointList(props: BigPointListProps) {
  const { items, color } = props
  return (
    <ul className={style.root}>
      {items.map((item, index) => {
        return (
          <li className={style.li} key={index}>
            <div className={style.circle} style={{ background: color }}></div>
            {item}
          </li>
        )
      })}
    </ul>
  )
}
