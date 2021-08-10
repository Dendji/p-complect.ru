import React from 'react'
import style from './ProductInfo.module.css'
import ElasticTabs from '../ElasticTabs/ElasticTabs'
import { useState } from 'react'
import { useMediaQuery, useTheme } from '@material-ui/core'

interface Props {
  attributes?: {
    [key: string]: {
      id: number
      name: string
      type: string
      values: string[]
    }
  }
  description?: string
}

export default function ProductInfo({ description, attributes }: Props) {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const tabs = [
    {
      value: 'desc',
      text: 'Описание',
    },
    {
      value: 'attr',
      text: 'Характеристики',
    },
    // {
    //   value: 'tech',
    //   text: 'Техническая информация',
    // },
  ]
  const [tab, setTab] = useState(tabs[0].value)

  return isMobile ? (
    <div className={style.root}>
      {description && (
        <div className={style.desc}>
          <div className={style.heading}>Описание</div>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      )}
      {attributes && (
        <div className={style.desc}>
          <div className={style.heading}>Характеристики</div>
          <table className="table">
            {Object.values(attributes).map((a) => (
              <tr>
                <td>{a.name}</td>
                {a.values.map((v) => (
                  <td>{v}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  ) : (
    <div className={style.root}>
      <ElasticTabs tabs={tabs} onChange={setTab} />
      <div className={style.content}>
        {tab === 'desc' && description && (
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        )}
        {tab === 'attr' && attributes && (
          <table className="table">
            {Object.values(attributes).map((a) => (
              <tr>
                <td>{a.name}</td>
                {a.values.map((v) => (
                  <td>{v}</td>
                ))}
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  )
}
