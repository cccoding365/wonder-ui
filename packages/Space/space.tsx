import React from 'react'
import './style.scss'
import classNames from 'classnames'
import { SpaceProps } from './props'

function Space(props: SpaceProps): JSX.Element {
  const { style, className, children, direction, gap, align } = props
  const spaceClass = classNames({
    wonder_space: true,
    [className || '']: !!className,
  })
  const spaceStyle = {
    ...style,
    flexFlow: direction === 'vertical' ? 'column wrap' : 'wrap',
    gap: gap,
    alignItems: direction === 'vertical' ? align : 'baseline',
    justifyContent: direction === 'horizontal' ? align : 'baseline',
  }
  return (
    <div className={spaceClass} style={style || spaceStyle}>
      {children}
    </div>
  )
}
Space.defaultProps = {
  style: '',
  className: '',
  direction: 'horizontal',
  gap: '10px 10px',
  align: 'baseline',
}
export default Space
