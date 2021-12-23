import React from 'react'
import style from './Footer.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import { IInit } from '../../@types/common'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

interface FooterProps {
  headingColor?: string
  init?: IInit
}

export default function Footer({ init }: FooterProps) {
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className={style.root}>
      <Container>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={style.logoContainer}>
            <Link href="/" as="/">
              {init?.logoLight ? (
                <img src={init?.logoLight} alt="" className={style.logo} />
              ) : (
                <Logo />
              )}
            </Link>
          </div>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className={style.navs}>
              {init?.categories?.map((nav, index) => (
                <Link href={`/categories/${nav.id}`} key={index}>
                  <a className={style.link}>{nav.name}</a>
                </Link>
              ))}
            </div>
          </Grid>
          {!isMobile && (
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className={style.column}>
                <div></div>
                <div className={style.navs}>
                  <Link href="/policy">
                    <a className={style.policyLink}>
                      Политика конфиденциальности
                    </a>
                  </Link>
                  <Link href="/end-user-license-agreement">
                    <a className={style.policyLink}>
                      Пользовательское соглашение
                    </a>
                  </Link>
                </div>
              </div>
            </Grid>
          )}
          <Grid item xs={12} sm={12} md={4} lg={4} container>
            <div className={style.thirdColumn}>
              <div className={style.navs}>
                {init?.footerNav?.map((nav, index) => (
                  <Link href={`${nav.href}`} key={index}>
                    <a className={style.link}>{nav.title}</a>
                  </Link>
                ))}
              </div>
              <div className={style.copyright}>
                © {new Date().getFullYear()} ПРОФКОМПЛЕКТАЦИЯ
              </div>
            </div>
          </Grid>
          {isMobile && (
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className={style.column}>
                <div></div>
                <div className={style.navs}>
                  <Link href="/policy">
                    <a className={style.policyLink}>
                      Политика конфиденциальности
                    </a>
                  </Link>
                  <Link href="/end-user-license-agreement">
                    <a className={style.policyLink}>
                      Пользовательское соглашение
                    </a>
                  </Link>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  )
}
