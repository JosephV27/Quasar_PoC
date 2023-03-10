
const routes = [
  {
    path: '/popup', 
    component: () => import('pages/PopupPage.vue') 
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
