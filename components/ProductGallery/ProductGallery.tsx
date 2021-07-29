import React from 'react'

import ImageGallery from 'react-image-gallery'
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder'

export interface ReactImageGalleryItem {
  original: string
  thumbnail: string
}

interface Props {
  items?: ReactImageGalleryItem[]
}

export default function ProductGallery({ items }: Props) {
  return items && items.length ? (
    <ImageGallery
      items={items}
      autoPlay={false}
      showPlayButton={false}
      thumbnailPosition={'left'}
    />
  ) : (
    <div style={{ maxWidth: 200 }}>
      <ImagePlaceholder />
    </div>
  )
}
