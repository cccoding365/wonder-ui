import React from "react"
import { Space, Card } from "../../../packages"

export default function Demo() {
  return (
    <Space
      style={{
        width: "80%",
        height: "100%",
        background: "#eee",
        padding: "30px",
      }}
    >
      <Card cardTitle="无边框卡片" bordered={false} style={{ width: 300 }}>
        <p>卡片内容</p>
        <p>卡片内容</p>
        <p>卡片内容</p>
      </Card>
    </Space>
  )
}
