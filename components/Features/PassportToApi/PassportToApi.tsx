import React from 'react'
import style from './PassportToApi.module.css'

export default function PassportToApi() {
  return (
    <div className={style.root}>
      <div className={style.passport}>Паспорт</div>

      <div className={style.code}>
        <div>
          type: "Паспорт РФ", <br />
          number: "660403",
          <br />
          surname: "Кацай",
          <br />
          ...
        </div>
      </div>
    </div>
  )
}
