import { CSSProperties } from 'react'
export type InputProps = {
  style?: CSSProperties
  className?: string
  prefix?: string | React.ReactNode
  suffix?: string | React.ReactNode
  clearable?: boolean
  clearableFn?: () => void
  focus?: (e: React.FocusEvent<HTMLInputElement>) => void
  blur?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: string | number
  type?: string
  showPassword?: boolean
  status?: 'error' | 'warning'
}