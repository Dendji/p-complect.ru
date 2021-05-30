import React from 'react'
import style from './ProductInfo.module.css'
import ElasticTabs from '../ElasticTabs/ElasticTabs'
import { useState } from 'react'

interface Props {}

const tabs = [
  {
    value: 'character',
    text: 'Характеристики',
  },
  {
    value: 'desc',
    text: 'Описание',
  },
  {
    value: 'tech',
    text: 'Техническая информация',
  },
]
export default function ProductInfo({}: Props) {
  const [, setTab] = useState(tabs[0].value)

  return (
    <div className={style.root}>
      <ElasticTabs tabs={tabs} onChange={setTab} />
    </div>
  )
}
