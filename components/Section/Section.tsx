import classnames from 'classnames'
import React from 'react'
import style from './Section.module.css'

interface SectionProps {
  children: React.ReactNode
  className?: string
  dark?: boolean
  id?: string
}

export default function Section(props: SectionProps) {
  const classNames = [style.root]
  const { className, dark } = props

  if (dark) {
    classNames.push(style.dark)
  }

  if (className) {
    classNames.push(className)
  }

  return (
    <div className={classnames(classNames)} id={props.id}>
      {props.children}
    </div>
  )
}
