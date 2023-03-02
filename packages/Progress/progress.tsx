import React, { CSSProperties } from 'react'
import './style.scss'
import classNames from 'classnames'
import Line from './line'
import Circle from './circle'
import { ProgressProps } from './props'
/**
 * Progress 组件分两部分实现
 *
 * 1、横线进度条  使用 <div> 实现  -> Line.tsx
 * 2、圆形进度条  使用 <svg> 实现  -> Circle.tsx
 */



function Progress<P extends ProgressProps>(props: P): JSX.Element {
  const { className, type } = props

  const clsString = classNames({
    [`wonder_progress_${type}`]: true,
    [className || '']: !!className,
  })

  let progress: React.ReactNode

  if (type === 'line') {
    progress = <Line {...props} className={clsString} />
  } else if (type === 'circle') {
    progress = <Circle {...props} className={clsString} />
  }
  return <div className="wonder_progress">{progress}</div>
}

Progress.defaultProps = {
  style: '',
  className: '',
  type: 'line',
  percent: 0,
  strokeColor: 'blue',
  trailColor: '#e5e5e5',
  children: null,
}

export default Progress
