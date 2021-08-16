import store from "src/store/index"

function beforeEnterFunc (to, from, next) {
  store.state.next_route = to;
  if (store.state.access_allowed !== true) next({ name: 'Login' })
  else next()
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 'name': 'start', component: () => import('pages/Index.vue') },
      { path: 'about', 'name': 'about', component: () => import('src/pages/About.vue') },
      { path: 'login', 'name': 'Login', component: () => import('pages/Login.vue') },
      { path: 'logout', 'name': 'Logout', component: () => import('pages/Logout.vue') },
      { path: 'simon', 'name': 'Simon', component: () => import('pages/Simon.vue') },
      { path: 'anleitungen', 'name': 'Anleitungen', component: () => import('src/pages/Anleitungen.vue') , beforeEnter: beforeEnterFunc},
      { path: 'anleitungen_verum', 'name': 'Anleitungen_verum', component: () => import('src/pages/Anleitungen_verum.vue') , beforeEnter: beforeEnterFunc},
      { path: 'anleitungen_control', 'name': 'Anleitungen_control', component: () => import('src/pages/Anleitungen_control.vue') , beforeEnter: beforeEnterFunc},
      { path: 'anleitung_yoga', 'name': 'Anleitung_Yoga', component: () => import('pages/Anleitung_yoga.vue') , beforeEnter: beforeEnterFunc},
      { path: 'anleitung_aerob', 'name': 'Anleitung_Aerob', component: () => import('pages/Anleitung_aerob.vue') , beforeEnter: beforeEnterFunc},
      { path: 'anleitung_jonglieren', 'name': 'Anleitung_Jonglieren', component: () => import('pages/Anleitung_jonglieren.vue') , beforeEnter: beforeEnterFunc},
      { path: 'trainingsplan', 'name': 'Trainingsplan', component: () => import('pages/Trainingsplan.vue'), beforeEnter: beforeEnterFunc },
      { path: 'trainingsplan_control', 'name': 'Trainingsplan_control', component: () => import('src/pages/Trainingsplan_control.vue'), beforeEnter: beforeEnterFunc },
      { path: 'trainingsplan_verum', 'name': 'Trainingsplan_verum', component: () => import('src/pages/Trainingsplan_verum.vue'), beforeEnter: beforeEnterFunc },
      { path: 'about_control', 'name': 'about_control', component: () => import('src/pages/About_control.vue'), beforeEnter: beforeEnterFunc },
      { path: 'about_verum', 'name': 'about_verum', component: () => import('src/pages/About_verum.vue'), beforeEnter: beforeEnterFunc }
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
