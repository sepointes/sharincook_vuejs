import Vue from 'vue'
import Router from 'vue-router'
import RecipeShow from './views/RecipeShow'
import RecipeList from './views/RecipeList'
import RecipeCreate from './views/RecipeCreate'
import User from './views/User'
import NotFoundComponent from './views/NotFoundComponent'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'home',
          component: RecipeList
      },
      {
          path: '/',
          name: 'recipe-list',
          component: RecipeList
      },
    {
      path: '/recipe',
      name: 'recipe-show',
      component: RecipeShow
    },
      {
          path: '/recipe/new',
          name: 'recipe-create',
          component: RecipeCreate
      },
      {
          path: '/user/:username',
          name: 'user',
          component: User,
          props:true
      },
      {
        path: '*',
        component: NotFoundComponent
      }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
