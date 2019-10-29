export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "autenticated" */ './../layouts/Public.vue'),
    meta: { auth: true },
    children: [
      {
        path: '',
        name: 'painel.home',
        component: () => import(/* webpackChunkName: "home" */ './../views/public/Home.vue'),
        meta: { auth: false }
      }
    ]
  }
]
