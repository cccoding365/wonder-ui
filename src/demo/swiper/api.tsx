import React from 'react'
import { Table } from '../../../packages'

export default function Api() {
  const columns = [
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
  const dataSource = [
    {
      arguments: 'height',
      description: '高度',
      type: <span>string</span>,
      optional: '',
      default: '200px',
    },

    {
      arguments: 'showArrow',
      description: '箭头',
      type: <span>boolean</span>,
      optional: 'true/false',
      default: 'false',
    },
    {
      arguments: 'leftArrow',
      description: '左侧箭头',
      type: <span>ReactNode</span>,
      optional: '',
      default: '',
    },
    {
      arguments: 'rightArrow',
      description: '右侧箭头',
      type: <span>ReactNode</span>,
      optional: '',
      default: '',
    },
    {
      arguments: 'showDots',
      description: '是否展示指示点',
      type: <span>boolean</span>,
      optional: 'true/false',
      default: 'true',
    },
    {
      arguments: 'dotType',
      description: '指示点',
      type: <span>{`'dot' | 'line'`}</span>,
      optional: 'dot/line',
      default: 'dot',
    },
    {
      arguments: 'direction',
      description: '指示点方向',
      type: (
        <span>{`'horizontal' | 'vertical'`}</span>
      ),
      optional: 'horizontal/vertical',
      default: 'horizontal',
    },
    {
      arguments: 'autoplay',
      description: '自动轮播',
      type: <span>Boolean</span>,
      optional: 'true/false',
      default: 'false',
    },
    {
      arguments: 'duration',
      description: '轮播间隔',
      type: <span>number</span>,
      optional: '3000',
      default: '3000',
    },
  ]
  return (
    <div style={{ width: '100%' }}>
      <p className="packagesSubTitle">API 说明</p>
      <Table columns={columns} dataSource={dataSource} size="middle" border />
    </div>
  )
}
