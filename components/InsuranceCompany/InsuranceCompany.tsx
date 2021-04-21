import React from 'react'
import style from './InsuranceCompany.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Heading from '../Heading/Heading'
import Section from '../Section/Section'
import BigPointList from '../BankClients/BigPointList/BigPointList'
import Hidden from '@material-ui/core/Hidden'

export default function InsuranceCompany() {
  return (
    <div className={style.root}>
      <Section dark>
        <Container>
          <Grid container>
            <Hidden smDown>
              <Grid item xs={2}></Grid>
            </Hidden>

            <Grid item xs={12} sm={8} md={8} lg={8}>
              <div>
                <div className={style.subheading}>Кейс</div>
                <Heading weight={2}>
                  Автоматизация процесса урегулирования убытков
                  в автостраховании
                </Heading>

                <div className={style.text}>
                  В отдел управления претензиями ТОП-5 страховой компании России
                  поступает комплект документов, подтверждающих страховой
                  случай:
                  <br />
                  — В комплекте до 15 документов
                  <br />
                  — Сканы и фотографии разного качества
                  <br />— В документах печатный и рукописный текст
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Hidden smDown>
              <Grid item xs="auto" sm={false} md={2} lg={2}></Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Heading weight={3} className={style.listTitle}>
                Было
              </Heading>
              <BigPointList
                color="#AAAAAA"
                items={[
                  `3 дня уходит на урегулирование убытка`,
                  `Документы сканируются и перепечатываются вручную сотрудниками компании`,
                  <>В перепечатанных данных попадаются опечатки и ошибки</>,
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Heading
                weight={3}
                className={[style.after, style.listTitle].join(' ')}
              >
                Стало
              </Heading>
              <BigPointList
                color={'#111111'}
                items={[
                  '15 минут уходит на урегулирование убытка',
                  'Документы обрабатываются автоматически',
                  'Нет ошибок и опечаток',
                  <>
                    В 2 раза сократились затраты <br /> на бэк-офис
                  </>,
                ]}
              />
            </Grid>
            <Hidden smDown>
              <Grid item xs={2}></Grid>
            </Hidden>
          </Grid>
        </Container>
      </Section>
    </div>
  )
}
