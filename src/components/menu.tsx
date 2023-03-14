import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export type MenuProps = {
  showMenu?: boolean
}

function Menu(props: MenuProps): JSX.Element {
  const { showMenu } = props
  const navigate = useNavigate()
  const location = useLocation()
  const [menulist] = useState<any>([
    { name: '首页', link: '/' },
    { name: '组件', link: '/docs/index' },
  ])
  const [menuIndex, setMenuIndex] = useState<number>(sessionStorage.getItem('mIndex') ? Number(sessionStorage.getItem('mIndex')) : 1)
  const menuClick = (index: number, link: string) => {
    const arr = {
      0: '',
      1: '0-0',
      2: '0-2',
    }
    if (index !== 3) {
      setMenuIndex(index)
      navigate(link)
      sessionStorage.setItem('menuIndex', arr[index])
      sessionStorage.setItem('mIndex', index.toString())
    } else {
      window.open(link)
    }
  }
  useEffect(() => {
    setMenuIndex(sessionStorage.getItem('mIndex') ? Number(sessionStorage.getItem('mIndex')) : 1)
  }, [location.pathname])
  
  return (
    <div>
      {showMenu ? (
        <div className="MenuBoxInner">
          <div className="leftMenuLogo">
            <div className="logo" onClick={() => navigate('/')} />
          </div>
          <div className="menuinnerBox">
            <div className="menuitemBox">
              {menulist.map((item: any, index: number) => (
                <li
                  key={index}
                  className={menuIndex === index ? 'active' : ''}
                  onClick={() => menuClick(index, item.link)}
                >
                  {item.name}
                </li>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

Menu.defaultProps = {
  showMenu: true,
}

export default React.memo(Menu)
