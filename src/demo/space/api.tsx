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
      description: '自定义Space样式',
      type: <span>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'className',
      description: '自定义Space类名',
      type: <span>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'direction',
      description: 'Space组件的排列方向',
      type: <span>string</span>,
      optional: <span>horizontal | vertical</span>,
      default: 'horizontal',
    },
    {
      arguments: 'gap',
      description: 'Space组件的间距',
      type: <span>string</span>,
      optional: '-',
      default: '10px 10px',
    },
    {
      arguments: 'align',
      description: <span>Space组件的对齐方式，当direction为horizontal时，参考justify-content (<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content" target="_back">https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content</a>)可选值，当direction为vertical时，参考align-items (<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items" target="_back">https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items</a>) 可选值</span>,
      type: <span>string</span>,
      optional: '-',
      default: 'baseline',
    },
  ]
  return (
    <div style={{ width: '100%' }}>
      <p className="packagesSubTitle">API 说明</p>
      {/* <p className="packagesSubNodes">API 说明</p> */}
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  )
}
