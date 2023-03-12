import { CSSProperties } from 'react'
export type ImageProps = {
  style?: CSSProperties
  className?: string
  src: string
  alt?: string
  width?: string
  height?: string
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  preview?: boolean
  previewList?: Array<string>
  toIndex?: number
}
export type PreviewProps = {
  previewList?: Array<string>
  show?: boolean
  closePreview?: () => void
  locateIndex?: number
}