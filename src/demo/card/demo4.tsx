import React from "react"
import { Space, Card } from "../../../packages"

export default function Demo() {
  return (
    <Space>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            src="/img/wallhaven-1pqz9v.jpg"
            alt="封面图片"
          />
        }
      >
        <span>这里是卡片的内容区域……</span>
      </Card>
    </Space>
  )
}
