import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'
import { routes as element } from '@modules/element'
import { routes as auth } from '@modules/auth'
import { routes as home } from '@modules/home'
import { routes as users } from '@modules/users'
import { routes as notifications } from '@modules/notifications'

Vue.use(Router)

const AppRoute = {
  path: '/',
  component: () => import('../app'),
  children: [...auth, ...element, ...home, ...users, ...notifications]
}

const routes = [AppRoute]

const router = new Router({
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  mode: 'history'
})

router.beforeEach(beforeEach)

export default router
