import style from './Subtitle.module.css'

export interface SubtitleProps {
  children: React.ReactNode
}

export default function Subtitle(props: SubtitleProps) {
  return <div className={style.subtitle}>{props.children}</div>
}
