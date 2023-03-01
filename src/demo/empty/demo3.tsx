import React from "react"
import { Empty, Button } from "../../../packages"

export default function Demo3() {
  return (
    <Empty
      description={false}
    >
      <Button type="primary">暂无数据，立即新建</Button>
    </Empty>
  )
}