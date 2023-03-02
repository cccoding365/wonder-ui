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
      arguments: 'headStyle',
      description: '自定义表头样式',
      type: <span>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'bodyStyle',
      description: '自定义表格主体样式',
      type: <span>CSSProperties</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'className',
      description: '自定义类名',
      type: <span>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'border',
      description: '是否显示边框',
      type: <span>string</span>,
      optional: <span>true | false</span>,
      default: 'false',
    },
    {
      arguments: 'size',
      description: '表格尺寸',
      type: <span>string</span>,
      optional: <span>large | medium | small</span>,
      default: 'large',
    },
    {
      arguments: 'columns',
      description: '表格列配置（详见下方columns 配置说明）',
      type: <span>array</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'dataSource',
      description: '表格数据源',
      type: <span>array</span>,
      optional: '-',
      default: '-',
    },
  ]
  return (
    <div style={{ width: '100%' }}>
      <p className="packagesSubTitle">Table API 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  )
}
