import React, { useState, useEffect } from 'react'
import './style.scss'
import classNames from 'classnames'
import { TagProps } from './props'

const Tag = (props: TagProps) => {
  const { color, closeable, icon: iconNode, children } = props
  const [visible, setVisible] = useState<boolean>(true)
  const presetColor = ['blue', 'red', 'gray', 'green']
  let isPresetColor = false
  let customColor = ''
  if (color) {
    isPresetColor = presetColor.indexOf(color) !== -1
    if (!isPresetColor) {
      customColor = color
    }
  }
  useEffect(() => { })
  const tagClass = classNames('wonder_tag', {
    [`wonder_tag_${color}`]: isPresetColor,
    [`wonder_tag_custom_color`]: !isPresetColor && customColor,
    [`wonder_tag_hidden`]: !visible,
  })
  const childNode = iconNode ? (
    <>
      {iconNode}
      <span>{children}</span>
    </>
  ) : (
    children
  )
  const handleClose = () => {
    setVisible(false)
  }
  const renderCloseIcon = () => {
    if (closeable) {
      return <i className="m-icon-close wonder_tag_close" onClick={handleClose} />
    }
    return null
  }
  return (
    <span className={tagClass} style={{ backgroundColor: customColor }}>
      {childNode}
      {renderCloseIcon()}
    </span>
  )
}
Tag.defaultProps = {
  color: '',
  closeable: false,
  icon: null,
  children: null,
}

export default Tag
