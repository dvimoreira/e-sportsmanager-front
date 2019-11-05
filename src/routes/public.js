export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "autenticated" */ './../layouts/Public.vue'),
    meta: { auth: true },
    children: [
      {
        path: '',
        name: 'public.home',
        component: () => import(/* webpackChunkName: "home" */ './../views/public/Home.vue'),
        meta: { auth: false }
      },
      {
        path: 'eventos/:slug/:id',
        name: 'event',
        component: () => import(/* webpackChunkName: "event" */ './../views/public/Event.vue'),
        meta: { auth: false }
      },
      {
        path: 'inscricao/:slug/:id',
        name: 'subscription',
        component: () => import(/* webpackChunkName: "subscription" */ './../views/public/Subscription.vue'),
        meta: { auth: false }
      },
      {
        path: '*',
        component: () => import(/* webpackChunkName: "error" */ './../views/public/errors/404.vue'),
        meta: { auth: false }
      }
    ]
  }
]
