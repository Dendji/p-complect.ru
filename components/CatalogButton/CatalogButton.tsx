import Slide from '@material-ui/core/Slide'
import Zoom from '@material-ui/core/Zoom'
import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'
import style from './CatalogButton.module.css'
import Hamburger from './Hamburger'

export interface CatalogNav {
  text: string
  url: string
  icon?: React.ReactNode
}
interface Props {
  isOpen?: boolean
  navs: CatalogNav[]
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
}

export default function CatalogButton({ isOpen, buttonProps, navs }: Props) {
  return (
    <div className={style.container}>
      <button
        className={classnames(style.root, {
          [style.open]: isOpen,
        })}
        {...buttonProps}
      >
        Категории
        <span className={style.hamburger}>
          <Hamburger open={isOpen} />
        </span>
      </button>
      <Zoom in={isOpen} mountOnEnter unmountOnExit>
        <div className={style.menu}>
          {navs.map((n) => (
            <a href={n.url} className={style.link}>
              <span className={style.icon}>{n.icon}</span>
              <span className={style.text}>{n.text}</span>
            </a>
          ))}
        </div>
      </Zoom>
    </div>
  )
}
