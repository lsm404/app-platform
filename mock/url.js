// import Mock from 'mockjs'
// import Layout from '@/layout'
const data = [
  {
    "path": '',
    'meta': { 'title': '系统', 'icon': 'system' },
    'children': [
      {
        'path': '/system/accountB1',
        'meta': { 'title': '系统管理员', 'icon': 'admin'}
      },
      {
        'path': '/system/accountB2',
        'meta': { 'title': '服务商管理员', 'icon': 'account' }
      },
      {
        'path': '/system/accountB3',
        'meta': { 'title': '站点管理员', 'icon': 'account' }
      },
      {
        'path': '/system/trade',
        'meta': { 'title': '行业管理', 'icon': 'trade' }
      },
      {
        'path': '/system/menuConfig',
        'meta': { 'title': '菜单配置' }
      }
    ]
  },
  {
    'path': '/supplier',
    'meta': { 'title': '供应商管理', 'icon': 'system'},
    'redirect': '/supplier',
    'children': [
      {
        'path': '/supplier/supplierList',
        'meta': { 'title': '供应商列表', 'icon': 'account'}
      },
      {
        'path': '/supplier/supplierInfo',
        'meta': { 'title': '供应商基本信息', 'icon': 'account'}
      },
      {
        'path': '/supplier/qualification',
        'meta': { 'title': '供应商开票资质', 'icon': 'account' }
      },
    ]
  },
  {
    'path': '/order',
    'component': 'Layout',
    'redirect': '/order',
    'name': 'order',
    'meta': { 'title': '订单管理', 'icon': 'example' },
    'children': [
      {
        'path': 'orderList',
        'name': 'orderList',
        'hidden': false,
        'component': 'order/orderList',
        'meta': { 'title': '订单列表'}
      }
    ]
  },
  {
    'path': '/shopping',
    'meta': { 'title': '商品管理', 'icon': 'system'},
    'redirect': '/shopping',
    'children': [
      {
        'path': '/shopping/shoppingList',
        'meta': { 'title': '商品列表', 'icon': 'account'}
      },
      {
        'path': '/shopping/addShopping',
        'meta': { 'title': '新增商品', 'icon': 'account'}
      },
      {
        'path': '/shopping/reviewShopping',
        'meta': { 'title': '审核商品', 'icon': 'account'}
      },
    ]
  },
  {
    'path': '/bill',
    'meta': { 'title': '账单管理', 'icon': 'system'},
    'redirect': '/bill',
    'children': [
      {
        'path': '/bill/billList',
        'meta': { 'title': '账单列表', 'icon': 'account'}
      },
      {
        'path': '/bill/settlementList',
        'meta': { 'title': '结算订单列表', 'icon': 'account'}
      }
    ]
  },
]
export default [
  {
    url: '/router/list',
    type: 'get',
    response: config => {
      const items = data
      return {
        code: 200,
        data: {
          // total: items.length,
          items: items
        }
      }
    }
  }
]
