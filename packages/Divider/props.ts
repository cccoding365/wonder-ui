import { CSSProperties } from 'react'

type lineStyleType = 'solid' | 'dotted' | 'dashed' | 'groove'
export interface DividerProps {
  style?: CSSProperties,
  direction?: 'horizontal' | 'vertical',
  position?: 'left' | 'center' | 'right',
  lineStyle?: lineStyleType,
  children?: React.ReactNode
}