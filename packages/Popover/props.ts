export interface PopoverProps {
  children: React.ReactNode
  content: string | React.ReactNode
  title: string
  placement?: 'left' | 'right' | 'top' | 'bottom'
  defaultOpen?: boolean | undefined // undefined表示未传递defaultOpen参数
  visible?: boolean | undefined // undefined表示未传递visible参数
  onOpenChange?: (visible: boolean) => void
  trigger?: 'hover' | 'focus' | 'click'
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
}