import React from 'react'
import ProductGallery from '../ProductGallery/ProductGallery'
import style from './ProductMain.module.css'
import Button, { ButtonTheme } from '../Button/Button'
import FileIcon from '../FileIcon/FileIcon'
import { IProduct } from '../ProductCard/ProductCard'
import classnames from 'classnames'

interface Props {
  product: IProduct
  onBuyClick: () => void
}
export default function ProductMain({ product, onBuyClick }: Props) {
  return (
    <div className={style.main}>
      <div className={style.images}>
        <ProductGallery
          items={[
            {
              original:
                'https://profkomplektaciya.ru/image/cache/188-204/data/Dor-razmetka/ef6b2f9c64b0809472e14b17173ebde0.jpg',
              thumbnail:
                'https://profkomplektaciya.ru/image/cache/188-204/data/Dor-razmetka/ef6b2f9c64b0809472e14b17173ebde0.jpg',
            },
            {
              original:
                'https://profkomplektaciya.ru/image/cache/188-204/data/MASTIKA/c40e13431fa7f11035cabde98c6b436b.jpg',
              thumbnail:
                'https://profkomplektaciya.ru/image/cache/188-204/data/MASTIKA/c40e13431fa7f11035cabde98c6b436b.jpg',
            },
            {
              original:
                'https://profkomplektaciya.ru/image/cache/188-204/data/Pena/bf0555d1fdea86994479ef0222ef4f11.jpg',
              thumbnail:
                'https://profkomplektaciya.ru/image/cache/188-204/data/Pena/bf0555d1fdea86994479ef0222ef4f11.jpg',
            },
          ]}
        />
      </div>
      <div className={style.info}>
        <div className={style.header}>
          <div className={style.article}>Арт. 15965542</div>
          <div className={classnames(style.available, style.success)}>
            В наличии
          </div>
        </div>
        <h1 className={style.heading}>
          Гидроизоляция отсечная Технониколь 600
        </h1>
        <div className={style.pricePerUnit}>
          <span className={style.price}>1 248₽ /</span>{' '}
          <span className={style.units}>62,40₽ м</span>
        </div>
        <div className={style.buttons}>
          <Button theme={ButtonTheme.Orange} onClick={onBuyClick}>
            Оставить заявку
          </Button>
        </div>
        <div className={style.pdf}>
          <Button theme={ButtonTheme.Link} onClick={onBuyClick}>
            <a href="#" className={style.pdfLink}>
              <span>
                <FileIcon />
              </span>
              PDF характеристики товара
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
