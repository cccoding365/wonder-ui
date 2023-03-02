import { CSSProperties } from "react"

export type MaskProps = {
  style?: CSSProperties
  className?: string
  zIndex?: number
  visible: boolean
  children?: React.ReactNode
  background?: string
  maskClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}