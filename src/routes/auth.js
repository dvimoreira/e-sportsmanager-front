export default [
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "tournament" */ './../layouts/Unauthenticated.vue'),
    meta: { auth: false },
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import(/* webpackChunkName: "tournament-login" */ './../views/organizer/Login.vue'),
        meta: {
          auth: false
        }
      }
    ]
  }
]
