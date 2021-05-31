import React from 'react'
import style from './ImageLightbox.module.css'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only n
import { useState } from 'react'
import StandardImage from '../StandardImage/StandardImage'

interface Props {
  src: string
}
export default function ImageLightbox({ src }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div className={style.root}>
      <StandardImage
        onClick={() => setOpen(!open)}
        src={src}
        className={style.image}
      />
      {open && (
        <Lightbox
          mainSrc={src}
          onCloseRequest={() => setOpen(false)}
          enableZoom={false}
        />
      )}
    </div>
  )
}
