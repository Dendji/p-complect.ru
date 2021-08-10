import React from 'react'
import ReactSlider, { ReactSliderProps } from 'react-slider'
import style from './Slider.module.css'

interface Props extends ReactSliderProps {}
export default function Slider(props: Props) {
  return (
    <ReactSlider
      trackClassName={style.track}
      thumbClassName={style.track}
      className={style.slider}
      {...props}
      // className="horizontal-slider"
      // thumbClassName="example-thumb"
      // defaultValue={[0, 100]}
      // ariaLabel={['Lower thumb', 'Upper thumb']}
      // ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
      // renderThumb={(props, state) => (
      //   <div {...props}>{state.valueNow}</div>
      // )}
      // pearling
      // minDistance={10}
    />
  )
}
