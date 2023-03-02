export type TypeProps = 'info' | 'success' | 'warning' | 'error'

export type NotificationItemProps = {
  message: string | React.ReactNode
  description: string | React.ReactNode
  onClick?: () => void
  onClose?: () => void
  className?: string
  duration?: number | null // null 或 0时不关闭
  style?: Record<string, unknown>
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  bottom?: number // 消息从底部弹出时，距离底部的位置，单位像素
  top?: number // 消息从顶部弹出时，距离顶部的位置，单位像素
  closeIcon?: React.ReactNode // 自定义关闭图标
  btn?: React.ReactNode // 自定义关闭按钮
  icon?: React.ReactNode // 自定义图标
  type?: TypeProps
  isGlobal?: boolean
}