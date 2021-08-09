import classnames from 'classnames'
import React, { useEffect } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import MicrophoneIcon from '../MicrophoneIcon/MicrophoneIcon'
import style from './SpeechRecognition.module.css'

interface Props {
  onTranscript: (t: string) => void
}

export default function SpeechRecognizer({ onTranscript }: Props) {
  const { transcript, listening, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  useEffect(() => {
    onTranscript(transcript)
    return () => {}
  }, [transcript])

  const onToggle = async () => {
    listening
      ? SpeechRecognition.stopListening()
      : SpeechRecognition.startListening({
          language: 'ru-RU',
        })
  }

  return (
    <div
      className={classnames(style.root, {
        [style.animating]: listening,
      })}
      onClick={onToggle}
    >
      <MicrophoneIcon />
    </div>
  )
}
