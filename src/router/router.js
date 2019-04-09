const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/Layout'),
    children:[ 
        {
            path: 'test1',
            name: 'test1',
            component: () => import('@/views/test/bus/test1'),
        }, {
            path: 'test2',
            name: 'test2',
            component: () => import('@/views/test/bus/test2'),
        }, {
            path: 'table',
            name: 'table',
            component: () => import('@/views/demo/table'),
        },{
            path: 'session',
            name: 'table',
            component: () => import('@/views/demo/session'),
        }, 

    ]
  },
    {
        path: '/menu',
        name: 'table',
        component: () => import('@/views/demo/menu/index'),
    },
    {
        path: '/sgmenu',
        name: 'table',
        component: () => import('@/views/demo/menu/test'),
    },
    {
        path: '/testmenu',
        name: 'table',
        component: () => import('@/views/test/recursion/index'),
    }
]
export default routes
