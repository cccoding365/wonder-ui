import React from 'react'
import { Space, Alert } from '@packages'

const Demo1 = () => {
  return (
    <Space direction="vertical" style={{ alignItems: "normal" }}>
      <Alert message="这是一个 默认 警告提示！" />
      <Alert round type="success" message="这是一个 圆角 警告提示！" />
    </Space>
  )
}

export default Demo1