type MessageType = 'success' | 'error' | 'warning' | 'info' | 'loading'

export type MessageProps = {
  open: boolean
  content?: string
  duration?: number
  type?: MessageType
}