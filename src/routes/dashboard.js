export default [
  {
    path: '/painel',
    component: () => import(/* webpackChunkName: "autenticated" */ './../layouts/Authenticated.vue'),
    meta: { auth: true },
    children: [
      {
        path: 'dashboard',
        name: 'painel.dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ './../views/organizer/Dashboard.vue'),
        meta: {
          auth: true
        }
      }
    ]
  }
]
