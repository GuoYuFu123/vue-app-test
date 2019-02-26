const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/Layout'),
    children:[ 
        {
            path: 'demo1',
            name: '表单',
            component: () => import('@/views/demo/nestedtable'),
        }, {
            path: 'demo2',
            name: '表单2',
            component: () => import('@/views/demo/Cascade'),
        },

    ]
  },
]
export default routes
