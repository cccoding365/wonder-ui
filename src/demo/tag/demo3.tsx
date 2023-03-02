import React from 'react'
import { Tag } from '../../../packages'

export default function Demo3() {
  return (
    <>
      <Tag closeable>默认</Tag>
      <Tag color="red" icon={<i className="m-icon-error" />} closeable>
        红色
      </Tag>
      <Tag color="green" icon={<i className="m-icon-success" />} closeable>
        绿色
      </Tag>
    </>
  )
}
