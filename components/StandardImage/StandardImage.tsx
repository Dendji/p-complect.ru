import React from 'react'
import style from './StandardImage.module.css'

export type StandardImageProps = {} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

export default function StandardImage(props: StandardImageProps) {
  return <img {...props} className={[style.root, props.className].join(' ')} />
}
