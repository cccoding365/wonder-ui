import React from 'react'
import { Table } from '../../../packages'

export default function Api() {
  const columns = [
    {
      title: "参数",
      field: "arguments",
    },
    {
      title: "说明",
      field: "description",
    },
    {
      title: '类型',
      field: 'type',
    },
    {
      title: '可选值',
      field: 'optional',
      width: 450,
    },
    {
      title: '默认值',
      field: 'default',
      width: 80,
    },
  ]

  const dataSource = [
    {
      arguments: 'type',
      description: '警告提示的类型',
      type: <span>string</span>,
      optional: <span> primary | success | warning | error | info</span>,
      default: 'primary',
    },
    {
      arguments: 'message',
      description: '警告提示内容',
      type: <span>string</span>,
      optional: "-",
      default: '-',
    },
    {
      arguments: 'description',
      description: '警告提示的描述',
      type: <span>string</span>,
      optional: "-",
      default: '-',
    },
    {
      arguments: 'showIcon',
      description: '是否显示图标',
      type: <span>boolean</span>,
      optional: <span>true | false </span>,
      default: 'false',
    },
    {
      arguments: 'icon',
      description: '自定义图标，showIcon 为 true 时有效',
      type: <span>ReactNode</span>,
      optional: "-",
      default: '',
    },
    {
      arguments: 'closeable',
      description: '自定义图标，showIcon 为 true 时有效',
      type: <span>boolean</span>,
      optional: <span>true | false </span>,
      default: 'false',
    },
    {
      arguments: 'round',
      description: '警告提示框是否为圆角',
      type: <span>boolean</span>,
      optional: <span>true | false </span>,
      default: 'false',
    },
  ]

  return (
    <div style={{ width: "100%" }}>
      <p className="packagesSubTitle">API</p>
      <Table columns={columns} dataSource={dataSource} border />
    </div>
  )
}