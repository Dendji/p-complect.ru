import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '../../components/Typography/Typography'
import Section from '../../components/Section/Section'
import Button, { ButtonSize, ButtonTheme } from '../../components/Button/Button'
import Layout from '../../components/Layout/Layout'
import { API_HOST } from '../../utils/const'
import { IInit } from '../../@types/common'

interface PageProps {
  init: IInit
}

const Price: NextPage<PageProps> = ({ init }: PageProps) => {
  return (
    <Layout init={init}>
      <Head>
        <title>Прайс-лист на строительные материалы ПРОФКОМПЛЕКТАЦИЯ</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content="Прайс-лист на строительные материалы ПРОФКОМПОЛЕКТАЦИЯ"
        />
      </Head>
      <Section>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6} md={5}>
              <div className={style.grid}>
                <svg
                  width="159"
                  height="160"
                  viewBox="0 0 159 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M118.374 69.3L118.454 39.192C118.456 38.3302 118.025 37.533 117.413 36.9017L80.7298 1.37382C80.0452 0.709566 79.0702 0.342051 78.0956 0.339889L19.7862 0.210552C9.02142 0.186675 0.401433 8.22473 0.375164 18.1062L0.106138 119.306C0.0798698 129.187 8.65737 137.131 19.4221 137.155L65.4486 137.257C74.1191 150.539 89.9199 159.461 107.946 159.501C135.33 159.561 157.747 139.185 157.814 114.019C157.909 92.0347 140.761 73.627 118.374 69.3ZM81.6776 11.9869L106.288 35.8817L90.2842 35.8462C85.5154 35.8356 81.6238 32.2135 81.6355 27.8366L81.6776 11.9869ZM19.4397 130.523C12.6847 130.508 7.31552 125.522 7.332 119.322L7.60103 18.1222C7.6176 11.8882 13.0135 6.82771 19.7685 6.84269L74.465 6.96401L74.4096 27.8205C74.3882 35.8777 81.4881 42.4588 90.2666 42.4783L111.219 42.5248L111.151 68.4209C110.068 68.3858 109.2 68.2843 108.261 68.2822C95.6532 68.2543 84.0448 72.6722 75.2836 79.6163L29.4025 79.5146C27.4149 79.5102 25.7856 80.9983 25.7808 82.8214C25.7759 84.6457 27.3972 86.1411 29.3849 86.1455L68.5466 86.2324C65.9722 89.5427 63.8316 92.8541 62.1609 96.4978L29.3576 96.4251C27.3699 96.4207 25.7407 97.9088 25.7358 99.7331C25.731 101.556 27.3523 103.053 29.3399 103.057L59.7946 103.125C58.8826 106.439 58.4033 110.118 58.3935 113.798C58.3777 119.766 59.6262 125.672 61.8889 130.651L19.4396 130.557L19.4397 130.523ZM108.001 152.903C84.5907 152.851 65.5979 135.334 65.655 113.847C65.7121 92.3606 84.7609 74.9278 108.208 74.9798C131.654 75.0318 150.609 92.5489 150.552 114.035C150.495 135.522 131.411 152.955 108.001 152.903Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M29.6227 69.0302L65.0022 69.1087C66.9238 69.113 68.4989 67.6646 68.5036 65.8916C68.5084 64.1174 66.941 62.6632 65.0194 62.659L29.6398 62.5805C27.7182 62.5762 26.1431 64.0235 26.1384 65.7976C26.1337 67.5706 27.7011 69.026 29.6227 69.0302Z"
                    fill="#E0E0E0"
                  />
                  <path
                    d="M128.069 113.596L113.215 128.348L113.312 91.9029C113.316 90.0667 111.697 88.5616 109.715 88.5572C107.732 88.5528 106.106 90.0507 106.102 91.8869L106.005 128.332L91.1199 113.514C89.7538 112.176 87.4475 112.071 86.0019 113.336C84.5562 114.601 84.4424 116.703 85.8099 118.042L106.842 139.081C107.525 139.75 108.461 140.153 109.47 140.155C110.48 140.157 111.417 139.758 112.104 139.093L133.285 118.147C134.658 116.815 134.591 114.679 133.152 113.441C131.677 112.169 129.443 112.265 128.069 113.596Z"
                    fill="#E0E0E0"
                  />
                </svg>
                <div className="controls">
                  <Typography>
                    Здесь вы можете скачать прайс-лист всех товаров
                  </Typography>
                  <a
                    href="http://www.africau.edu/images/default/sample.pdf"
                    target="_blank"
                  >
                    <Button theme={ButtonTheme.Orange} size={ButtonSize.L}>
                      Cкачать
                    </Button>
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async function ({
  params,
}) {
  if (!params?.product_id) {
    throw new Error('id is not defined')
  }

  const [res, initRes] = await Promise.all([
    fetch(`${API_HOST}/init`),
    fetch(`${API_HOST}/init`),
  ])

  const data = await res.json()
  const init = await initRes.json()

  return {
    props: {
      data,
      init,
    },
  }
}

export default Price
