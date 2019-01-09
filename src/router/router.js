const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/testorce',
    name: 'force',
<<<<<<< HEAD
    component: () => import('@/views/test/Force')
  },
  {
=======
    component: () => import ('@/views/test/Force')
  }, {
>>>>>>> 6493e95d3a18f7614e48e76da9dd4bc01b8e36f2
    path: '/testechart',
    name: 'echart',
    component: () => import('@/views/test/Echart')
  },
  {
    path: '/testVconsole',
    name: 'testVconsole',
    component: () => import('@/views/test/Vconsole')
<<<<<<< HEAD
  },
  {
    path: '/demotable',
    name: 'demo-table',
    component: () => import('@/views/demo/nestedtable')
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import('@/views/demo/IndexContentList')
  },
  {
    path: '/cascade',
      name: 'cascade',
      component: () => import('@/views/demo/Cascade')
=======
  },  {
    path: '/testFloat',
    name: 'test-float',
    component: () => import('@/views/demo/TestFloat')
  },{
    path: '/testCom',
    name: 'test-com',
    component: () => import('@/views/demo/component')
>>>>>>> 6493e95d3a18f7614e48e76da9dd4bc01b8e36f2
  }
]
export default routes
