import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Heading from '../../components/Heading/Heading'
import Section from '../../components/Section/Section'
import ClientCard from '../../components/ClientCard/ClientCard'
import Objects from '../../components/Objects/Objects'
import Shipping from '../../components/Shipping/Shipping'

interface PageProps {}

const objects = [
  {
    icon: '/images/ship1.png',
    heading: 'Оплата',
    content: (
      <>
        <p className="orange">
          Оплата товара осуществляется только в рублях по безналичному расчету.
        </p>
        <p>
          Основанием для оплаты товара является счет на оплату, выставленный по
          Вашему заказу. Фактом оплаты считается поступление денежных средств на
          наш расчетный счет.
        </p>
        <p>
          Реквизиты для оплаты <br />
          Карточка предприятия ООО «ПРОФКОМПЛЕКТАЦИЯ»:
          <br />
          ИНН 5027269223 <br />
          БИК 044525999 <br />
          КПП 502701001 <br />
          Р/с 40702810801500026203 <br />
          Банк Филиал Точка ПАО Банка «Финансовая Корпорация Открытие»
        </p>
      </>
    ),
  },
  {
    icon: '/images/ship2.png',
    heading: 'Доставка',
    content: (
      <>
        <p>
          ООО «ПРОФКОМПЛЕКТАЦИЯ» осуществляет прямые поставки продукции с
          заводов-производителей, а также со складских комплексов в Москве и
          Московской области.
        </p>
        <p className="orange">
          Мы предлагаем своим клиентам выбрать наиболее удобный способ получения
          товара:
        </p>
        <p>
          Возможны как прямые поставки материалов автомобилями большой
          грузоподъемности, так и поставки сборных грузов более удобными для Вас
          видами автотранспорта. Стоимость услуги доставки зависит от веса
          заказа, его объема, адреса доставки и выбранной опции разгрузки товара
          по указанному адресу. Разгрузочная площадка должна быть ровной и иметь
          размеры, обеспечивающие свободу подъезда, разгрузки, разворота
          автомобиля при выгрузке.
        </p>
      </>
    ),
  },
  {
    icon: '/images/ship3.png',
    heading: 'Самовывоз',
    content: (
      <>
        <p>
          Самостоятельно забрать товар с одного из складских комплексов можно на
          следующий день после оплаты, предварительно согласовав со своим
          менеджером время загрузки.
        </p>
        <p className="orange">
          Для получения товара необходима доверенность от юридического лица на
          получателя.
        </p>
        <p>
          Доставка по Регионам России предусматривает: доставку груза
          автомобильным и железнодорожным транспортом.
        </p>
      </>
    ),
  },
]

const ShippingAndPayments: NextPage<PageProps> = ({}: PageProps) => {
  return (
    <>
      <Head>
        <title>Доставка и оплата</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content="Доставка и оплата"
        />
      </Head>

      <Shipping items={objects} />
    </>
  )
}

export default ShippingAndPayments