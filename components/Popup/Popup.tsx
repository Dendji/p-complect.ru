import React from 'react'
import Grow from '@mui/material/Grow'
import Fade from '@mui/material/Fade'
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
