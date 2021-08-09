import React from 'react'
import style from './Loader.module.css'
import classnames from 'classnames'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  color?: string
  size?: number
  animation?: 'jump' | 'opacify'
}
export const Loader = ({
  color,
  className,
  animation = 'opacify',
  size = 4,
  ...props
}: Props) => {
  return (
    <div className={classnames(style.loader, className)} {...props}>
      {Array(4)
        .fill(0)
        .map((_s, index) => (
          <span
            key={index}
            className={style.dot}
            style={{
              backgroundColor: color || '#fff',
              height: size,
              width: size,
            }}
          ></span>
        ))}
    </div>
  )
}

export default Loader
