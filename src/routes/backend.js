export default [
  {
    path: '/painel',
    component: () => import(/* webpackChunkName: "autenticated" */ './../layouts/Authenticated.vue'),
    meta: { auth: true },
    children: [
      {
        path: 'dashboard',
        name: 'painel.dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ './../views/backend/Dashboard.vue'),
        meta: {
          auth: true,
          permition: ['O', 'A']
        }
      }
    ]
  }
]
