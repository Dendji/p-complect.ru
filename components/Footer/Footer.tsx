import React from 'react'
import style from './Footer.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import { FooterNavs } from '../../utils/nav'
import Logo from '../Logo/Logo'
import { IInit } from '../../@types/common'

interface FooterProps {
  headingColor?: string
  init?: IInit
}

export default function Footer({ init }: FooterProps) {
  return (
    <div className={style.root}>
      <Container>
        <Grid container justify="center">
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
            <div className={style.navs}>
              {init?.categories?.map((nav, index) => (
                <Link href={`/categories/${nav.id}`} key={index}>
                  <a className={style.link}>{nav.name}</a>
                </Link>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className={style.column}>
              <div className={style.navs}></div>

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
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            container
            alignItems="flex-end"
            justify="flex-end"
          >
            <div className={style.copyright}>
              © {new Date().getFullYear()} AVX COLLECTION LTD
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
