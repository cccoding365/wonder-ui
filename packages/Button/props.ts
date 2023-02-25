import { CSSProperties } from 'react'

type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'link' | 'text'
type ButtonSize = 'large' | 'medium' | 'small'

export type ButtonProps = {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  round?: boolean,
  icon?: string,
  loading?: boolean,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>,
}