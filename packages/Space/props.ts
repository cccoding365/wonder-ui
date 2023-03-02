import { CSSProperties } from 'react'

export type SpaceProps = {
  style?: CSSProperties
  className?: string
  children: React.ReactNode
  direction?: 'horizontal' | 'vertical'
  gap?: string
  align?: string
}