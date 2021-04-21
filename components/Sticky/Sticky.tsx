import React, { Fragment, useEffect, useRef, useState } from 'react'
import style from './Sticky.module.css'

export interface StickyProps {
  children: React.ReactNode
}

export default (props: StickyProps) => {
  const [isSticky, setSticky] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const handleScroll = () => {
    if (ref && ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 150)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <Fragment>
      <div
        className={`${style.stickyWrapper} ${isSticky ? style.sticky : ''}`}
        ref={ref}
      >
        {props.children}
      </div>
    </Fragment>
  )
}
