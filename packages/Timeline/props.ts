import { CSSProperties } from 'react'

export type TimelineItemProps = {
  color?: string
  dot?: React.ReactNode
  className?: string
  label?: string
  position?: string
  children?: React.ReactNode
}

export interface TimelineProps {
  mode?: 'left' | 'right' | 'middle'
  style?: CSSProperties
  reverse?: boolean
  children?: React.ReactNode
}