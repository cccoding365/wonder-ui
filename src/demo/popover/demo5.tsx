import React from 'react'
import { Button, Popover } from '../../../packages'

export default function Demo5() {
  const content = (
    <div>
      <p>内容区域</p>
      <p>内容区域</p>
    </div>
  )

  return (
    <Popover
      content={content}
      title="Title"
      getPopupContainer={(trigger: HTMLElement) =>
        trigger.parentNode as HTMLElement
      }
      trigger="click"
      placement="bottom"
    >
      <Button>Click me</Button>
    </Popover>
  )
}