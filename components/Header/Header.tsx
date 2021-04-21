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
import { useTheme } from '@material-ui/core'
import Hamburger from '../Hamburger/Hamburger'

export interface HeaderProps {
  isNavigation: boolean
  onToggleNavigation: () => void
  onModalCall: () => void
}

export default function Header(props: HeaderProps) {
  const [isFixed, setFixed] = useState(false)
  const [isCatalog, setCatalog] = useState(false)

  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const callback = (isIntersecting: boolean) => {
    setFixed(!isIntersecting)
  }

  const ref = useRef(null)
  useVisibility(ref, callback)

  const router: NextRouter = useRouter()

  const { isNavigation, onToggleNavigation } = props

  const renderHeader = (fixed: boolean) => (
    <header>
      <section
        className={classnames(style.header, {
          [style.fixed]: fixed,
          [style.navigationOpen]: isNavigation,
        })}
      >
        <Container>
          {isMobile ? (
            <div className={style.mobile}>
              <Link href="/" as="/">
                <a className={style.logo}>
                  <Logo />
                </a>
              </Link>
              <Hamburger
                isOpen={isNavigation}
                onClick={onToggleNavigation}
                isLight={!isFixed || isNavigation}
              />
            </div>
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
              <div className={style.hours}>
                <div className={style.hoursTitle}>Время работы</div>
                <div>
                  <span>пн-чт</span>
                  <strong>9:00 – 18:00</strong>
                </div>
                <div>
                  <span>пт</span>
                  <strong>9:00 – 17:00</strong>
                </div>
              </div>
              <div className={style.address}>
                <PinIcon />
                <RLink
                  href="https://yandex.ru/maps/-/CCUYJ0wDPB"
                  className={style.addressLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Московская обл.,
                  <br /> г. Люберцы, ул. Кирова, д. 20А
                </RLink>
              </div>
              <div className={style.call}>
                <div>
                  <div>
                    <RLink href="tel: +7 495 970 55 05" className={style.tel}>
                      +7 495 970 55 05
                    </RLink>
                  </div>
                  <div>
                    <RLink href="tel: +7 916 825 03 03" className={style.tel}>
                      +7 916 825 03 03
                    </RLink>
                  </div>
                </div>
                <div>
                  <CallButton />
                </div>
              </div>
            </div>
          )}
          {/* <nav className={style.nav}>
                {Navs.filter((nav) => nav.href !== '/').map((nav, index) =>
                  !nav.submenu ? (
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
                  ) : (
                    <DropdownLink
                      link={nav.title}
                      // dark={!isLight}
                      popupClassName={style.dropdownPopup}
                      className={classnames(style.link, style.linkDropdown)}
                      key={nav.href + index}
                    >
                      <div className={style.dropdownNav}>
                        {nav.submenu.map((nav, idx) => (
                          <Link href={nav.href} key={index + '0000' + idx}>
                            <a className={style.dropdownA}>{nav.title}</a>
                          </Link>
                        ))}
                      </div>
                    </DropdownLink>
                  )
                )}
              </nav> */}

          {/* <Grid item xs={6} sm={9} md={2} lg={2}>
            <div className={style.contactUs}>
              <Button
                onClick={props.onModalCall}
                size={AlphabetSize.M}
                theme={!fixed ? ButtonTheme.White : ButtonTheme.Blue}
              >
                Связаться
              </Button>
            </div>
          </Grid> */}
          {/* <Hidden mdUp>
            <Grid item xs={2} sm={1} md={2} lg={2} container justify="flex-end">
              <Hamburger
                isOpen={isNavigation}
                onClick={onToggleNavigation}
                isLight={!isFixed || isNavigation}
              />
            </Grid>
          </Hidden> */}
        </Container>
      </section>
      <section>
        <Container>
          {isMobile ? (
            <div></div>
          ) : (
            <div className={style.headerBottom}>
              <CatalogButton
                buttonProps={{ onClick: () => setCatalog(!isCatalog) }}
                isOpen={isCatalog}
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
    </header>
  )

  const renderStaticHeader = () => renderHeader(false)
  const renderFixedHeader = () => renderHeader(true)

  return (
    <div className={style.headerContainer} ref={ref}>
      {renderStaticHeader()}
      <Slide direction="down" in={isFixed} mountOnEnter unmountOnExit>
        {renderFixedHeader()}
      </Slide>
    </div>
  )
}
