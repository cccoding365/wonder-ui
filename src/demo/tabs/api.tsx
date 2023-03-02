import React from 'react'
import { Table } from '../../../packages'

export default function Api() {
  // Tabs
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
      arguments: 'defaultActiveKey',
      description: '初始化选中面板的 key',
      type: <span>number</span>,
      optional: '-',
      default: '0',
    },
    {
      arguments: 'className',
      description: '自定义Tabs类名',
      type: <span>string</span>,
      optional: '-',
      default: '-',
    },
    {
      arguments: 'type',
      description: 'Tabs页签的类型',
      type: <span>string</span>,
      optional: <span>line | card</span>,
      default: 'line',
    },
    {
      arguments: 'onTabClick',
      description: 'tab 被点击时回调函数',
      type: <span>function(key: number)</span>,
      optional: '-',
      default: '-',
    }
  ]
  // TabsItem
  const columnsItem: any = [
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
  const dataSourceItem: any = [
    {
      arguments: 'disabled',
      description: '是否禁用',
      type: <span>boolean</span>,
      optional: <span>true | false</span>,
      default: 'false',
    },
    {
      arguments: 'tab',
      description: '选项卡头显示文字',
      type: <span>ReactNode | string</span>,
      optional: '-',
      default: '-',
    }
  ]
  return (
    <div style={{ width: '100%' }}>
      <p className="packagesSubTitle">API 说明</p>
      <p className="packagesSubTitle">Tabs</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
      <p className="packagesSubTitle">TabsItem</p>
      <Table columns={columnsItem} dataSource={dataSourceItem} size="middle" border />
    </div>
  )
}
