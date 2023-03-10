import React from 'react'
import classNames from 'classnames'
import { TimelineItemProps } from './props'

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  const { color, dot, className, label, children, ...restProps } = props

  const customColor = /blue|red|gray|green/.test(color || '')
    ? undefined
    : color
  const itemClassName = classNames('wonder_timeline_item', className)
  const dotClass = classNames('wonder_timeline_item_dot', {
    [`wonder_timeline_item_dot_${color}`]: !customColor,
    wonder_timeline_item_dot_custom: !!dot,
  })

  return (
    <li {...restProps} className={itemClassName}>
      {label && <div className="wonder_timeline_item_label">{label}</div>}
      <div
        className={dotClass}
        style={{ color: customColor, borderColor: customColor }}
      >
        {dot}
      </div>
      <div className="wonder_timeline_item_content">{children}</div>
      <div className="wonder_timeline_item_vertical_line" />
    </li>
  )
}
TimelineItem.defaultProps = {
  color: 'blue',
  className: '',
  label: '',
  position: '',
  dot: null,
  children: null,
}

export default TimelineItem
