import { CSSProperties } from 'react'

export type TableProps = {
  headStyle?: CSSProperties
  bodyStyle?: CSSProperties
  className?: string
  border?: boolean
  columns: Array<any>
  dataSource: Array<any>
  size?: 'large' | 'middle' | 'small'
}