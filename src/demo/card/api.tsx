import React from "react"
import { Table } from "../../../packages"

export default function Api() {
  const columns: any = [
    {
      title: "参数",
      field: "arguments",
    },
    {
      title: "说明",
      field: "description",
      width: 300,
    },
    {
      title: "类型",
      field: "type",
    },
    {
      title: "可选值",
      field: "optional",
      width: 200,
    },
    {
      title: "默认值",
      field: "default",
      width: 80,
    },
  ]
  const dataSource: any = [
    {
      arguments: "style",
      description: "自定义Card样式",
      type: <span>CSSProperties</span>,
      optional: "-",
      default: "-",
    },
    {
      arguments: "className",
      description: "自定义Card类名",
      type: <span>string</span>,
      optional: "-",
      default: "-",
    },
    {
      arguments: "size",
      description: "卡片的不同尺寸属性",
      type: <span>string</span>,
      optional: <span>default | small</span>,
      default: "default",
    },
    {
      arguments: "cardTitle",
      description: "卡片标题",
      type: <span>string</span>,
      optional: "-",
      default: "-",
    },
    {
      arguments: "extraContent",
      description: "卡片右上角的操作区域",
      type: <span>ReactNode</span>,
      optional: "-",
      default: "-",
    },
    {
      arguments: "bordered",
      description: "卡片是否具有边框",
      type: <span>boolean</span>,
      optional: <span>true | false </span>,
      default: "false",
    },
    {
      arguments: "cover",
      description: "卡片封面",
      type: <span>ReactNode</span>,
      optional: "-",
      default: "-",
    },
    {
      arguments: "shadows",
      description: "卡片阴影效果",
      type: <span>string</span>,
      optional: <span>hover | always | none</span>,
      default: "none",
    },
    {
      arguments: "actions",
      description: "自定义操作组",
      type: <span>Array&lt;ReactNode&gt;</span>,
      optional: "-",
      default: "-",
    },
  ]
  return (
    <div style={{ width: "100%" }}>
      <p className="packagesSubTitle">API 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  )
}
