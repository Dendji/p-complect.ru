import Zoom from '@material-ui/core/Zoom'
import classnames from 'classnames'
import React from 'react'
import style from './CatalogButton.module.css'
import Hamburger from './Hamburger'

export interface CatalogNav {
  text: string
  url: string
  icon?: React.ReactNode
}
interface Props {
  isMobile?: boolean
  isOpen?: boolean
  navs: CatalogNav[]
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
}

export default function CatalogButton({
  isOpen,
  buttonProps,
  navs,
  isMobile,
}: Props) {
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
          {isMobile ? (
            <svg
              width="50"
              height="50"
              viewBox="0 0 20 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classnames(style.arrow, {
                [style.arrowOpen]: isOpen,
              })}
            >
              <path
                d="M10.5488 10.5735L19.7738 1.32292C20.0759 1.01983 20.0754 0.52913 19.7723 0.226553C19.4692 -0.0757898 18.9782 -0.0750085 18.6759 0.228115L9.99997 8.92808L1.32406 0.227803C1.02172 -0.0752818 0.531059 -0.0760631 0.227936 0.22624C0.0759831 0.37792 5.72892e-06 0.57663 5.73129e-06 0.77534C5.73366e-06 0.973543 0.0754757 1.17147 0.226374 1.32288L9.45114 10.5735C9.59637 10.7195 9.79403 10.8014 9.99997 10.8014C10.2059 10.8014 10.4033 10.7192 10.5488 10.5735Z"
                fill="white"
              />
            </svg>
          ) : (
            <Hamburger open={isOpen} />
          )}
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
