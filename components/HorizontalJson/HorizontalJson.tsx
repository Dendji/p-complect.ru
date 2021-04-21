import React from 'react'
import CodeStyle from '../CodeStyle/CodeStyle'
import style from './HorizontalJson.module.css'

export default function HorizontalJson() {
  return (
    <div className={style.root}>
      <div className={style.row}>
        <CodeStyle
          code={{
            type: 'invoice',
            invoice_number: '20281',
            invoice_date: '01/04/2020',
            payment_terms: '14 days',
            business_id: '121212-2'
          }}
        />
        <CodeStyle
          code={{
            type: 'invoice',
            invoice_number: '20281',
            invoice_date: '01/04/2020',
            payment_terms: '14 days',
            business_id: '121212-2'
          }}
        />
      </div>
      <div className={style.row}>
        <CodeStyle
          code={{
            type: 'driving license',
            number: 'I1234562',
            expiration_date: '08/31/2014',
            surname: 'Alexander',
            name: 'Joseph'
          }}
        />
        <CodeStyle
          code={{
            type: 'driving license',
            number: 'I1234562',
            expiration_date: '08/31/2014',
            surname: 'Alexander',
            name: 'Joseph'
          }}
        />
      </div>
      <div className={style.row}>
        <CodeStyle
          code={{
            type: 'US passport',
            number: '340020013',
            surname: 'Williams',
            name: 'James'
          }}
        />
        <CodeStyle
          code={{
            type: 'US passport',
            number: '340020013',
            surname: 'Williams',
            name: 'James'
          }}
        />
        <CodeStyle
          code={{
            type: 'US passport',
            number: '340020013',
            surname: 'Williams',
            name: 'James'
          }}
        />
      </div>
    </div>
  )
}
