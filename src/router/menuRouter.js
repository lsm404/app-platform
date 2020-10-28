import Layout from '@/layout'
const menu = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { 'title': 'Dashboard', 'icon': 'dashboard' }
      }
    ]
  },
  //  供应商路由
  {
    path: '/supplier',
    component: Layout,
    redirect: '/supplier/supplierList',
    name: 'supplier',
    meta: { 'title': '供应商管理', 'icon': 'supplier' },
    children: [
      {
        path: 'supplierList',
        name: 'supplierList',
        hidden: true,
        component: () => import('@/views/supplier/supplierList.vue'),
        meta: { 'title': '供应商列表', 'icon': 'supplierList' },
      },
      {
        path: 'supplierInfo',
        name: 'addSupplier',
        hidden: true,
        component: () => import('@/views/supplier/component/addSupplier.vue'),
        meta: { 'title': '新增供应商', 'activeMenu': '/supplier/addSupplier' },
      },
      {
        path: 'qualification',
        name: 'qualification',
        hidden: true,
        component: () => import('@/views/supplier/qualification.vue'),
        meta: { 'title': '开票资质', 'icon': 'supplierList' },
      }
    ]
  },

  //  商品列表路由
  {
    path: '/shopping',
    component: Layout,
    redirect: '/shopping/shoppingList',
    name: 'shopping',
    meta: { 'title': '商品管理123', 'icon': 'shopping' },
    children: [
      {
        path: 'shoppingList',
        name: 'shoppingList',
        hidden: true,
        component: () => import('@/views/shopping/shoppingList.vue'),
        meta: { 'title': '商品列表', 'icon': 'shoppingList' },
      },
      {
        path: 'addShopping',
        name: 'addShopping',
        hidden: true,
        component: () => import('@/views/shopping/addShopping.vue'),
        meta: { 'title': '新增商品', 'icon': 'addShopping' },
      },
      {
        path: 'reviewShopping',
        name: 'reviewShopping',
        hidden: true,
        component: () => import('@/views/shopping/reviewShopping.vue'),
        meta: { 'title': '审核商品', 'icon': 'reviewShopping' },
      },
    ]
  },

  //  账单列表路由
  {
    path: '/bill',
    component: Layout,
    redirect: '/bill/billList',
    name: 'bill',
    meta: { 'title': '账单管理', 'icon': 'bill' },
    children: [
      {
        path: 'billList',
        name: 'billList',
        hidden: true,
        component: () => import('@/views/bill/billList.vue'),
        meta: { 'title': '账单列表', 'icon': 'billList' },
      },
      {
        path: 'settlementList',
        name: 'settlementList',
        hidden: true,
        component: () => import('@/views/bill/settlementList.vue'),
        meta: { 'title': '结算订单列表', 'icon': 'settlementList' },
      }
    ]
  }
]

export default menu
