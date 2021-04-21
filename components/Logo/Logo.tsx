import classnames from 'classnames'
import React from 'react'
import style from './Logo.module.css'

interface Props {
  light?: boolean
}

export default function Logo({ light }: Props) {
  return (
    <div className={classnames(style.root, { [style.light]: light })}>
      <svg
        width="48"
        height="53"
        viewBox="0 0 48 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45.8777 34.931H33.2246C32.12 34.931 31.2246 35.8265 31.2246 36.931V49.5667C31.2246 50.6713 32.12 51.5667 33.2246 51.5667H45.8777C46.9822 51.5667 47.8777 50.6713 47.8777 49.5667V36.931C47.8777 35.8265 46.9822 34.931 45.8777 34.931Z"
          fill={light ? '#fff' : '#49494A'}
        />
        <path
          d="M14.1327 3.96338H2C0.895431 3.96338 0 4.85881 0 5.96338V50.3108C0 51.4154 0.895431 52.3108 2 52.3108H14.1327C15.2372 52.3108 16.1327 51.4154 16.1327 50.3108V5.96338C16.1327 4.85881 15.2372 3.96338 14.1327 3.96338Z"
          fill="#FAAC3D"
        />
        <path
          d="M47.8774 15.0823V2.96655C47.8774 1.86198 46.982 0.966553 45.8774 0.966553L1.99989 0.966553C0.895321 0.966553 -0.000106812 1.86198 -0.000106812 2.96655V15.0824C-0.000106812 16.1869 0.895321 17.0823 1.99989 17.0823L45.8774 17.0823C46.982 17.0823 47.8774 16.1869 47.8774 15.0823Z"
          fill="#FAAC3D"
        />
      </svg>
      <div>
        <div>
          <strong>ПРОФКОМПЛЕКТАЦИЯ</strong>
        </div>
        <div>строительные материалы </div>
      </div>
    </div>
  )
}
