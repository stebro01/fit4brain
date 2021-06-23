
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 'name': 'start', component: () => import('pages/Index.vue') },
      { path: 'about', 'name': 'about', component: () => import('pages/About.vue') },
      { path: 'overview', 'name': 'overview', component: () => import('pages/Overview.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
