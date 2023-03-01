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
      width: 200,
    },
    {
      title: '默认值',
      field: 'default',
      width: 80,
    },
  ]
  const dataSource: any = [
    {
      arguments: 'title',
      description: '自定义标题',
      type: <span>string</span>,
      optional: '-',
      default: '提示',
    },
    {
      arguments: 'text',
      description: '自定义提示内容',
      type: <span>string</span>,
      optional: '-',
      default: '这是内容',
    },
    {
      arguments: 'icon',
      description: '提示图标',
      type: <span>string</span>,
      optional: <span>-</span>,
      default: 'm-icon-warning',
    },
    {
      arguments: 'lodingIcon',
      description: '等待图标',
      type: <span>string</span>,
      optional: <span>-</span>,
      default: 'm-icon-loading2',
    },
    {
      arguments: 'confirmText',
      description: '确认按钮文字内容',
      type: <span>string</span>,
      optional: <span>-</span>,
      default: '确认',
    },
    {
      arguments: 'cancelText',
      description: '取消按钮文字内容',
      type: <span>string</span>,
      optional: <span>-</span>,
      default: '取消',
    },
    {
      arguments: 'confirmShow',
      description: '是否显示确认按钮',
      type: <span>boolean</span>,
      optional: <span>true | false </span>,
      default: 'true',
    },
    {
      arguments: 'cancelShow',
      description: '是否显示取消按钮',
      type: <span>boolean</span>,
      optional: <span>true | false </span>,
      default: 'true',
    },
    {
      arguments: 'closeShow',
      description: '是否显示右上角的图标',
      type: <span>boolean</span>,
      optional: <span>true | false </span>,
      default: 'true',
    },
    {
      arguments: 'confirmCallback',
      description: '点击确认的回调',
      type: <span>{`() => void`}</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'cancelCallback',
      description: '点击取消的回调',
      type: <span>{`() => void`}</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'errorCallback',
      description: '确认错误的捕获回调',
      type: <span>{`() => void`}</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'customClass',
      description: '自定义组件类名',
      type: <span >string</span>,
      optional: '-',
      default: '-',
    },
  ]
  return (
    <div style={{ width: '100%' }}>
      <p className="packagesSubTitle">API 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  )
}
