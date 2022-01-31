import Tooltip from '@mui/material/Tooltip'
import React, { Ref } from 'react'
import { truncate } from '../../utils/utils'
// import style from './Truncated.module.css'

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  text: string
  limit: number
}

const MyDiv = React.forwardRef(function MyComponent(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
  ref: Ref<HTMLDivElement>
) {
  //  Spread the props to the underlying DOM element.
  return <div {...props} ref={ref}></div>
})

export default function Truncated({ text, limit, ref, ...props }: Props) {
  return text.length >= limit ? (
    <Tooltip title={text} aria-label="add">
      <MyDiv {...props}>{truncate(text, limit)}</MyDiv>
    </Tooltip>
  ) : (
    <MyDiv {...props}>{text}</MyDiv>
  )
}
