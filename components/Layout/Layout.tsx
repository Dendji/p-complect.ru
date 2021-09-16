import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import style from './Layout.module.css'
import { useRouter } from 'next/router'
import ContactUs from '../ContactUs/ContactUs'
import Navigation from '../Navigation/Navigation'
import { Navs } from '../../utils/nav'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import { SearchScreen } from '../SearchScreen/SearchScreen'
import SuccessPopup from '../SuccessPopup/SuccessPopup'
import ErrorPopup from '../ErrorPopup/ErrorPopup'
import { IInit } from '../../@types/common'

export interface LayoutProps {
  init?: IInit
  children: React.ReactNode
}

export default function Layout({ children, init }: LayoutProps) {
  const router = useRouter()

  useEffect(() => {
    // if location includes /#ask-for-demo then open contact us form
    if (router.asPath.split('#').slice(-1)[0] === 'ask-for-demo') {
      openContactUs()
    }
  }, [])

  const dispatch = useDispatch()
  const isContactUs = useSelector((state: AppState) => state.isContactUs)
  const isFormSucceeded = useSelector(
    (state: AppState) => state.isFormSucceeded
  )
  const isFormFailed = useSelector((state: AppState) => state.isFormFailed)
  const isNavigation = useSelector((state: AppState) => state.isNavigation)

  const [isSearch, setSearch] = useState(false)

  const closeContactUs = () => {
    dispatch({
      type: 'CLOSE_CONTACT_US',
    })
  }

  const openContactUs = () => {
    dispatch({
      type: 'OPEN_CONTACT_US',
    })
  }

  const openNavigation = () => {
    dispatch({
      type: 'OPEN_NAVIGATION',
    })
  }

  const closeNavigation = () => {
    dispatch({
      type: 'CLOSE_NAVIGATION',
    })
  }
  const onErrorClose = () => {
    dispatch({
      type: 'SET_FORM_ERROR',
      payload: false,
    })
  }

  const onSuccessClose = () => {
    dispatch({
      type: 'SET_FORM_SUCCESS',
      payload: false,
    })
  }

  const isHeaderHidden = isContactUs

  const handleSubmit = () => {
    setTimeout(() => closeContactUs(), 2000)
  }

  if (router && router.events) {
    router.events.on('routeChangeComplete', (url: string) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      setSearch(false)
      closeNavigation()
      closeContactUs()
    })
  }

  const handleToggleNavigation = () => {
    isNavigation ? closeNavigation() : openNavigation()
  }

  // const theme = useTheme()

  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const getFooterFontColorByRoute = (route: string) => {
    switch (route) {
      default:
        return '#C60C31'
    }
  }

  return (
    <div className={style.root}>
      <Head>
        <title>
          API для распознавание документов. Распознавание паспорта,
          водительского удостоверения и других. Автоматизация документооборота.
        </title>
        <meta
          name="viewport"
          key="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <meta key="og:image" name="og:image" content={'/images/og-image.jpg'} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ПрофКомплектация" />
        <meta property="og:title" content="ПрофКомплектация" />
        <meta property="og:description" content="Строительные материалы" />
        <meta
          property="description"
          name="Description"
          key="description"
          content="АСтроительные материалы"
        />
        <meta
          name="Keywords"
          property="keywords"
          key="keywords"
          content="Строительные материалы"
        />
      </Head>
      <Navigation isOpen={isNavigation} onClose={closeNavigation} navs={Navs} />
      <ContactUs
        isOpen={isContactUs}
        onClose={closeContactUs}
        onSubmit={handleSubmit}
      />
      <SuccessPopup isOpen={isFormSucceeded} onClose={onSuccessClose} />
      <ErrorPopup isOpen={isFormFailed} onClose={onErrorClose} />

      {isHeaderHidden ? null : (
        <Header
          init={init}
          onModalCall={openContactUs}
          isNavigation={isNavigation}
          onToggleNavigation={handleToggleNavigation}
          onSearch={() => setSearch(true)}
        />
      )}
      <SearchScreen isModal={isSearch} onClose={() => setSearch(false)} />
      {children}
      <Footer headingColor={getFooterFontColorByRoute(router.route)} />
    </div>
  )
}
