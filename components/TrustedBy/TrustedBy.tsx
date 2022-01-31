import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import style from './TrustedBy.module.css'
import Section from '../Section/Section'

const trustedByItems = [
  { path: '/images/trusted/renik.svg' },
  { path: '/images/trusted/yandex.svg' },
  { path: '/images/trusted/gosuslugi.svg' },
  { path: '/images/trusted/mig_kredit.svg' },
  { path: '/images/trusted/vsk.svg' },
  { path: '/images/trusted/rosseti.svg' },
  { path: '/images/trusted/ecredit.svg' },
  { path: '/images/trusted/nestle.svg' },
  { path: '/images/trusted/Mercedes-Benz.svg' },
  { path: '/images/trusted/idx.svg' },
  { path: '/images/trusted/carprice.svg' },
  { path: '/images/trusted/tributi.svg' },
  { path: '/images/trusted/akbars.svg' },
  { path: '/images/trusted/ligolab.svg' },
  { path: '/images/trusted/nvidia.svg' },
  { path: '/images/trusted/pari.svg' },
  { path: '/images/trusted/alor.svg' },
  { path: '/images/trusted/artsofte.svg' },
  { path: '/images/trusted/sollers.png' },
]

function chunkArray(array: any[], size: number) {
  let result = []
  for (const value of array) {
    let lastArray = result[result.length - 1]
    if (!lastArray || lastArray.length == size) {
      result.push([value])
    } else {
      lastArray.push(value)
    }
  }
  return result
}
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/material/styles/useTheme'
import CustomizedCarousel from '../Carousel/Carousel'

export default function TrustedBy() {
  const theme = useTheme()

  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const trustedByDivided = chunkArray(trustedByItems, 10)
  return (
    <Section className={style.root}>
      <Container>
        <Grid container justifyContent="center" className={style.container}>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            {matches ? (
              <CustomizedCarousel>
                {trustedByDivided.map((items, index) => (
                  <div className={style.slide} key={index}>
                    {items.map((item) => (
                      <div className={style.partner} key={item.path}>
                        <img src={item.path} alt="" className={style.img} />
                      </div>
                    ))}
                  </div>
                ))}
              </CustomizedCarousel>
            ) : (
              <div className={style.grid}>
                {trustedByItems.map((item, index) => (
                  <div className={style.partner} key={index}>
                    <img src={item.path} alt="" className={style.img} />
                  </div>
                ))}
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
