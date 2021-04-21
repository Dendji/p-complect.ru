import React from 'react'
import style from './Navigation.module.css'
import Link from 'next/link'
import Popup, { PopupEffect } from '../Popup/Popup'
import { Nav } from '../../utils/nav'

export interface NavigationProps {
  isOpen: boolean
  navs: Nav[]
  onClose: () => void
}

const mapNav = (nav: Nav, index: number): React.ReactNode => {
  return nav.submenu ? (
    nav.submenu.map(mapNav)
  ) : (
    <div className={style.link} key={index + nav.href}>
      <Link href={nav.href}>
        <a>{nav.title}</a>
      </Link>
    </div>
  )
}
export default function Navigation({ isOpen, navs, onClose }: NavigationProps) {
  return (
    <Popup isOn={isOpen} effect={PopupEffect.Fade}>
      <div className={style.root}>
        <div>
          <nav className={style.nav}>{navs.map(mapNav)}</nav>
          {/* <div className={style.link}>
            <a href="tel:+7 495 555-22-33">+7 495 555-22-33</a>
          </div> */}
        </div>
      </div>
    </Popup>
  )
}
