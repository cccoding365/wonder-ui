import React, { useState } from 'react'
import { Button, Popover } from '../../../packages'

export default function Demo() {
  const [visible, setVisible] = useState(false)
  const hide = () => {
    setVisible(false)
  }
  const content = (
    <button
      type="button"
      onClick={hide}
      style={{
        border: 'none',
        background: '#ffffff',
        color: '#1890ff',
        cursor: 'pointer',
        padding: '0',
      }}
    >
      Close
    </button>
  )
  const onOpenChange = (e) => {
    setVisible(e)
  }
  return (
    <Popover
      visible={visible}
      content={content}
      title="Title"
      onOpenChange={onOpenChange}
    >
      <Button>Hover me</Button>
    </Popover>
  )
}