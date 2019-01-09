const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/components/index')
  },
  {
    path: '/testorce',
    name: 'force',
    component: () => import('@/views/test/Force')
  },
  {
    path: '/testechart',
    name: 'echart',
    component: () => import('@/views/test/Echart')
  },
  {
    path: '/testVconsole',
    name: 'testVconsole',
    component: () => import('@/views/test/Vconsole')
  },
  {
    path: '/testforce',
    name: 'testforce',
    component: () => import('@/views/test/Force')
  },
  {
    path: '/demotable',
    name: 'demotable',
    component: () => import('@/views/demo/nestedtable')
  },
  {
    path: '/testFloat',
    name: 'test-float',
    component: () => import('@/views/demo/TestFloat')
  },
  {
    path: '/testCom',
    name: 'test-com',
    component: () => import('@/views/demo/component')
  },
  {
    path: '/tree',
    name: 'tree-table',
    component: () => import('@/views/demo/IndexContentList')
  }
]
export default routes
