import React from 'react'
import style from './Opening.module.css'
import Heading from '../../Heading/Heading'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button, { ButtonTheme } from '../../Button/Button'
import { AlphabetSize } from '../../../@types/common'
import StandardImage from '../../StandardImage/StandardImage'

interface Props {
  onRequestDemo: () => void
}

export default function Opening({ onRequestDemo }: Props) {
  return (
    <div className={style.root}>
      <Container>
        <Grid container>
          <Grid xs={12} md={6}>
            <Heading weight={1} className={style.heading} size="large">
              Распознавание документов
            </Heading>
            <Heading weight={2}>
              <span className={style.subheading}>
                Превращаем документы в цифровые данные с помощью исукусственного
                интеллекта и людей
              </span>
            </Heading>
            <Button
              onClick={onRequestDemo}
              theme={ButtonTheme.Blue}
              size={AlphabetSize.L}
            >
              Попробовать демо
            </Button>
          </Grid>
          <Grid xs={12} md={6}>
            <StandardImage src="/images/passport.png" />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
