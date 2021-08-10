import classnames from 'classnames'
import React, { useState } from 'react'
import style from './ElasticTabs.module.css'

interface Props {
  tabs: {
    value: string
    text: string
  }[]
  onChange: (value: string) => void
}
export default function ElasticTabs({ tabs, onChange }: Props) {
  const [value, setValue] = useState(tabs[0].value)

  const handleChange = (value: string) => {
    setValue(value)
    onChange(value)
  }

  return (
    <div className={style.root}>
      {tabs.map((t, idx) => (
        <div
          key={idx}
          className={classnames(style.tab, {
            [style.active]: t.value === value,
          })}
          onClick={() => handleChange(t.value)}
        >
          {t.text}
        </div>
      ))}
    </div>
  )
}
