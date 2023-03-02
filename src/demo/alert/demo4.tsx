import React from 'react'
import { Alert, Space } from '../../../packages'

const Demo4 = () => {
  return (
    <Space direction="vertical" style={{ alignItems: "normal" }}>
      <Alert type="success" message="这是一个 Success 警告提示！" showIcon closeable />
      <Alert type="info" message="这是一个 Info 警告提示！" showIcon closeable />
      <Alert type="warning" message="这是一个 Warning 警告提示！" showIcon closeable />
      <Alert type="error" message="这是一个 Error 警告提示！" showIcon closeable />
    </Space>
  )
}

export default Demo4