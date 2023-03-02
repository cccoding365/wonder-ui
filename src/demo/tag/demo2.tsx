import React from 'react'
import { Tag } from '../../../packages'

export default function Demo2() {
  return (
    <>
      <Tag icon={<i className="m-icon-collection" />}>默认</Tag>
      <Tag color="red" icon={<i className="m-icon-error" />}>
        红色
      </Tag>
      <Tag color="green" icon={<i className="m-icon-success" />}>
        绿色
      </Tag>
    </>
  )
}
