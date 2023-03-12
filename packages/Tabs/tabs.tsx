import React, { FC, FunctionComponentElement, MouseEvent, useState } from 'react'
import classNames from 'classnames'
import TabsItem, { TabsItemProps } from './tabsItem'
import './style.scss'
import { TabsProps } from './props'

const RootTab: FC<TabsProps> = ({
    className,
    defaultActiveKey,
    type,
    onTabClick,
    children,
    ...restProps
}) => {
    const [activeKey, setActiveKey] = useState(defaultActiveKey)
    const tabsClassName = classNames('wonder_tabs', {
        [`${className}`]: className
    })
    const classes = classNames('wonder_tabs_nav', {
        'nav_line': type === 'line',
        'nav_card': type === 'card',
    })

    const handleClick = (e: MouseEvent, index: number, disabled: boolean | undefined) => {
        if (!disabled) {
            setActiveKey(index)
            onTabClick && onTabClick(index)
        }
    }

    const renderNavLinks = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as FunctionComponentElement<TabsItemProps>
            const { tab, disabled } = childElement.props
            const classes = classNames('wonder_tabs_nav_item', {
                'is_active': activeKey === index,
                disabled,
            })

            return (
                <li
                    className={classes}
                    key={`nav_item_${index}`}
                    onClick={(e) => {
                        handleClick(e, index, disabled)
                    }}
                >
                    {tab}
                </li>
            )
        })
    }

    const renderContent = () => {
        return React.Children.map(children, (child, index) => {
            if (index === activeKey) {
                return child
            }
        })
    }

    return (
        <div className={tabsClassName} {...restProps}>
            <ul className={classes}>{renderNavLinks()}</ul>
            <div className="wonder_tabs_content">{renderContent()}</div>
        </div>
    )
}

RootTab.defaultProps = {
    defaultActiveKey: 0,
    type: 'line',
}

export type ITabComponent = FC<TabsProps> & {
    TabsItem: FC<TabsItemProps>
}

const Tabs = RootTab as ITabComponent
Tabs.TabsItem = TabsItem

export default Tabs