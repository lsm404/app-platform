import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { list } from '@/api/getRouter'
import Layout from '@/layout'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar

  // console.log(store.state.user.rout, 'rrrrr')
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    store.dispatch('user/getRouter')
    if (to.path === '/login' || to.path === '/ding') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          // await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      if (to.name === 'ding') {
        next()
      } else {
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  // list().then(data => {
  //   // console.log(data.data.items, '数据路由')
  //   data.data.items.map(item => {
  //     item.path = `${item.path}`
  //     item.component = Layout
  //     item.children.map(child => {
  //       const path = child.component
  //       if (child.children) {
  //         // console.log(child.children, 'menuF')
  //         child.children.map(childer => {
  //           if (childer.children) {
  //             // console.log(childer.children, 11)
  //             childer.children.map(sunsun => {
  //               const path = sunsun.component
  //               // console.log(path, 'menu1')
  //               sunsun.component = resolve => require([`@/views/${path}.vue`], resolve)
  //             })
  //           }
  //           const path = childer.component
  //           // console.log(path, 2222)
  //           childer.component = resolve => require([`@/views/${path}.vue`], resolve)
  //         })
  //       }
  //       child.component = resolve => require([`@/views/${path}.vue`], resolve)
  //       // child.component = () => import('@/views/login/index.vue')
  //     })
  //   })
  //   router.options.routes = data.data.items.slice(0)
  //   const routes = data.data.items.slice(0)
  //   // console.log(routes, 7777)
  //   router.addRoutes(routes)
  //   store.dispatch('user/getRouter')
  //   // console.log(router.options.routes, 999999)
  //   // next(to)
  // })
  NProgress.done()
})
