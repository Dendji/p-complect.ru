import style from './Header.module.css'
import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { fetcher, useVisibility } from '../../utils/utils'
import Slide from '@material-ui/core/Slide'
import classnames from 'classnames'
import Container from '@material-ui/core/Container'
import TextInput from '../TextInput/TextInput'
import Logo from '../Logo/Logo'
import CatalogButton from '../CatalogButton/CatalogButton'
import { Navs } from '../../utils/nav'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core'
import Hamburger from '../Hamburger/Hamburger'
import { CatalogNavs } from '../../utils/catalog'
import AddressWidget from '../AddressWidget/AddressWidget'
import HoursWidget from '../HoursWidget/HoursWidget'
import CallWidget from '../CallWidget/CallWidget'
import useSWR from 'swr'
import SearchIcon from '../SearchIcon/SearchIcon'
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from 'react-speech-recognition'

export interface HeaderProps {
  isNavigation: boolean
  onSearch: () => void
  onToggleNavigation: () => void
  onModalCall: () => void
}

export interface Category {
  id: number
  name: string
  meta: { title: string; description: string }
  svg?: string
  subcategories: Category[]
}

export default function Header(props: HeaderProps) {
  const [sticky, setSticky] = useState(false)
  const [isCatalog, setCatalog] = useState(false)

  const { data: categories, error } = useSWR<Category[]>(
    'http://wp-api.testing.monster/wp-json/api/v1/categories',
    fetcher
  )

  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const callback = (isIntersecting: boolean) => {
    setSticky(!isIntersecting)
  }
  // const { transcript, listening, resetTranscript } = useSpeechRecognition()

  const headerRef = useRef(null)
  const searchRef = useRef(null)
  useVisibility(headerRef, callback)

  const handleFocus = () => {
    ;(document.activeElement as HTMLElement).blur()

    props.onSearch()
  }

  const router: NextRouter = useRouter()

  const { isNavigation, onToggleNavigation } = props

  const renderSecondHeader = () => {
    return (
      <Container>
        <div className={style.headerBottom}>
          {isMobile ? (
            <div className={style.controls}>
              {/* <TextInput
                name="phone"
                type="search"
                placeholder="Что вы ищете?"
                autoComplete="no"
                onFocus={handleFocus}
                ref={searchRef}
                // value={transcript}
              /> */}

              <CatalogButton
                buttonProps={{ onClick: () => setCatalog(!isCatalog) }}
                isOpen={isCatalog}
                navs={
                  categories?.map((c) => ({
                    text: c.name,
                    icon: c.svg ? (
                      <div dangerouslySetInnerHTML={{ __html: c.svg }}></div>
                    ) : null,
                    url: `/categories/${c.id}`,
                  })) || []
                }
                isMobile={isMobile}
              />
              <button className={style.searchButton} onClick={props.onSearch}>
                <SearchIcon />
              </button>
            </div>
          ) : (
            <>
              <CatalogButton
                buttonProps={{ onClick: () => setCatalog(!isCatalog) }}
                isOpen={isCatalog}
                navs={
                  categories?.map((c) => ({
                    text: c.name,
                    icon: c.svg ? (
                      <div dangerouslySetInnerHTML={{ __html: c.svg }}></div>
                    ) : null,

                    url: `/categories/${c.id}`,
                  })) || []
                }
              />
              <nav className={style.nav}>
                {Navs.map((nav, index) => (
                  <Link href={nav.href} key={nav.href + index}>
                    <a
                      className={[
                        style.link,
                        ...(router.pathname === nav.href
                          ? [style.activeLink]
                          : []),
                      ].join(' ')}
                    >
                      {nav.title}
                    </a>
                  </Link>
                ))}
              </nav>
            </>
          )}
        </div>
      </Container>
    )
  }

  const renderMobileHeader = () => (
    <>
      <Container>
        <div className={style.mobile}>
          <Link href="/" as="/">
            <a className={style.logo}>
              <Logo />
            </a>
          </Link>
          <Hamburger
            isOpen={isNavigation}
            onClick={onToggleNavigation}
            isLight={false}
          />
        </div>
      </Container>
    </>
  )

  const renderHeader = (sticky: boolean) => (
    <header
      className={classnames(style.header, {
        [style.sticky]: sticky,
        [style.navigationOpen]: isNavigation,
      })}
    >
      <Container>
        {isMobile ? (
          renderMobileHeader()
        ) : (
          <div className={style.grid}>
            <div>
              <Link href="/" as="/">
                <a className={style.logo}>
                  <Logo />
                </a>
              </Link>
            </div>
            <div>
              <TextInput
                name="phone"
                type="search"
                placeholder="Что вы ищете?"
                autoComplete="no"
                onFocus={handleFocus}
                ref={searchRef}
                // value={transcript}
              />
              {/* <div>
                <p>Microphone: {listening ? 'on' : 'off'}</p>
                <button onClick={() => SpeechRecognition.startListening()}>
                  Start
                </button>
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Reset</button>
              </div> */}
            </div>
            <HoursWidget />
            <AddressWidget />
            <CallWidget />
          </div>
        )}
      </Container>
    </header>
  )

  const renderStaticHeader = () => renderHeader(false)
  const renderstickyHeader = () => renderHeader(true)

  return (
    <div className={style.headerContainer} ref={headerRef}>
      {isMobile ? renderMobileHeader() : renderStaticHeader()}
      <Slide in={sticky} mountOnEnter unmountOnExit>
        {renderstickyHeader()}
      </Slide>
      {renderSecondHeader()}
    </div>
  )
}
