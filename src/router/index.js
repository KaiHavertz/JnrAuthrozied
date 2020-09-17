import Vue from 'vue'
import VueRouter from 'vue-router'
import Footer from '../views/footer.vue'
import Menu from '../views/menu.vue'
import Index from '../views/index.vue'

const myRouters = [{
    path: '/footer',
    meta: {
      title: 'footer'
    },
    component: () => require('../views/footer.vue')
  },
  {
    path: '/menu',
    meta: {
      title: 'menu'
    },
    component: () => require('../views/menu.vue')
  },
  {
    path: '/index',
    meta: {
      title: 'index'
    },
    component: () => require('../views/index.vue')
  }
]

const routers = new VueRouter({
  myRouters,
  mode: 'history'
})

//路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
})

export default routers