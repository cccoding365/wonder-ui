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
      description: '卡片标题',
      type: (
        <span>
          ReactNode | ( ) =&gt; ReactNode
        </span>
      ),
      optional: '-',
      default: '-',
    },
    {
      arguments: 'content',
      description: '卡片内容',
      type: (
        <span>
          ReactNode | ( ) =&gt; ReactNode
        </span>
      ),
      optional: '-',
      default: '-',
    },
    {
      arguments: 'placement',
      description: '弹出位置',
      type: <span>string</span>,
      optional: (
        <span>top | bottom | left | right</span>
      ),
      default: 'top',
    },
    {
      arguments: 'defaultOpen',
      description: '默认是否显隐',
      type: <span>boolean</span>,
      optional: <span>true | false</span>,
      default: 'false',
    },
    {
      arguments: 'visible',
      description: '用于手动控制浮层显隐',
      type: <span>boolean</span>,
      optional: <span>true | false</span>,
      default: 'false',
    },
    {
      arguments: 'trigger',
      description: '触发行为',
      type: <span>string</span>,
      optional: (
        <span>
          &apos;hover&apos; | &apos;focus&apos; | &apos;click&apos;
        </span>
      ),
      default: 'hover',
    },
    {
      arguments: 'getPopupContainer',
      description: '浮层渲染父节点，默认渲染到 body 上',
      type: (
        <span>
          (triggerNode: HTMLElement) =&gt; HTMLElement
        </span>
      ),
      optional: <span>-</span>,
      default: '() => document.body',
    },
    {
      arguments: 'onOpenChange',
      description: '显示隐藏的回调',
      type: (
        <span>(visible: boolean) =&gt; void</span>
      ),
      optional: <span>-</span>,
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


