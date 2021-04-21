import React, { FC } from 'react'
import style from './Paragraph.module.css'

interface Props {
  children: React.ReactNode
  size?: number
}

const Paragraph: FC<Props> = ({ size = 24, children }) => {
  return (
    <p className={style.root} style={{ fontSize: size }}>
      {children}
    </p>
  )
}

export default Paragraph
