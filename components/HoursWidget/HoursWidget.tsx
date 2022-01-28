import React from 'react'
import { IInit } from '../../@types/common'
import style from './HoursWidget.module.css'

interface Props {
  init?: IInit
}
export default function HoursWidget({ init }: Props) {
  return (
    <div className={style.hours}>
      <div className={style.hoursTitle}>Время работы</div>
      {init?.contacts?.items
        .find((i) => i.type === 'text')
        ?.items.map((item, i) => (
          <div
            dangerouslySetInnerHTML={{ __html: item['текст'] }}
            key={i}
          ></div>
        )) || (
        <>
          <div>
            <span>пн-чт</span>
            <strong>9:00 – 18:00</strong>
          </div>
          <div>
            <span>пт</span>
            <strong>9:00 – 17:00</strong>
          </div>
        </>
      )}
    </div>
  )
}
