import React from 'react'
import Introduction from '../Introduction/Introduction'
import style from './IntroClientOnboarding.module.css'

export default function IntroClientOnboarding(props: {
  onOpenModal: () => void
}) {
  return (
    <Introduction
      className={style.root}
      heading={
        <>
          Экономьте время <br />
          клиента при&nbsp;обработке
          <br /> документов
        </>
      }
      subheading={
        <>
          Получайте данные о&nbsp;клиенте моментально и&nbsp;сократите <br />{' '}
          время обработки заявки
        </>
      }
      onButtonClick={props.onOpenModal}
    />
  )
}
