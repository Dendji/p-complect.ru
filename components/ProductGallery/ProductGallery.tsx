import React from 'react'

import ImageGallery from 'react-image-gallery'

export interface ReactImageGalleryItem {
  original: string
  thumbnail: string
}

interface Props {
  items: ReactImageGalleryItem[]
}
export default function ProductGallery({ items }: Props) {
  return (
    <ImageGallery
      items={items}
      autoPlay={false}
      showPlayButton={false}
      thumbnailPosition={'left'}
    />
  )
}
