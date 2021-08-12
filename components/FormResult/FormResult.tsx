import React from 'react'
import style from './FormResult.module.css'

export enum FormResultTheme {
  Success = 'Success',
  Error = 'Error',
}
interface Props {
  theme: FormResultTheme
}

export default function FormResult({ theme }: Props) {
  return (
    <div className={style.root}>
      {theme === FormResultTheme.Error && (
        <>
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="75" cy="75" r="75" fill="#FFF9F9" />
            <circle cx="75" cy="75" r="60" fill="#FFE9E9" />
            <circle cx="75" cy="75" r="45" fill="#FF8C8C" />
            <line
              x1="94.2111"
              y1="56.0607"
              x2="55.0605"
              y2="95.2112"
              stroke="white"
              strokeWidth="3"
            />
            <line
              y1="-1.5"
              x2="55.3673"
              y2="-1.5"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 56.0596 55)"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
          <div className={style.text}>Произошла ошибка!</div>
        </>
      )}
      {theme === FormResultTheme.Success && (
        <>
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="75" cy="75" r="75" fill="#27AE60" fillOpacity="0.05" />
            <circle cx="75" cy="75" r="60" fill="#27AE60" fillOpacity="0.1" />
            <circle cx="75" cy="75" r="45" fill="#92D088" />
            <path
              d="M54.8867 76L70.8868 92L97.9997 64"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={style.text}>Спасибо за заявку!</div>
          <div className={style.subtext}>
            Ваша заявка у нас и скоро мы свяжемся с вами
          </div>
        </>
      )}
    </div>
  )
}
