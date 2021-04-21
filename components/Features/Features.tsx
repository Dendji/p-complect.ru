import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IntegrateFast from './PassportToApi/PassportToApi'
import style from './Features.module.css'
import Heading from '../Heading/Heading'
import SimpleText from '../SimpleText/SimpleText'
import Section from '../Section/Section'
import SuperhumanAccuracy from '../SVGs/SuperhumanAccuracy/SuperhumanAccuracy'
import TrainingForAnyQuality from '../SVGs/TraningForAnyQuality/TrainingForAnyQuality'

export default function Features() {
  return (
    <Section className={style.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={4} className={style.column}>
            <Hidden mdUp>
              <Heading weight={3}>Точность выше, чем у человека</Heading>
            </Hidden>
            <div className={style.image}>
              <SuperhumanAccuracy />
            </div>
            <Hidden mdDown>
              <Heading weight={3}>
                Точность выше,
                <br /> чем у человека
              </Heading>
            </Hidden>
            <SimpleText>
              Пока ИИ уступает человеку в способностях и допускает ошибки. Мы
              объединили работу ИИ и людей — квалифицированные разметчики
              исправляют неточности, допущенные машиной
            </SimpleText>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} className={style.column}>
            <Hidden mdUp>
              <Heading weight={3}>Обучение под любой документ</Heading>
            </Hidden>
            <div className={style.image}>
              <TrainingForAnyQuality />
            </div>
            <Hidden mdDown>
              <Heading weight={3}>
                Обучение под <br />
                любой документ
              </Heading>{' '}
            </Hidden>
            <SimpleText>
              Никакой долгой шаблонной настройки под разные документы. Система
              самообучается в&nbsp;процессе. Чем больше документов — тем лучше
              результат на&nbsp;выходе
            </SimpleText>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} className={style.column}>
            <Hidden mdUp>
              <Heading weight={3}>Быстрая API-интеграция</Heading>
            </Hidden>
            <div className={[style.image, style.integrateFast].join(' ')}>
              <IntegrateFast />
            </div>
            <Hidden mdDown>
              <Heading weight={3}>
                Быстрая <br /> API-интеграция
              </Heading>
            </Hidden>
            <SimpleText>
              Dbrain подключается через простой и&nbsp;понятный API к любой
              корпоративной системе
            </SimpleText>
          </Grid>
        </Grid>
      </Container>{' '}
    </Section>
  )
}
