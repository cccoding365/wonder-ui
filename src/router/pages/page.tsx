import React from 'react'
import IndexPage from '../../pages/public/index'
import HomePage from '../../pages/public/home'
import LayoutPage from '../../pages/public/layout'
import Nofound from '../../pages/public/404'
import Intro from '../../pages/public/intro'
import PackagesRouter from './packages'

const BaseRouter: any = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/docs/*',
    element: <IndexPage />,
    children: [
      {
        path: '/index',
        element: <Intro />,
        name: '介绍',
        group: '快速上手',
        router: '/docs/index',
      },
      {
        path: '/react/*',
        element: <LayoutPage />,
        children: PackagesRouter,
        group: '快速上手',
      }
    ],
  },
  {
    path: '/:pathMatch(.*)',
    element: <Nofound />,
  },
]

export default BaseRouter
