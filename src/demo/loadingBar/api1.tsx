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
      arguments: 'color',
      description: '自定义LoadingBar颜色',
      type: <span>string</span>,
      optional: '-',
      default: '#1890ff',
    },
    {
      arguments: 'height',
      description: '自定义LoadingBar高度',
      type: <span>number</span>,
      optional: '-',
      default: '2',
    },
    {
      arguments: 'percent',
      description: 'update方法可选参数，定义完成进度，最大100',
      type: <span>number</span>,
      optional: '-',
      default: '-',
    },
  ]
  return (
    <div style={{ width: '100%' }}>
      <p className="packagesSubTitle">object参数 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  )
}
