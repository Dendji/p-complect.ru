import React from 'react'
import style from './ProductCard.module.css'
import StandardImage from '../StandardImage/StandardImage'
import Button, { ButtonTheme } from '../Button/Button'
import RoundedCard from '../RoundedCard/RoundedCard'
import classnames from 'classnames'
import Link from 'next/link'

export interface IProduct {
  id: string
  price: string
  pricePer: string
  url: string
  img: string
  images?: string[]
  name: string
}

interface Props {
  product: IProduct
  onProductClick: () => void
  small?: boolean
}

export default function CatalogSidebar({
  product,
  onProductClick,
  small,
}: Props) {
  return (
    <RoundedCard
      className={classnames(style.root, { [style.small]: !!small })}
      onClick={onProductClick}
    >
      <StandardImage src={product.img} />
      <div className={style.name}>{product.name}</div>
      <div className={style.price}>{product.price}</div>
      <div className={style.button}>
        <Link href={product.url}>
          <Button theme={ButtonTheme.Orange} className={style.btn}>
            Просмотр
          </Button>
        </Link>
      </div>
    </RoundedCard>
  )
}
