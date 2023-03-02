import { ReactNode } from 'react'

export interface SwiperProps {
  children: React.ReactNode
  showArrow?: boolean
  showDots?: boolean
  autoplay?: boolean
  duration?: number
  dotType?: 'line' | 'dot' | 'square'
  dotPosition?: 'bottom' | 'top' | 'left' | 'right'
  leftArrow?: ReactNode
  rightArrow?: ReactNode
  height?: string
}