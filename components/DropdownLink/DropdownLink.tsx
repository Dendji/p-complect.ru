import React, { ReactElement, useRef, useState } from 'react'
import style from './DropdownLink.module.css'
import classnames from 'classnames'
import { motion } from 'framer-motion'

interface DropdownLinkProps {
  link: string
  className?: string
  popupClassName?: string
  children: ReactElement<any, any>
  dark?: boolean
}

export default function DropdownLink({
  link,
  children,
  className,
  popupClassName,
  dark,
}: DropdownLinkProps) {
  const [isOpen, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const span = useRef<HTMLSpanElement>(null)
  return (
    <div
      className={classnames(style.root, className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={root}
    >
      <div className={style.link}>
        <span className={style.linkText} ref={span}>
          {link}{' '}
        </span>

        <span
          className={classnames(
            isOpen
              ? classnames(style.triangleActive, style.triangle)
              : style.triangle,
            dark && style.dark
          )}
        ></span>
      </div>

      <div
        className={classnames(style.popup, popupClassName)}
        style={{
          top: root.current ? root.current.getBoundingClientRect().height : 0,
        }}
      >
        {isOpen ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setOpen(false)}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <div className={style.content}>{children}</div>
          </motion.div>
        ) : null}
      </div>
    </div>
  )
}
