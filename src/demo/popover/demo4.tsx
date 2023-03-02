import React from 'react'
import { Button, Popover } from '../../../packages'

export default function Demo4() {
  const content = (
    <div>
      <p>内容区域</p>
      <p>内容区域</p>
    </div>
  )
  return (
    <div>
      <Popover content={content} title="Title" trigger="hover">
        <Button>Hover me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="focus">
        <Button>Focus me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="click">
        <Button>Click me</Button>
      </Popover>
    </div>
  )
}


