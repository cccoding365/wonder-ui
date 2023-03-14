import React from 'react'

export type TitleProps = {
  // 组件名
  title: string
  // 组件备注
  notes?: string
  // 组件描述
  desc?: JSX.Element | string
}

export default function Title(props: TitleProps): JSX.Element {
  const { title, notes, desc } = props
  return (
    <>
      <h1 className="packagesTitle">{title}<span>{notes}</span></h1>
      <h2 className="packagesDesc">{desc}</h2>
    </>
  )
}

Title.defaultProps = {
  notes: '',
  desc: '',
}
