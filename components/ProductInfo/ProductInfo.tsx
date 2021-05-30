import React from 'react'
import ProductGallery from '../ProductGallery/ProductGallery'
import style from './ProductInfo.module.css'
import Button, { ButtonTheme } from '../Button/Button'
import FileIcon from '../FileIcon/FileIcon'
import { IProduct } from '../ProductCard/ProductCard'
import classnames from 'classnames'
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
  const [tab, setTab] = useState(tabs[0].value)

  return (
    <div className={style.root}>
      <ElasticTabs tabs={tabs} onChange={setTab} />
    </div>
  )
}
