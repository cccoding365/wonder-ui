import React from 'react'
import './style.scss'
import classNames from 'classnames'
import TimelineItem from './TimelineItem'
import { TimelineProps } from './props'

const Timeline = (props: TimelineProps) => {
  const { mode, style, reverse, children } = props

  const handlePonsitionClassname = (
    index: number,
    el?: React.ReactElement<any>
  ) => {
    if (mode === 'middle') {
      if (el?.props.position === 'right') return `wonder_timeline_item_left`
      if (el?.props.position === 'left') return `wonder_timeline_item_right`
      return index % 2 === 0
        ? 'wonder_timeline_item_left'
        : 'wonder_timeline_item_right'
    }
    if (mode === 'left') return 'wonder_timeline_item_left'
    if (mode === 'right') return 'wonder_timeline_item_right'
    return ''
  }
  const timelineItems = React.Children.map(
    React.Children.toArray(children),
    (el: any, index: number) => {
      return React.cloneElement(el, {
        className: classNames([
          el.props.className,
          handlePonsitionClassname(index, el),
        ]),
      })
    }
  )

  const hasLabelItem = timelineItems.some(
    (item: React.ReactElement<any>) => !!item?.props?.label
  )

  const timelineClass = classNames('wonder_timeline', {
    [`wonder_timeline_${mode}`]: true,
    [`wonder_timeline_label`]: hasLabelItem,
  })
  return (
    <ul className={timelineClass} style={style}>
      {reverse ? timelineItems.reverse() : timelineItems}
    </ul>
  )
}

Timeline.Item = TimelineItem

Timeline.defaultProps = {
  mode: 'left',
  style: null,
  reverse: false,
  children: null,
}
export default Timeline
