/** 卡片和线 */
export type TabsType = 'line' | 'card'

export interface TabsProps {
    className?: string
    defaultActiveKey?: number
    type?: TabsType
    onTabClick?: (selectedKey: number) => void
    children: React.ReactNode
}