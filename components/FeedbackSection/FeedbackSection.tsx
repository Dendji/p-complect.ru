import React from 'react'
import style from './FeedbackSection.module.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Section from '../Section/Section'
import Heading from '../Heading/Heading'
import Carousel from 'nuka-carousel'
import RoundedCard from '../RoundedCard/RoundedCard'
import StandardImage from '../StandardImage/StandardImage'

const reviews = [
  {
    image: '',
    content: (
      <>
        Попала в сложную ситуацию, нужны были деньги под залог недвижимости и
        как можно быстрей. Обратилась в компанию Альфа, помогли решить вопрос с
        долгами и помогли взять кредит на постройку дачи....
      </>
    ),
  },
  {
    image: '',
    content: (
      <>
        Попала в сложную ситуацию, нужны были деньги под залог недвижимости и
        как можно быстрей. Обратилась в компанию Альфа, помогли решить вопрос с
        долгами и помогли взять кредит на постройку дачи....
      </>
    ),
  },
]

export default function FeedbackSection() {
  return (
    <Section className={style.root} dark>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Heading weight={2}>Отзывы клиентов</Heading>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Carousel
              className={style.root}
              easing="easeSinInOut"
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              renderBottomCenterControls={null}
              // renderBottomCenterControls={(props: CarouselSlideRenderControlProps) => {
              //   return (
              //     <div className={style.dots}>
              //       {getDots(props.slideCount, props.goToSlide, props.currentSlide)}
              //     </div>
              //   )
              // }}
              defaultControlsConfig={{
                pagingDotsContainerClassName: style.dotsContainer,
                pagingDotsClassName: style.dot,
                pagingDotsStyle: {
                  background: '#aaaaaa',
                },
              }}
            >
              {reviews.map((r) => (
                <RoundedCard>
                  <div className={style.review}>
                    <div className={style.avatar}>
                      {r.image && r.image.length && (
                        <StandardImage src={r.image} />
                      )}
                    </div>
                    <div className={style.content}>{r.content}</div>
                  </div>
                </RoundedCard>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
