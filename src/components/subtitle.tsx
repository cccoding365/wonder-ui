import React from 'react'

export type TitleProps = {
  // 组件示例标题
  subtitle: string
  // 组件示例备注名
  subnotes?: string
  // 组件示例描述
  subdesc?: JSX.Element | string
}

export default function SubTitle(props: TitleProps): JSX.Element {
  const { subtitle, subnotes, subdesc } = props
  return (
    <>
      <h2 className="packagesSubTitle">{subtitle}<span>{subnotes}</span></h2>
      <p className="packagesSubDesc">{subdesc}</p>
    </>
  )
}

SubTitle.defaultProps = {
  subnotes: '',
  subdesc: '',
}
