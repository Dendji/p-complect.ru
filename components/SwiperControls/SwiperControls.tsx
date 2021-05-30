import React from 'react'
import SliderControl from '../SliderControl/SliderControl'
import style from './SwiperControls.module.css'

interface Props {
  onLeftClick: () => void
  onRightClick: () => void
}
export default function SwiperControls({ onLeftClick, onRightClick }: Props) {
  return (
    <div className={style.controls}>
      <SliderControl onClick={onLeftClick} />
      <SliderControl onClick={onRightClick} right />
    </div>
  )
}
