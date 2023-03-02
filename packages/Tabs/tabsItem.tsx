import React, { FC } from 'react'

export interface TabsItemProps {
    tab: React.ReactNode
    disabled?: boolean
    children: React.ReactNode
}

const TabsItem: FC<TabsItemProps> = ({ children }) => (
    <div className="wonder_tabs_item">{children}</div>
)

export default TabsItem