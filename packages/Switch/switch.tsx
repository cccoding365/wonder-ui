import classNames from 'classnames'
import React, { useState } from 'react'
import './style.scss'
import { SwitchProps } from './props'

const Switch: React.FC<SwitchProps> = (props) => {
  const { disabled, checkedChildren, unCheckedChildren, loading, style, checked,
    onChange, onClick, } = props
  const prefixCls = 'wonder-switch'
  const [innerChecked, setInnerChecked] = useState(checked as boolean)

  const triggerChange = (
    newChecked: boolean,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    let mergedChecked = innerChecked
    if (!disabled && !loading) {
      mergedChecked = newChecked
      setInnerChecked(mergedChecked)
      onChange?.(mergedChecked, event)
    }
    return mergedChecked
  }
  const onInternalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ret = triggerChange(!innerChecked, e)
    onClick?.(ret, e)
  }

  const switchClassName = classNames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-checked`]: innerChecked,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-loading`]: loading,
  })
  return (
    <button
      type="button"
      role="switch"
      aria-checked={innerChecked}
      disabled={disabled}
      className={switchClassName}
      style={style || undefined}
      onClick={onInternalClick}
    >
      {loading && (
        <i className={`${prefixCls}-inner-loading m-icon-loading1`} />
      )}
      <span className={`${prefixCls}-inner`}>
        <span className={`${prefixCls}-inner-checked`}>{checkedChildren}</span>
        <span className={`${prefixCls}-inner-unchecked`}>
          {unCheckedChildren}
        </span>
      </span>
    </button>
  )
}

Switch.defaultProps = {
  disabled: false,
  loading: false,
  checked: false,
  checkedChildren: null,
  unCheckedChildren: null,
  style: undefined,
  onChange: () => { },
  onClick: () => { },
}
export default Switch
