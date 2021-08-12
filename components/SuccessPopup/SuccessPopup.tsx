import React from 'react'
import FormResult, { FormResultTheme } from '../FormResult/FormResult'
import { Dialog, DialogContent } from '@material-ui/core'

export interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent>
        <FormResult theme={FormResultTheme.Success} />
      </DialogContent>
    </Dialog>
  )
}
