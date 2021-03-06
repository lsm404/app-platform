import Vue from 'vue'
import Router from 'vue-router'
// import { list } from '@/api/getRouter'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import menu from "../router/menuRouter"

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

const routes = [
  ...menu,
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/ding',
    name: 'ding',
    component: () => import('@/views/ding/index')
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/system',
    name: 'System',
    component: Layout,
    redirect: '/system/accountB1',
    meta: { title: '系统', icon: 'system' },
    children: [
      {
        path: 'accountB1',
        name: 'AccountB1',
        component: () => import('@/views/system/accountB1/index'),
        meta: { title: '系统管理员', icon: 'admin'}
      },
      {
        path: 'accountB2',
        name: 'AccountB2',
        component: () => import('@/views/system/accountB2/index'),
        meta: { title: '服务商管理员', icon: 'account' }
      },
      {
        path: 'accountB3',
        name: 'AccountB3',
        component: () => import('@/views/system/accountB3/index'),
        meta: { title: '站点管理员', icon: 'account' }
      },
      {
        path: 'trade',
        name: 'Trade',
        component: () => import('@/views/system/trade/index'),
        meta: { title: '行业管理', icon: 'trade' }
      },
      {
        hidden: true,
        path: 'b1info/:accountId',
        name: 'B1info',
        component: () => import('@/views/system/b1info/index'),
        meta: { title: 'q','activeMenu':'/system/accountB1' }
      },
      {
        hidden: true,
        path: 'b2info/:accountId',
        name: 'B2info',
        component: () => import('@/views/system/b2info/index'),
        meta: { title: '' }
      },
      {
        hidden: true,
        path: 'b3info/:accountId',
        name: 'B3info',
        component: () => import('@/views/system/b3info/index'),
        meta: { title: '修改B3管理员' }
      },
      {
        path: 'menuConfig',
        name: 'B3info',
        component: () => import('@/views/system/menuConfig/index'),
        meta: { title: '修改B3管理员' }
      }
    ]
  },

  {
    path: '/order',
    component: Layout,
    redirect: '/orderList',
    children: [{
      path: 'orderList',
      name: '订单列表',
      component: () => import('@/views/order/orderList.vue'),
      meta: {
        title: '订单列表',
        icon: 'form'
      }
    }]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/orderDetail',
    children: [{
      path: 'orderDetail',
      name: '订单详情',
      component: () => import('@/views/order/orderDetail.vue'),
      meta: {
        title: '订单详情',
        icon: 'form'
      }
    }]
  },
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes
  })

const router = createRouter()
console.log(routes, 2222)
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
