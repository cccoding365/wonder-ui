import React from 'react'
import './style.scss'
import classNames from 'classnames'
import { DividerProps } from './props'

const Divider: React.FC<DividerProps> = (props) => {
  const { style, direction, position, lineStyle, children } = props

  const dividerClass = classNames({
    wonder_divider: true,
    [`wonder_divider wonder_divider_${lineStyle}`]: true, // 分割线样式
    [`wonder_divider wonder_divider_hasChildren`]:
      direction !== 'vertical' && children, // 水平有内容
    [`wonder_divider wonder_divider_hasChildren wonder_divider_hasChildren_${position}`]:
      direction !== 'vertical' && children, // 水平有内容
    [`wonder_divider wonder_divider_vertical`]: direction === 'vertical' && !children, // 垂直分割线
    [`wonder_divider_${position}`]: true,
    [`wonder_divider_${lineStyle}`]: true,
  })

  return (
    <div className={dividerClass} style={style || undefined}>
      {children && direction !== 'vertical' && (
        <span className="wonder_divider_children">{children}</span>
      )}
    </div>
  )
}

Divider.defaultProps = {
  direction: 'horizontal',
  position: 'left',
  lineStyle: 'solid',
  children: null,
  style: undefined,
}

export default Divider
