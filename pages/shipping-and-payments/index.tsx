import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import Shipping from '../../components/Shipping/Shipping'

interface PageProps {
  data: {
    title: string
    items: {
      title: string
      icon: string
      content: string
    }[]
  }
}

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
        <p>
          Доставка по Регионам России предусматривает: доставку груза
          автомобильным и железнодорожным транспортом.
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
      </>
    ),
  },
]

const ShippingAndPayments: NextPage<PageProps> = ({
  data: { title, items },
}: PageProps) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content={title}
        />
      </Head>
      <Shipping items={items} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({}) {
  const res = await fetch(
    'https://wp-api.testing.monster/wp-json/api/v1/pages/shipping-and-payments'
  )

  const data = await res.json()
  console.log('🚀 ~ file: index.tsx ~ line 119 ~ data', data)

  return {
    props: {
      data,
    },
  }
}

export default ShippingAndPayments
