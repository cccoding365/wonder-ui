import { ReactNode } from 'react'
export type ConfirmProps = {
  title?: string,
  text?: string,
  icon?: string,
  lodingIcon?: string,
  confirmText?: string,
  cancelText?: string,
  confirmShow?: boolean,
  cancelShow?: boolean,
  closeShow?: boolean,
  displayed?: boolean,
  customClass?: string,
  children?: ReactNode
  confirmCallback?: (e?: any) => any,
  cancelCallback?: (e?: any) => any,
  errorCallback?: (e: any) => any
}

export const defaultProps: ConfirmProps = {
  title: '提示',
  text: '这是提示内容',
  icon: 'm-icon-warning',
  lodingIcon: 'm-icon-loading2',
  confirmText: '确认',
  cancelText: '取消',
  confirmShow: true,
  cancelShow: true,
  closeShow: true,
  displayed: false,
}