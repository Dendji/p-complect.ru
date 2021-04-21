import React from 'react'
import style from './HomeCaseSection.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../Section/Section'
import Button, { ButtonTheme } from '../Button/Button'
import { AlphabetSize } from '../../@types/common'
import StandardImage from '../StandardImage/StandardImage'

export default function HomeCaseSection() {
  const goToCases = () => {}
  return (
    <Section className={style.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className={style.quote}>
              <svg
                width="96"
                height="72"
                viewBox="0 0 96 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 0C10.7452 0 0 10.7451 0 24C0 35.8289 8.5574 45.6588 19.8192 47.6371L4.58582 62.8705L11.6569 69.9415L38.3864 43.2119C44.2235 38.834 48 31.858 48 24C48 10.7451 37.2548 0 24 0Z"
                  fill="#111111"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M72 0C58.7452 0 48 10.7452 48 24C48 35.8287 56.5574 45.6588 67.8191 47.6371L52.5858 62.8704L59.6569 69.9415L86.3865 43.2119C92.2235 38.8339 96 31.858 96 24C96 10.7452 85.2548 2.87532e-06 72 0Z"
                  fill="#111111"
                />
              </svg>
            </div>
            <div className={style.text}>
              Раньше сотрудники тратили на обработку документов и заполнение
              анкеты 16 минут, сейчас весь этот цикл занимает 5 минут. Здесь
              большая заслуга Dbrain — мы очень довольны тем, как у нас работает
              решение
            </div>
            <div className={style.person}>
              <div className={style.img}>
                <StandardImage src="/images/larin.png" />
              </div>
              <div className={style.name}>
                <div>
                  <strong>Кирилл Ларин</strong>
                </div>
                <div className={style.position}>
                  Генеральный директор «еКредит»
                </div>
              </div>
            </div>
            <Button
              onClick={goToCases}
              theme={ButtonTheme.Blue}
              size={AlphabetSize.L}
            >
              Читать кейс
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
