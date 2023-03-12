import { CSSProperties } from 'react'
export type textKey = 'nextPage' | 'prevPage' | 'total' | 'page' | 'item'
export interface PaginationProps {
  pageSize?: number
  onPageSizeChange?: (pageSize: number) => void
  onPageChange?: (page: number, pageSize: number) => void
  total: number
  style?: CSSProperties
  pageSizeOptions?: number[]
  text?: {
    nextPage: string
    prevPage: string
    total: string
    page: string
    item: string
  }
  className?: string
}