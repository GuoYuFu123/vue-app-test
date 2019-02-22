const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/Layout'),
    children:[ 
        {
            path: 'form',
            name: '表单',
            component: () => import('@/views/demo/nestedtable'),
        },

    ]
  },
]
export default routes
