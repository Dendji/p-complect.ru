import React from 'react'
import style from './Badge.module.css'

export interface BadgeProps {
  children: React.ReactNode
}

const Badge = (props: BadgeProps) => {
  return <div className={style.root}>{props.children}</div>
}

export default Badge
