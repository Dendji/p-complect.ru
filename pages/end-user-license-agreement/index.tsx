import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import { Container, Grid, useMediaQuery } from '@material-ui/core'
import Button, { ButtonTheme } from '../../components/Button/Button'
import Heading from '../../components/Heading/Heading'
import { AlphabetSize } from '../../@types/common'
import { useRouter } from 'next/router'
import { useTheme } from '@material-ui/core/styles'

interface PageProps {}

const EndUserLicenseAgreement: NextPage<PageProps> = (props: PageProps) => {
  const router = useRouter()
  const theme = useTheme()

  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const renderButtons = () => (
    <div className={style.buttons}>
      <a
        href="/end-user-license-agreement.pdf"
        target="_blank"
        className={style.download}
      >
        <Button theme={ButtonTheme.Blue} size={AlphabetSize.L}>
          Скачать
        </Button>
      </a>
      <Button
        theme={ButtonTheme.Blue}
        size={AlphabetSize.L}
        onClick={() => router.back()}
      >
        Назад
      </Button>
    </div>
  )
  return (
    <div className={style.root}>
      <Head>
        <title>Dbrain – Пользовательское соглашение</title>
      </Head>
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <Heading weight={2} className={style.heading}>
              Пользовательское соглашение
            </Heading>
            {matches ? (
              renderButtons()
            ) : (
              <div className={style.wrapper}>
                <object
                  data="/end-user-license-agreement.pdf"
                  type="application/pdf"
                  className={style.pdf}
                >
                  {renderButtons()}
                  <embed
                    src="/end-user-license-agreement.pdf"
                    type="application/pdf"
                  />
                </object>
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default EndUserLicenseAgreement
