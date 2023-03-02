export type LoadingBarProps = {
  className?: string
  status: 'start' | 'finish' | 'error' | 'update'
  color?: string
  height?: number
  percent?: number
}