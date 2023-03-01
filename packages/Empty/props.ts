import { CSSProperties } from 'react'

export type EmptyProps = {
  style?: CSSProperties,
  className?: string,
  description?: string | React.ReactNode | boolean,
  image?: string | React.ReactNode,
  imageStyle?: CSSProperties,
  children?: React.ReactNode,
}