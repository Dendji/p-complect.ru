import React from 'react'
import style from './DistributorSection.module.css'
import Heading from '../Heading/Heading'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '../Typography/Typography'
import StandardImage from '../StandardImage/StandardImage'
import Hidden from '@material-ui/core/Hidden'

interface Props {}
export default function DistributorSection(props: Props) {
  return (
    <div className={style.root}>
      <Hidden mdDown>
        <div className={style.left}>
          <StandardImage src="/images/tn.png" className={style.image} />
        </div>
      </Hidden>
      <Container>
        <Grid container justify="flex-end">
          <Grid item xs={12} md={5}>
            <Heading weight={2} className={style.heading}>
              Мы являемся дистрибьютором компании ТЕХНОНИКОЛЬ
            </Heading>
            <Hidden mdUp>
              <StandardImage src="/images/tn.png" />
            </Hidden>

            <Typography>
              Так же можем предложить материалы для внутренней отделки,
              следующих производителей: Кнауф, Юнис, Волма, Седрус, Вебер
              Ветонит и другие... За более подробной информацией, просим
              обращаться в отдел продаж по телефонам: <br />
              +7 495 970 55 05 <br />
              +7 916 825 03 03
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
