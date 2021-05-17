import React from 'react'
import style from './RoundedCard.module.css'

interface Props {
  children: React.ReactNode
}

export default function RoundedCard(props: Props) {
  return <div className={style.root}>{props.children}</div>
}
