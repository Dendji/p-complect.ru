import style from './Header.module.css'
import Link from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { useVisibility } from '../../utils/utils'
import Slide from '@material-ui/core/Slide'
import classnames from 'classnames'
import Container from '@material-ui/core/Container'
import TextInput from '../TextInput/TextInput'
import RLink from '../RLink/RLink'
import PinIcon from '../PinIcon/PinIcon'
import CallButton from '../CallButton/CallButton'
import Logo from '../Logo/Logo'
import CatalogButton from '../CatalogButton/CatalogButton'
import { Navs } from '../../utils/nav'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Fade, useTheme } from '@material-ui/core'
import Hamburger from '../Hamburger/Hamburger'
import { CatalogNavs } from '../../utils/catalog'
import AddressWidget from '../AddressWidget/AddressWidget'
import HoursWidget from '../HoursWidget/HoursWidget'
import CallWidget from '../CallWidget/CallWidget'

export interface HeaderProps {
  isNavigation: boolean
  onToggleNavigation: () => void
  onModalCall: () => void
}

export default function Header(props: HeaderProps) {
  const [sticky, setSticky] = useState(false)
  const [isCatalog, setCatalog] = useState(false)

  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const callback = (isIntersecting: boolean) => {
    setSticky(!isIntersecting)
  }

  const headerRef = useRef(null)
  useVisibility(headerRef, callback)

  const router: NextRouter = useRouter()

  const { isNavigation, onToggleNavigation } = props
  console.log(
    '🚀 ~ file: Header.tsx ~ line 66 ~ renderSecondHeader ~ router.pathname',
    router.pathname
  )

  const renderSecondHeader = () => {
    return (
      <section>
        <Container>
          {isMobile ? (
            <div></div>
          ) : (
            <div className={style.headerBottom}>
              <CatalogButton
                buttonProps={{ onClick: () => setCatalog(!isCatalog) }}
                isOpen={isCatalog}
                navs={CatalogNavs}
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
            </div>
          )}
        </Container>
      </section>
    )
  }

  const renderMobileHeader = () => (
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
              />
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
