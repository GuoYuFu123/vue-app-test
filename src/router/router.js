const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld')
  }, {
    path: '/testorce',
    name: 'force',
    component: () => import('@/views/test/Force')
  }, {
    path: '/testechart',
    name: 'echart',
    component: () => import('@/views/test/Echart')
  }, {
    path: '/testVconsole',
    name: 'testVconsole',
    component: () => import('@/views/test/Vconsole')
  }
]
export default routes;
