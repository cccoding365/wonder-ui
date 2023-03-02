import React from 'react'
import { Button, Popover } from '../../../packages'

export default function Demo() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
  return (
    <Popover content={content} title="Title">
      <Button>Hover me</Button>
    </Popover>
  )
}