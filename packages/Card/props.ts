import { CSSProperties } from "react"

export type CardProps = {
  style?: CSSProperties
  size?: "default" | "small"
  cardType?: "outer" | "inner"
  className?: string
  children?: React.ReactNode
  cardTitle?: string
  extraContent?: React.ReactNode
  bordered?: boolean
  cover?: React.ReactNode
  shadows?: "hover" | "always" | "none"
  actions?: Array<React.ReactNode>
}