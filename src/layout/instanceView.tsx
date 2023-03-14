import React from 'react'
import SubTitle from '../components/subtitle'
import CodeView from '../components/codeView'

export type InstanceViewProps = {
  // 标题
  subtitle: string,
  // 标题注释
  subnotes?: string,
  // 标题描述
  subdesc?: JSX.Element | string,
  // 组件实例
  demo?: JSX.Element,
  // 是否显示标题
  isSubTitle?: boolean,
  // 是否显示实例
  isDemo?: boolean,
  // 是否显示代码
  isCode?: boolean,
  // 实例代码路径
  path: string,
  // 是否显示代码预览下预览按钮
  showView?: boolean,
  // 是否显示代码预览里复制按钮
  showCopy?: boolean,
  // 是否显示代码
  showCode?: boolean,
}

function InstanceView(props: InstanceViewProps) {
  const { subtitle, subnotes, subdesc, demo, isSubTitle, isDemo, isCode, path, showView, showCopy, showCode } = props
  return (
    <div className="instanceView_inner">
      {isSubTitle ? <SubTitle subtitle={subtitle} subnotes={subnotes} subdesc={subdesc} /> : null}
      {isDemo ? <div className="customDemoStyle">{demo}</div> : null}
      {isCode ? <CodeView path={path} showView={showView} showCopy={showCopy} showCode={showCode} /> : null}
    </div>
  )
}

InstanceView.defaultProps = {
  subnotes: '',
  subdesc: '',
  demo: null,
  isSubTitle: true,
  isDemo: true,
  isCode: true,
  showView: true,
  showCopy: true,
  showCode: false,
}

export default React.memo(InstanceView)