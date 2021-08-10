import React from 'react'
import ProductGallery from '../ProductGallery/ProductGallery'
import style from './ProductMain.module.css'
import Button, { ButtonTheme } from '../Button/Button'
import FileIcon from '../FileIcon/FileIcon'
import classnames from 'classnames'
import { IFullProduct } from '../../pages/product/[product_id]'
import Truncated from '../Truncated/Truncated'
import { formatPrice } from '../../utils/utils'

interface Props {
  product: IFullProduct
  onBuyClick: () => void
}

export default function ProductMain({ product, onBuyClick }: Props) {
  return (
    <div className={style.main}>
      <div className={style.images}>
        <ProductGallery
          items={product.images?.map((img) => ({
            thumbnail: img.thumbnail,
            original: img.large,
          }))}
        />
      </div>
      <div className={style.info}>
        <div className={style.header}>
          <div className={style.article}>
            {product.article && (
              <Truncated text={`Арт. ${product.article}`} limit={30} />
            )}
          </div>
          {product.in_stock ? (
            <div className={classnames(style.available, style.success)}>
              В наличии
            </div>
          ) : (
            <div className={classnames(style.available, style.failure)}>
              Отсутствует
            </div>
          )}
        </div>

        <h1 className={style.heading}>
          {product.name || 'Без незвания'}{' '}
          {product.unit && <div className={style.unit}>{product.unit}</div>}
        </h1>

        {product.pricelist && product.pricelist.length > 0 && (
          <div className={style.priceList}>
            {product.pricelist.map((p, key) => (
              <div className={style.priceListItem} key={key}>
                {p.value && (
                  <div className={style.price}>
                    {formatPrice(Number.parseInt(p.value))}
                  </div>
                )}{' '}
                <div className={style.for}>при покупке {p.при_покупке_от}</div>
              </div>
            ))}
          </div>
        )}

        <div className={style.buttons}>
          <Button theme={ButtonTheme.Orange} onClick={onBuyClick}>
            Оставить заявку
          </Button>
        </div>
        {product.documents && product.documents.length > 0 && (
          <div className={style.pdf}>
            {product.documents.map((d, key) => (
              <Button theme={ButtonTheme.Link} onClick={onBuyClick} key={key}>
                <a href={d.url} className={style.pdfLink} target="_blank">
                  <span>
                    <FileIcon />
                  </span>
                  PDF характеристики товара
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
