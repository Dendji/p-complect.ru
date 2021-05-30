import React from 'react'
import CallButton from '../CallButton/CallButton'
import RLink from '../RLink/RLink'
import style from './CallWidget.module.css'

interface Props {}
export default function CallWidget(props: Props) {
  return (
    <div className={style.call}>
      <div>
        <div>
          <RLink href="tel: +7 495 970 55 05" className={style.tel}>
            +7 495 970 55 05
          </RLink>
        </div>
        <div>
          <RLink href="tel: +7 916 825 03 03" className={style.tel}>
            +7 916 825 03 03
          </RLink>
        </div>
      </div>
      <div>
        <CallButton />
      </div>
    </div>
  )
}
