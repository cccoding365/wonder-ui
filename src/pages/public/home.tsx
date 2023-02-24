import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../packages';

export default function Index() {
  const navigate = useNavigate();
  const [menulist] = useState([
    { name: "首页", path: "/" },
    { name: "组件", path: "/docs/index" },
  ])
  const [menuIndex, setMenuIndex] = useState(0)
  sessionStorage.removeItem('menuIndex')
  sessionStorage.removeItem('mIndex')
  const menuClick = (index: number, path: string) => {
    const arr = {
      0: 0,
      1: 1,
      2: 2,
    }
    const arr1 = {
      0: '',
      1: '0-0',
      2: '0-2',
    }
    if (index !== 3) {
      setMenuIndex(index);
      navigate(path)
      sessionStorage.setItem('menuIndex', arr1[index])
      sessionStorage.setItem('mIndex', arr[index])
    } else {
      window.open(path)
    }
  }
  return (
    <div className="wonder-ui-home-inner">
      <div className="homeBoxinner">
        <div className="homeHeader">
          <div className="homeHaderInner">
            <div className="logoArea">
              <span className="nameSpan">Wonder-UI</span>
            </div>
            <div className="menuArea">
              {
                menulist.map((item, index) => (
                  <li key={index} className={menuIndex === index ? 'active' : ''} onClick={() => menuClick(index, item.path)}>{item.name}</li>
                ))
              }
            </div>
          </div>
        </div>
        <h3>一套适合开发者使用的轻量级UI组件库</h3>
        <div className="contentBoxInnerHome">
          <div className="homeBtnGroup">
            <Button type="success" size="large" onClick={() => navigate('/docs/index')} style={{ width: '100px' }}>快速开始</Button>
          </div>
        </div>
      </div>
    </div >
  )
}
