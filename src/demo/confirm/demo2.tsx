import React from 'react'
import { Button, Confirm, Message } from '../../../packages'

export default function Demo2() {
  return (
    <Confirm
      cancelCallback={() => { Message.error('取消了') }}
      confirmCallback={() => { Message.success('确认了') }}
      title="自定义"
      text="自定义提示内容"
      closeShow={false}
      icon="m-icon-smile"
    >
      <Button>自定义</Button>
    </Confirm>
  )
}
