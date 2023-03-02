import { CSSProperties } from 'react'

export interface TooltipEleProps {
  content: string | React.ReactNode
  left: number
  top: number
  width: number
  height: number
  cRef: React.RefObject<any>
  align?: string
  color?: string
  zIndex?: number
}
export type TooltipProps = {
  style?: CSSProperties
  className?: string
  children: React.ReactNode
  content: string | React.ReactNode
  align?: 'top' | 'bottom' | 'left' | 'right'
  color?: string
  onOpenChange?: (flag: boolean) => void
  zIndex?: number
}