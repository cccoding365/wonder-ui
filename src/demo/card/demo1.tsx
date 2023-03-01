import React from "react"
import { Space, Card, Button } from "../../../packages"

export default function Demo() {
  return (
    <Space>
      <Card
        cardTitle="默认大小"
        size="default"
        extraContent={<Button type="link">更多</Button>}
        style={{ width: 300 }}
      >
        <p>卡片内容</p>
        <p>卡片内容</p>
        <p>卡片内容</p>
      </Card>
      <Card
        cardTitle="小尺寸"
        size="small"
        extraContent={<Button type="link">更多</Button>}
        style={{ width: 300 }}
      >
        <p>卡片内容</p>
        <p>卡片内容</p>
        <p>卡片内容</p>
      </Card>
    </Space>
  )
}
