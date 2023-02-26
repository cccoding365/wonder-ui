import React from 'react'
import { Message, Button, Space } from '../../../packages'

export default function Demo() {
  const success = (): void => { Message.success('这是一条成功的提示') }
  const warning = (): void => { Message.warning('这是一条警告的提示') }
  const error = (): void => { Message.error('这是一条错误的提示') }
  const info = (): void => { Message.info('这是一条信息的提示') }

  return (
    <Space>
      <Button type="success" onClick={success}>成功提示</Button>
      <Button type="warning" onClick={warning}>警告提示</Button>
      <Button type="error" onClick={error}>错误提示</Button>
      <Button type="info" onClick={info}>信息提示</Button>
    </Space>
  )
}
