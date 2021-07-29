import React from 'react'
import style from './ProductCard.module.css'
import StandardImage from '../StandardImage/StandardImage'
import Button, { ButtonTheme } from '../Button/Button'
import RoundedCard from '../RoundedCard/RoundedCard'
import classnames from 'classnames'
import Link from 'next/link'
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'
import Truncated from '../Truncated/Truncated'

export interface IProduct {
  id: number
  article: string
  attributes: {
    [key: string]: {
      id: number
      name: string
      type: 'checkbox' | 'dropdown'
      values: string[]
    }
  }
  brand?: string
  preview?: {
    large: string
    medium: string
    preview: string
    thumbnail: string
  }[]
  price: string
  unit: string
  name: string
}

interface Props {
  product: IProduct
  onProductClick: () => void
  small?: boolean
}

export default function ProductCard({ product, onProductClick, small }: Props) {
  return (
    <RoundedCard
      className={classnames(style.root, { [style.small]: !!small })}
      onClick={onProductClick}
    >
      <div className={style.image}>
        {product.preview && product.preview.length ? (
          <div
            className={style.img}
            style={{ backgroundImage: `url(${product.preview[0].thumbnail})` }}
          ></div>
        ) : (
          // <StandardImage src={product.preview[0].thumbnail} />
          <ImagePlaceholder />
        )}
      </div>
      <div className={style.name}>
        <Truncated text={product.name} limit={40} />
      </div>
      {product.price && <div className={style.price}>{product.price}</div>}
      <div className={style.button}>
        <Link href={`/product/${product.id}`}>
          <Button theme={ButtonTheme.Orange} className={style.btn}>
            Просмотр
          </Button>
        </Link>
      </div>
    </RoundedCard>
  )
}
