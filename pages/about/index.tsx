import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import style from './index.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Heading from '../../components/Heading/Heading'
import Typography, {
  TypographyTheme,
} from '../../components/Typography/Typography'
import Section from '../../components/Section/Section'
import StandardImage from '../../components/StandardImage/StandardImage'
import Button, { ButtonTheme } from '../../components/Button/Button'
import GithubIcon from '../../components/GithubIcon/GithubIcon'
import { AlphabetSize } from '../../@types/common'
import { useDispatch } from 'react-redux'

interface PageProps {}

const About: NextPage<PageProps> = ({}: PageProps) => {
  const dispatch = useDispatch()

  const openContactUs = () => {
    dispatch({
      type: 'OPEN_CONTACT_US',
    })
  }

  return (
    <div className={style.root}>
      <Head>
        <title>Мы — Dbrain</title>
        <meta
          property="description"
          name="Description"
          key="description"
          content="Dbrain ✅ позволяет распознать документы любого качества. ⭐ Безопасное распознавание документов без передачи персональных данных. ✅ Автоматизируйте обработку документов"
        />
      </Head>

      <Section dark className={style.intro}>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <Heading weight={1}>Мы — Dbrain</Heading>
              <Typography size={24} mb={72}>
                Мы&nbsp;извлекаем данные из&nbsp;документов через API. Благодаря
                совместной работе&nbsp;ИИ и&nbsp;людей мы&nbsp;обеспечиваем
                высокое качество распознавания, ускоряем бизнес-процессы клиента
                и&nbsp;закрываем даже самые сложные задачи.
              </Typography>
              <StandardImage src="/images/team_zoom.jpg"></StandardImage>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <Heading weight={2} noMt>
                Наша миссия
              </Heading>
              <Typography size={24} mb={48}>
                Первый шаг в&nbsp;автоматизации процессов&nbsp;&mdash; это
                данные. Ни&nbsp;одна система не&nbsp;сможет работать, пока все
                данные не&nbsp;будут переведены в&nbsp;электронный вид. Поэтому
                мы&nbsp;создали набор сервисов, который переводит все документы
                в&nbsp;цифровые данные. Это помогает банкам, страховым,
                логистическим, нефтегазовым компаниям и&nbsp;ритейлу решать
                более&nbsp;90% задач автоматически, без участия людей.
              </Typography>
              <Typography theme={TypographyTheme.Blue}>
                Мы&nbsp;преобразуем документы в&nbsp;структурированные данные
                для будущих RPA-систем, чтобы избавить сотрудников
                от&nbsp;рутины и&nbsp;снизить затраты клиента
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section dark>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <Heading weight={2} noMt>
                Наша технология
              </Heading>
              <Typography size={24} mb={48}>
                В&nbsp;мире еще нет такой системы, который&nbsp;бы управлял
                только искусственный интеллект. ИИ&nbsp;все еще несовершенен,
                он&nbsp;ошибается и&nbsp;не&nbsp;способен закрыть сложные
                задачи, с&nbsp;которыми успешно справляется человек.
                Мы&nbsp;в&nbsp;Dbrain верим, что у&nbsp;ИИ есть потенциал
                и&nbsp;будущее, но&nbsp;пока результаты его работы требуют
                проверки.
              </Typography>
              <Typography theme={TypographyTheme.Blue} mb={48}>
                Система Dbrain самосовершенствуется
              </Typography>
              <Typography size={24} mb={72}>
                Мы&nbsp;используем технологию human-in-the-loop для исправления
                ошибок ИИ. Когда система совершает оплошность, квалифицированные
                разметчики данных исправляет ее&nbsp;и&nbsp;отправляет результат
                обратно в&nbsp;систему, чтобы она не&nbsp;ошиблась
                в&nbsp;будущем. А&nbsp;сложные случаи&nbsp;&mdash; например,
                рукописный текст&nbsp;&mdash; сразу отдаются людям. Так нам
                удается закрыть даже самые сложные случаи с&nbsp;высоким
                качеством.
              </Typography>
              <Grid container>
                <Grid xs={12} md={6}>
                  <a
                    href="https://github.com/dbrainio"
                    target="_blank"
                    className={style.github}
                  >
                    <Button
                      theme={ButtonTheme.Blue}
                      icon={<GithubIcon />}
                      size={AlphabetSize.L}
                    >
                      Dbrain на GitHub
                    </Button>
                  </a>
                </Grid>
                <Grid xs={12} md={6}>
                  <a
                    href="https://toloka.yandex.ru/"
                    target="_blank"
                    className={style.toloka}
                  >
                    <StandardImage
                      src="/images/toloka.png"
                      className={style.tolokaImage}
                    />
                    <Typography> Партнер Яндекс.Толоки</Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section className={style.leadersSection}>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <Heading weight={2} noMt>
                Лидеры Dbrain
              </Heading>
              <div className={style.leaders}>
                <Grid container>
                  {[
                    {
                      src: '/images/dm.jpg',
                      name: 'Дмитрий Мацкевич',
                      title: 'Основатель, CEO',
                      linkedIn: 'https://www.linkedin.com/in/mdima/',
                    },
                    {
                      src: '/images/ah.jpg',
                      name: 'Алексей Хахунов',
                      title: 'Основатель, CTO',
                      linkedIn: 'https://www.linkedin.com/in/alexeihahunov/',
                    },
                    {
                      src: '/images/at.jpg',
                      name: 'Алексей Цишевский',
                      title: 'COO',
                      linkedIn: 'https://www.linkedin.com/in/tsish/',
                    },
                  ].map((l) => (
                    <Grid item xs={12} md={4}>
                      <div className={style.leader}></div>
                    </Grid>
                  ))}
                </Grid>
              </div>
              <Button
                size={AlphabetSize.L}
                theme={ButtonTheme.Blue}
                onClick={openContactUs}
              >
                Связаться
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section dark>
        <Container>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <Heading weight={2} noMt>
                Присоединяйся к&nbsp;команде
              </Heading>
              <Typography size={24} mb={48}>
                В&nbsp;нашей команде собрались умные и&nbsp;талантливые люди
                (ex-Yandex, Uber и&nbsp;др.), которые объединены общей
                целью&nbsp;&mdash; создавать технологии будущего. Мы&nbsp;всегда
                открыты для новых людей&nbsp;&mdash; присоединяйся!
              </Typography>
              <Typography theme={TypographyTheme.Blue} mb={72}>
                Love people. Use things. <br />
                The opposite never works
              </Typography>
              <div className={style.jobs}>
                <a href="https://jobs.dbrain.io/" target="_blank">
                  <Button theme={ButtonTheme.Blue} size={AlphabetSize.L}>
                    Вакансии
                  </Button>
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </div>
  )
}

export default About
