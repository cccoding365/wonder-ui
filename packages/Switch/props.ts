import { CSSProperties } from 'react'

export type SwitchChangeEventHandler = (
  checked: boolean,
  event:
    | React.MouseEvent<HTMLButtonElement>
    | React.KeyboardEvent<HTMLButtonElement>
) => void

export type SwitchClickEventHandler = SwitchChangeEventHandler

export interface SwitchProps {
  disabled?: boolean
  checked?: boolean
  checkedChildren?: React.ReactNode
  unCheckedChildren?: React.ReactNode
  loading?: boolean
  style?: CSSProperties
  onChange?: SwitchChangeEventHandler
  onClick?: SwitchClickEventHandler
}