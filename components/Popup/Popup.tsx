import React from 'react'
import Grow from '@material-ui/core/Grow'
import Fade from '@material-ui/core/Fade'
import ScrollLock from 'react-scrolllock'

export enum PopupEffect {
  Standard = 'Standard',
  Fade = 'Fade',
}

export interface PopupProps {
  isOn: boolean
  children: React.ReactElement
  effect?: PopupEffect
}

export default function Popup({ isOn, children, effect }: PopupProps) {
  return (
    <ScrollLock isActive={isOn}>
      {effect === PopupEffect.Fade ? (
        <Fade in={isOn}>{children}</Fade>
      ) : (
        <Grow in={isOn}>{children}</Grow>
      )}
    </ScrollLock>
  )
}
