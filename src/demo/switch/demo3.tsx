import React, { useState } from 'react'
import { Space, Switch, Button } from '../../../packages'

export default function Demo3() {
  const [loading, setLoading] = useState(true)

  return (
    <Space>
      <Switch loading={loading} onClick={() => setLoading(!loading)} />
      <Switch loading={loading} checked />
      <Button onClick={() => setLoading(!loading)}>εζ’ηΆζ</Button>
    </Space>
  )
}
