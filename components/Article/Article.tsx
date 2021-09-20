import classnames from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'
import { IArticlePreview } from '../../pages/blog'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import style from './Article.module.css'
import Button, { ButtonTheme } from '../Button/Button'

interface Props extends IArticlePreview {
  headliner?: boolean
}

export default function Article({
  url,
  title,
  cover,
  preview,
  headliner,
}: Props) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`${url}`)
  }

  return (
    <article
      className={classnames(style.root, {
        [style.headliner]: headliner,
      })}
      onClick={handleClick}
    >
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className={style.cover}
      />
      <div className={style.text}>
        <Heading weight={2} className={style.heading}>
          {title}
        </Heading>
        {preview && (
          <div
            dangerouslySetInnerHTML={{ __html: preview }}
            className={style.short}
          ></div>
        )}
        <Button theme={ButtonTheme.OrangeBordered} className={style.button}>
          Читать
        </Button>
      </div>
    </article>
  )
}
