import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Disposisi from '../views/disposisi/Index.vue'
import DisposisiCreate from '../views/disposisi/Create.vue'
import VueOffline from '../views/VueOffline.vue'
import Penyimpanan from '../views/Penyimpanan.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/penyimpanan',
    name: 'Penyimpanan',
    component: Penyimpanan,
    meta: {
      isRouteFound: true
    }
  }, 
  {
    path: '/vue-offline',
    name: 'Vue-Offline',
    component: VueOffline,
    meta: {
      isRouteFound: true
    }
  }, 
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isRouteFound: true,
      isAdmin: true
    }
  },
  {
    path: '/disposisi',
    name: 'Disposisi-Index',
    component: Disposisi,
    meta: {
      isRouteFound: true,
      isAdmin : true
    }
  },
  {
    path: '/disposisi-create',
    name: 'Disposisi-Create',
    component: DisposisiCreate,
    meta: {
      isRouteFound: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      isRouteFound: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      isRouteFound: true
    }
  },
  {
    path: '*',
    component: () => import('../components/404.vue'),
    meta: {
      isRouteFound: false
    }
  }
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isRouteFound)) {
    let userId = localStorage.getItem('id_user')
    if (to.name !== 'Login' && !userId) {
      alert("harus login terlebih dahulu")
      next({
        name: "Login"
      })
    } else if (to.name == 'Login' && userId != null) {
      alert("sudah login")
      next({
        name: 'Home'
      })
    } else {
      if (to.matched.some(record => record.meta.isAdmin)) {
        alert("sudah login, dengan role admin")
        next()
      } else {
        alert("sudah login, dengan role guest")
        next()
      }
    }
  } else {
    next()
  }

})

export default router