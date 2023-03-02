import { CSSProperties } from "react"
export type LoadingProps = {
  style?: CSSProperties
  className?: string
  text?: string
  background?: string
  open: boolean
  icon?: string
  target?: string,
  duration?: number
  cRef: React.RefObject<any>
}