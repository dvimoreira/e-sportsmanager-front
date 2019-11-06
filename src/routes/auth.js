export default [
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "tournament" */ './../layouts/Unauthenticated.vue'),
    meta: { auth: false },
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import(/* webpackChunkName: "tournament-login" */ './../views/backend/Login.vue'),
        meta: {
          auth: false
        }
      },
      {
        path: 'register',
        name: 'auth.register',
        component: () => import(/* webpackChunkName: "tournament-register" */ './../views/backend/Register.vue'),
        meta: {
          auth: false
        }
      }
    ]
  }
]
