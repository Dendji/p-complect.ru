import React, { createRef, useEffect } from 'react'
import style from './YandexMap.module.css'

export default function YandexMap({ src }: { src: string }) {
  const ref = createRef<HTMLDivElement>()

  useEffect(() => {
    const script = document.createElement('script')

    script.src = src
    script.async = true

    ref.current?.appendChild(script)

    return () => {
      ref.current?.removeChild(script)
    }
  }, [])
  return <div className={style.root} ref={ref}></div>
}
