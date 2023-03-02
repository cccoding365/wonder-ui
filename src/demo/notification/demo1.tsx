import React from 'react'
import { Button, Notification } from '../../../packages'

export default function Demo() {
  const openNotification = () => {
    Notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!')
      },
      onClose: () => {
        console.log('Notification Closed!')
      },
    })
  }
  return (
    <Button type="primary" onClick={openNotification}>
      Open the notification box
    </Button>
  )
}