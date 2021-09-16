import React from 'react'
import { IInit } from '../../@types/common'
import CallButton from '../CallButton/CallButton'
import RLink from '../RLink/RLink'
import style from './CallWidget.module.css'

interface Props {
  onCall: () => void
  init?: IInit
}
export default function CallWidget({ onCall, init }: Props) {
  const info = init?.contacts?.items.find((i) => i.type === 'tel')

  return (
    <div className={style.call}>
      {info ? (
        <div>
          {info.items.map((i) => (
            <div>
              <RLink href={`tel: ${i['текст']}`} className={style.tel}>
                {i['текст']}
              </RLink>
            </div>
          ))}
        </div>
      ) : (
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
      )}
      <div>
        <CallButton onClick={onCall} />
      </div>
    </div>
  )
}
