import React from 'react'
import style from './Subheading.module.css'

interface SubheadingProps {
  subheading: string
  color?: string
  children: React.ReactNode
}

export default function Subheading(props: SubheadingProps) {
  const { color, children, subheading } = props

  return (
    <div className={style.root}>
      <div className={style.subheading} style={{ color }}>
        {subheading}
      </div>
      {children}
    </div>
  )
}
