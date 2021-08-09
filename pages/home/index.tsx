import { NextPage } from 'next'
import Head from 'next/head'
import React, { useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Opening from '../../components/HomePage/Opening/Opening'
import UnifiedSystemSection from '../../components/UnifiedSystemSection/UnifiedSystemSection'
import style from './index.module.css'
import CallToAction from '../../components/CallToAction/CallToAction'
import ComplexAutomationSection from '../../components/ComplexAutomationSection/ComplexAutomationSection'

interface PageProps {}

const Home: NextPage<PageProps> = (props: PageProps) => {
  const router = useRouter()

  useLayoutEffect(() => {
    // scroll to element with id on page (#form for example)
    const hash = router.asPath.split('#').slice(-1)[0]
    if (hash) {
      const form = document.getElementById(hash)
      form && form.scrollIntoView({ block: 'end' })
    }
    return () => {}
  }, [])

  const dispatch = useDispatch()

  const openContactUs = () => {
    dispatch({
      type: 'OPEN_CONTACT_US',
    })
  }

  return (
    <>
      <Head>
        <title>ПрофКомплектация – строительные материалы</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content=""
        />
      </Head>
      <div className="home">
        <Opening onRequestDemo={openContactUs} />
        <UnifiedSystemSection />
        <ComplexAutomationSection />
        <CallToAction className={style.form} />
      </div>
    </>
  )
}

type Data = {}

export const getServerSideProps = async () => {
  const res = await fetch(
    'http://wp-api.testing.monster/wp-json/api/v1/categories'
  )
  const data: Data = await res.json()
  console.log(
    '🚀 ~ file: index.tsx ~ line 62 ~ getServerSideProps ~ data',
    data
  )

  return {
    props: {
      data,
    },
  }
}

export default Home
