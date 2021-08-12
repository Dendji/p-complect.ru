import React from 'react'
import FormResult, { FormResultTheme } from '../FormResult/FormResult'
import { Dialog, DialogContent } from '@material-ui/core'

export interface ErrorPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ErrorPopup({ isOpen, onClose }: ErrorPopupProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent>
        <FormResult theme={FormResultTheme.Error} />
      </DialogContent>
    </Dialog>
  )
}
