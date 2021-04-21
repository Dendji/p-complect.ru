import React from 'react'
import style from './Link.module.css'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
export default function Link(props: Props) {
  return <a {...props} className={style.root}></a>
}
