import classnames from 'classnames'
import React from 'react'
import style from './SliderControl.module.css'

interface Props {
  right?: boolean
  className?: string
  onClick: () => void
}
export default function SliderControl({ onClick, right, className }: Props) {
  return (
    <div
      className={classnames(style.control, className, {
        [style.right]: !!right,
      })}
      onClick={onClick}
    >
      <svg
        width="14"
        height="23"
        viewBox="0 0 14 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21L2 11.5L12 2"
          stroke="#8E8E8E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
