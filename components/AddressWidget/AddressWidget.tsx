import React from 'react'
import PinIcon from '../PinIcon/PinIcon'
import RLink from '../RLink/RLink'
import style from './AddressWidget.module.css'

interface Props {
  isMobile?: boolean
}
export default function AddressWidget({ isMobile }: Props) {
  return (
    <div className={style.address}>
      {!isMobile && <PinIcon />}
      <RLink
        href="https://yandex.ru/maps/-/CCUYJ0wDPB"
        className={style.addressLink}
        target="_blank"
        rel="noreferrer"
      >
        Московская обл.,
        <br /> г. Люберцы, ул. Кирова, д. 20А
      </RLink>
      {isMobile && <PinIcon />}
    </div>
  )
}
