import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group'
import './style.scss'
import { NotificationItemProps, TypeProps } from './props'

interface GlobalProps {
  duration?: number | null // null 或 0时不关闭
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  bottom?: number // 消息从底部弹出时，距离底部的位置，单位像素
  top?: number // 消息从顶部弹出时，距离顶部的位置，单位像素
  closeIcon?: React.ReactNode // 自定义关闭图标
}
type Func = (config: NotificationItemProps) => void
interface ApiProps {
  open: Func
  success: Func
  info: Func
  warning: Func
  error: Func
}
type ContextHolderProps = string
interface NotificationProps extends ApiProps {
  config: Func
  useNotification: () => [ApiProps, ContextHolderProps]
}

const el = document.createElement('div')
const wrapper = document.createElement('div')
el.className = 'wonder_notification_container'
document.body.appendChild(el)
wrapper.className = 'wonder_notification_wrapper'
el.appendChild(wrapper)

let globalParams: GlobalProps = {}

function NotificationItem(props: NotificationItemProps): JSX.Element {
  const { message, description, className = '', style = {}, placement, type = '', bottom, top, closeIcon, btn, icon = null,
    duration, onClick, onClose, isGlobal = false } = props
  const [isOpen, setIsOpen] = useState(false)
  let timer: number | null = null

  const icons = {
    info: 'm-icon-prompt-filling',
    success: 'm-icon-success-filling',
    warning: 'm-icon-warning-filling',
    error: 'm-icon-delete-filling',
  }

  const getTime = () => {
    if (duration === 0 || duration === null || duration) return duration
    if (
      globalParams.duration === 0 ||
      globalParams.duration === null ||
      globalParams.duration
    )
      return globalParams.duration
    return 4.5
  }

  useEffect(() => {
    setIsOpen(true)
    if (isGlobal) {
      globalParams = { bottom, closeIcon, duration, placement, top }
    }

    const time = getTime()
    if (time) {
      timer = setTimeout(() => {
        const ele = document.querySelector('.wonder_notification')
        if (ele) {
          document.querySelector('.wonder_notification_wrapper')?.removeChild(ele)
        }
        setIsOpen(false)
      }, time * 1000)
    }
  }, [])

  const onCloseNotification = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setIsOpen(false)
    const ele = document.querySelector('.wonder_notification')
    if (ele) {
      document.querySelector('.wonder_notification_wrapper')?.removeChild(ele)
    }
    if (timer) {
      clearTimeout(timer)
    }
    e.stopPropagation()
    if (onClose) {
      onClose()
    }
  }

  const onClickNotification = () => {
    if (onClick) onClick()
  }

  const getPlacement = () => {
    return placement || globalParams.placement || 'topLeft'
  }
  const getPosition = (pos: 'top' | 'bottom') => {
    const position = getPlacement()
    if (position === `${pos}Left` || position === `${pos}Right`) {
      return props[pos] || globalParams[pos] || '24px'
    }
    return ''
  }

  return (
    <>
      {isGlobal && null}
      {!isGlobal && (
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames={`notification-${getPlacement()}`}
          unmountOnExit
        >
          <div
            className={classNames(
              'wonder_demo_notification',
              `wonder_demo_notification_${getPlacement()}`,
              `${className}`
            )}
            style={{
              top: getPosition('top'),
              bottom: getPosition('bottom'),
              ...style,
            }}
          >
            {icon && <span className="wonder_notification_icon">{icon}</span>}
            {!icon && type && (
              <span className="wonder_notification_icon">
                <i className={classNames(`${icons[type]}`)} />
              </span>
            )}
            <div
              className="wonder_notification_content"
              onClick={onClickNotification}
            >
              <div className="wonder_notification_title_wrapper">
                <span className="wonder_notification_title">{message}</span>
                <span
                  onClick={(e) => onCloseNotification(e)}
                  className="wonder_notification_close"
                >
                  {closeIcon || globalParams.closeIcon || (
                    <i className="m-icon-close" />
                  )}
                </span>
              </div>
              <div className="wonder_notification_description">{description}</div>
              {btn && <div className="wonder_notification_operation">{btn}</div>}
            </div>
          </div>
        </CSSTransition>
      )}
    </>
  )
}

NotificationItem.defaultProps = {
  onClick: () => { },
  onClose: () => { },
  className: '',
  duration: undefined,
  style: {},
  placement: '',
  bottom: 0,
  top: 0,
  closeIcon: null,
  btn: null,
  icon: null,
  type: '',
  isGlobal: false,
}

function popNotification(config: NotificationItemProps, type: TypeProps) {
  const root = document.createElement('div')
  root.className = 'wonder_notification'
  ReactDOM.createRoot(root).render(
    <NotificationItem {...config} type={type} />
  )
  const wrapperEl = document.querySelector('.wonder_notification_wrapper')
  if (wrapperEl) {
    wrapper.appendChild(root)
  }
}
const Notification: NotificationProps = {
  config: (config: GlobalProps) => {
    const root = document.createElement('div')
    root.className = 'wonder_notification'
    ReactDOM.createRoot(root).render(
      <NotificationItem {...config} isGlobal message="" description="" />
    )
  },
  useNotification: () => {
    const api: ApiProps = {
      open: () => { },
      success: () => { },
      info: () => { },
      warning: () => { },
      error: () => { },
    }
    Object.keys(Notification)
      .filter((item) => item !== 'useNotification')
      .forEach((item) => {
        api[item as keyof ApiProps] =
          Notification[item as keyof NotificationProps]
      })
    const contextHolder = ''
    return [api, contextHolder]
  },
  open: (config: NotificationItemProps) => {
    popNotification(config, 'info')
  },
  success: (config: NotificationItemProps) => {
    popNotification(config, 'success')
  },
  info: (config: NotificationItemProps) => {
    popNotification(config, 'info')
  },
  warning: (config: NotificationItemProps) => {
    popNotification(config, 'warning')
  },
  error: (config: NotificationItemProps) => {
    popNotification(config, 'error')
  },
}

export default Notification
