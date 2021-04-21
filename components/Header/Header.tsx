import style from './Header.module.css'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Button, { ButtonTheme } from '../Button/Button'
import { AlphabetSize } from '../../@types/common'
import Link from 'next/link'
import Hamburger from '../Hamburger/Hamburger'
import DbrainLogo from '../SVGs/DbrainLogo/DbrainLogo'
import { useRouter, NextRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { useVisibility } from '../../utils/utils'
import Slide from '@material-ui/core/Slide'
import DropdownLink from '../DropdownLink/DropdownLink'
import classnames from 'classnames'
import Container from '@material-ui/core/Container'
import { Navs } from '../../utils/nav'

export interface HeaderProps {
  isNavigation: boolean
  onToggleNavigation: () => void
  onModalCall: () => void
}

export default function Header(props: HeaderProps) {
  const [isFixed, setFixed] = useState(false)

  const callback = (isIntersecting: boolean) => {
    setFixed(!isIntersecting)
  }

  const ref = useRef(null)
  useVisibility(ref, callback)

  const router: NextRouter = useRouter()

  const { isNavigation, onToggleNavigation, isLight } = props

  const classNames = [style.header]

  const renderHeader = (fixed: boolean) => (
    <section
      className={[
        classNames,
        ...[fixed ? style.fixed : []],
        ...[isLight ? style.light : []],
        ...[isNavigation ? style.navigationOpen : []],
      ].join(' ')}
    >
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={4} sm={2} md={2} lg={2}>
            <Link href="/" as="/">
              <a className={style.logo}>
                <DbrainLogo light={(isLight && !fixed) || isNavigation} />
              </a>
            </Link>
          </Grid>
          <Hidden smDown>
            <Grid item xs="auto" sm={6} md={8} lg={8}>
              <nav className={style.nav}>
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
                      dark={!isLight}
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
              </nav>
            </Grid>
          </Hidden>
          <Grid item xs={6} sm={9} md={2} lg={2}>
            <div className={style.contactUs}>
              <Button
                onClick={props.onModalCall}
                size={AlphabetSize.M}
                theme={isLight && !fixed ? ButtonTheme.White : ButtonTheme.Blue}
              >
                Связаться
              </Button>
            </div>
          </Grid>
          <Hidden mdUp>
            <Grid item xs={2} sm={1} md={2} lg={2} container justify="flex-end">
              <Hamburger
                isOpen={isNavigation}
                onClick={onToggleNavigation}
                isLight={(isLight && !isFixed) || isNavigation}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </section>
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
