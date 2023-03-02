import React from 'react'
import { Table } from '../../../packages'

export default function Api() {
  const columns: any = [
    {
      title: '参数',
      field: 'arguments',
    },
    {
      title: '说明',
      field: 'description',
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
  const dataSource: any = [
    {
      arguments: 'style',
      description: '自定义Progress样式',
      type: <span>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'className',
      description: '自定义Progress类名',
      type: <span>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'type',
      description: '类型',
      type: <span>string</span>,
      optional: <span>line | circle</span>,
      default: 'line',
    },
    {
      arguments: 'percent',
      description: '进度属性',
      type: <span>string</span>,
      optional: '-',
      default: '0',
    },
    {
      arguments: 'strokeColor',
      description: '进度条色彩',
      type: <span>boolean</span>,
      optional: <span> - </span>,
      default: 'blue',
    },
    {
      arguments: 'trailColor',
      description: '未完成色彩',
      type: <span>boolean</span>,
      optional: <span> - </span>,
      default: '#e5e5e5',
    },
  ]
  return (
    <div style={{ width: '100%' }}>
      <p className="packagesSubTitle">通用 API 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  )
}
