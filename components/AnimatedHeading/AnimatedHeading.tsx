import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Heading, { HeadingTheme } from '../Heading/Heading'
import style from './AnimatedHeading.module.css'

interface Props {
  children: React.ReactNode
}

const colors = [
  '#ff303f',
  '#212fff',
  '#139eef',
  '#f99018',
  '#12edba',
  '#ff44c0',
  '#212fff',
  '#fccc20',
]

export default function AnimatedHeading({ children }: Props) {
  const [bbxs, setBbxs] = useState<React.ReactNode[]>([])
  const [size, setSize] = useState([0, 0])
  const theme = useTheme()

  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const words = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const boxes = []

    if (words.current) {
      const { children } = words.current
      for (let i = 0; i < children.length; i++) {
        const width =
          children[i].getBoundingClientRect().width + (matches ? 10 : 20)
        const height = children[i].getBoundingClientRect().height
        const left =
          children[i].getBoundingClientRect().left - (matches ? 5 : 10)
        const top = children[i].getBoundingClientRect().top
        const tagName = children[i].tagName
        if (tagName === 'SPAN') {
          boxes.push(
            <div
              key={i}
              style={{
                animationDelay: `${Math.floor(Math.random() * 200) / 100}s`,
                width,
                height,
                borderColor: colors[i % colors.length],
                left,
                top,
              }}
              className={style.bbox}
            ></div>
          )
        }
        if (tagName === 'BR') {
          boxes.push(<br key={i} />)
        }
      }
    }
    setBbxs(boxes)
  }, [size])

  return (
    <div className={style.root}>
      <Heading weight={1} theme={HeadingTheme.PageHeading} className={style.h1}>
        <span ref={words}>{children}</span>
        <div className={style.bboxes}>{bbxs}</div>
      </Heading>
    </div>
  )
}
