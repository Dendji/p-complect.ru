import classnames from 'classnames'
import React from 'react'
import { IInit } from '../../@types/common'
import PinIcon from '../PinIcon/PinIcon'
import RLink from '../RLink/RLink'
import style from './AddressWidget.module.css'

interface Props {
  isMobile?: boolean
  init?: IInit
}
export default function AddressWidget({ isMobile, init }: Props) {
  const info = init?.contacts?.items.find((i) => i.type === 'map')
  return (
    <div className={classnames(style.address, { [style.mobile]: isMobile })}>
      {!isMobile && <PinIcon />}
      {info ? (
        <RLink
          href={info.link}
          className={style.addressLink}
          target="_blank"
          rel="noreferrer"
        >
          {info?.items.map((item) => item['текст'])}
        </RLink>
      ) : (
        <RLink
          href="https://yandex.ru/maps/-/CCUYJ0wDPB"
          className={style.addressLink}
          target="_blank"
          rel="noreferrer"
        >
          Московская обл.,
          <br /> г. Люберцы, ул. Кирова, д. 20А
        </RLink>
      )}

      {isMobile && (
        <div className={style.pin}>
          <PinIcon isMobile />
        </div>
      )}
    </div>
  )
}
