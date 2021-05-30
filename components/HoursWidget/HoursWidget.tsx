import React from 'react'
import style from './HoursWidget.module.css'

interface Props {}
export default function HoursWidget(props: Props) {
  return (
    <div className={style.hours}>
      <div className={style.hoursTitle}>Время работы</div>
      <div>
        <span>пн-чт</span>
        <strong>9:00 – 18:00</strong>
      </div>
      <div>
        <span>пт</span>
        <strong>9:00 – 17:00</strong>
      </div>
    </div>
  )
}
