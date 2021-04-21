import React from 'react'
import style from './Footer.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import { FooterNavs } from '../../utils/nav'
import Logo from '../Logo/Logo'

interface FooterProps {
  headingColor?: string
}

export default function Footer(props: FooterProps) {
  return (
    <div className={style.root}>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className={style.logoContainer}>
              <Link href="/" as="/">
                <a className={style.logo}>
                  <Logo light />
                </a>
              </Link>
            </div>
            <div className={style.navs}>
              {FooterNavs.map((nav) => (
                <Link href={nav.href}>
                  <a className={style.link}>{nav.title}</a>
                </Link>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className={style.column}>
              <div className={style.navs}>
                {/* <a href="mailto:sales@dbrain.io" className={style.link}>
                  hello@dbrain.io
                </a>
                <a
                  href="https://yandex.ru/maps/-/CCUYF2sFwB"
                  className={style.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Москва, ул. Б. Татарская, 35, с. 7-9
                </a> */}
              </div>

              <div className={style.navs}>
                <Link href="/privacy-policy">
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