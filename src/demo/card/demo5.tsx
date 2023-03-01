import React from "react"
import { Space, Card } from "../../../packages"

export default function Demo() {
  return (
    <Space>
      <Card cardTitle="外部卡片" style={{ width: 450 }}>
        <Card cardTitle="内部卡片" cardType="inner" style={{ width: 420 }}>
          <p>卡片内容</p>
          <p>卡片内容</p>
        </Card>
        <Card cardTitle="内部卡片" cardType="inner" style={{ width: 420 }}>
          <p>卡片内容</p>
          <p>卡片内容</p>
        </Card>
      </Card>
    </Space>
  )
}
