import React from 'react'
import Select, { Props } from 'react-select'
import style from './Select.module.css'

interface MyProps extends Props {}
export default function ReactSelect(props: MyProps) {
  return (
    <Select
      {...props}
      className={style.root}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: 'rgba(250, 172, 61, .3)',
          primary: '#faac3d',
        },
      })}
    />
  )
}
