import React from 'react'
import style from './CodeStyle.module.css'
import { StringMap } from '../../@types/common'

interface CodeStyleProps {
  code: StringMap
  resetColor?: boolean
  withEars?: boolean
}

export default function CodeStyle(props: CodeStyleProps) {
  const { code, withEars, resetColor } = props
  const classNames = [style.root, withEars]

  if (withEars) {
    classNames.push(style.withEars)
  }

  return (
    <div className={classNames.join(' ')}>
      {Object.keys(code).map((key, index) => {
        return (
          <div className={style.line} key={index}>
            {key}:{' '}
            <span className={resetColor ? '' : style.red}>{code[key]}</span>
          </div>
        )
      })}
    </div>
  )
}
