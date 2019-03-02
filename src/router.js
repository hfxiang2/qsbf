import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/mains'},
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '/mains',
      name: 'mains',
      component: () => import(/* webpackChunkName: "about" */ './views/mains/mains.vue')
    },
    {
      path: '/search',
      name: 'search',
      component:  () => import(/* webpackChunkName: "HelloWorld" */ './components/search.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      component:  () => import(/* webpackChunkName: "HelloWorld" */ './components/goods.vue')
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component:  () => import(/* webpackChunkName: "HelloWorld" */ './components/shopcar.vue')
    },
    {
      path: '/coupon',
      name: 'coupon',
      component:  () => import(/* webpackChunkName: "HelloWorld" */ './components/coupon.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component:  () => import(/* webpackChunkName: "HelloWorld" */ './views/mains/profile.vue')
    },
    {
      path: '/changemobile',
      name: 'changemobile',
      component:  () => import(/* webpackChunkName: "HelloWorld" */ './views/mains/changemobile.vue')
    },

    {
      path: '/product',
      name: 'product',
      component:  () => import(/* webpackChunkName: "product" */ './views/product.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children:[
        {
          path: 'remake',
          component:  () => import(/* webpackChunkName: "HelloWorld" */ './components/HelloWorld.vue')
        }
      ]
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

    },

  ]
})
