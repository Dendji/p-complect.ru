import { NextPage } from 'next'
import Head from 'next/head'
import React, { useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Opening from '../../components/HomePage/Opening/Opening'
import HomeCaseSection from '../../components/HomeCaseSection/HomeCaseSection'
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
          content="Dbrain ✅ позволяет распознавать паспорт РФ (и дргуих стран), водительские права, СТС и другие документы. Безопасное распознавание документов без передачи персональных данных. Автоматизируйте обработку документов"
        />
      </Head>
      <div className="home">
        <Opening onRequestDemo={openContactUs} />
        <HomeCaseSection />
        <UnifiedSystemSection />
        <ComplexAutomationSection />
        <CallToAction className={style.form} />
      </div>
    </>
  )
}

export default Home
