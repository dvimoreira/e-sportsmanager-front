export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "autenticated" */ './../layouts/Public.vue'),
    meta: { auth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ './../views/public/Home.vue'),
        meta: { auth: false }
      },
      {
        path: 'eventos/:slug/:id',
        name: 'event',
        component: () => import(/* webpackChunkName: "event" */ './../views/public/Event.vue'),
        meta: { auth: false }
      }
    ]
  }
]
