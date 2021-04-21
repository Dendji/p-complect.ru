import classnames from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'
import { IArticlePreview } from '../../pages/blog'
import Badge from '../Badge/Badge'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import StandardImage from '../StandardImage/StandardImage'
import style from './Article.module.css'

interface Props extends IArticlePreview {
  headliner?: boolean
}

export default function Article({
  slug,
  badge,
  title,
  cover,
  preview,
  headliner,
}: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/blog/${slug}`)
  }

  return (
    <article
      className={classnames(style.root, {
        [style.headliner]: headliner,
      })}
      onClick={handleClick}
    >
      <StandardImage src={cover} />
      <div className={style.text}>
        <Badge>{badge}</Badge>
        <Heading weight={2} className={style.heading}>
          {title}
        </Heading>
        <Paragraph size={20}>{preview}</Paragraph>
      </div>
    </article>
  )
}
