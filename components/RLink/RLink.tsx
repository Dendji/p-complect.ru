import classNames from 'classnames'
import React from 'react'
import style from './RLink.module.css'

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}
export default function RLink(props: Props) {
  return (
    <a {...props} className={classNames(style.root, props.className)}>
      {props.children}
    </a>
  )
}
