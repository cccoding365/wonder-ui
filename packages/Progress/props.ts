import { CSSProperties } from 'react'

export type ProgressProps = {
  style?: CSSProperties
  className?: string
  type?: 'line' | 'circle'
  percent?: number
  strokeColor?: string
  trailColor?: string
  children?: React.ReactNode
}