import Mock from 'mockjs'

const Random = Mock.Random

const data = Mock.mock({
  'items|20': [{
    card_id: '@id',
    card_type: 1,
    card_name: Random.cparagraph(1),
    card_num: Random.natural(100, 1000),
    card_amount: '100.00',
    exchange_type_text: '普通',
    B2_name: '金不换商城',
    B3_name: '金不换现金商城',
    create_time: '@datetime'
  }],
  card_type: 1,
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const couponDate = Mock.mock({
  'items|20': [{
    card_ticket_id: '@id',
    card_sn: 'QQ' + Random.natural(),
    card_amount: Random.natural(100, 1000),
    user_name: Random.cname(),
    use_time: '@datetime',
    create_time: '@datetime',
    status: '已使用'
  }],
  card_id: '@id',
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const recordList = Mock.mock({
  'items|20': [{
    id: '@id',
    business_name: '金不换礼业员工福利商城',
    amount: Random.natural(100, 1000),
    invoice_sn: 'D' + Random.natural(),
    create_time: '@datetime',
    source_type: 'B1自营商品',
    status: '审核已通过'
  }],
  invoice_type: 1,
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const billDetail = Mock.mock({
  'items': {
    amount: Random.natural(100, 1000),
    status: 2,
    number: 'D' + Random.natural(),
    title: Random.csentence(5, 10),
    type: 1,
    date: '@datetime',
    name: '金不换',
    phone: '18888888888',
    address: Random.county(true)
  }
})

const orderList = Mock.mock({
  'items|10': [{
    order_id: '@id',
    order_sn: Random.natural(),
    confirm_time: '@datetime',
    number: Random.natural(1, 10),
    price: Random.natural(100, 1000),
    amount: Random.natural(100, 1000),
    item_name: Random.csentence()
  }],
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const invoiceList = Mock.mock({
  'items|10': [{
    order_id: '@id',
    order_sn: Random.natural(),
    confirm_time: '@datetime',
    number: Random.natural(1, 10),
    price: Random.natural(100, 1000),
    amount: Random.natural(100, 1000),
    source_type: '京东商品',
    item_name: Random.csentence()
  }],
  total_amount: Random.natural(10000, 100000),
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const rechargeData = Mock.mock({
  'items|20': [{
    id: Random.natural(1, 200),
    amount: Random.natural(100, 1000),
    business_name: '壹企通商城',
    type_name: '转账到预付',
    status: 1,
    create_time: '@datetime',
    update_time: '',
    img_url: Random.image()
  }],
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const withdrawData = Mock.mock({
  'items|20': [{
    id: '@id',
    amount: Random.natural(100, 1000),
    business_name: '壹企通商城',
    create_time: '@datetime',
    status_name: '未处理',
    drawWay: '现金提款',
    update_time: ''
  }],
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const serviceFinanceData = Mock.mock({
  'items|20': [{
    id: Random.natural(1, 200),
    name: '金不换',
    amount: Random.natural(100, 1000),
    credit: Random.natural(100, 1000)
  }],
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const detailData = Mock.mock({
  'items|10': [{
    id: '@id',
    change_type_name: '运费',
    change_type: 7,
    business_name: '壹企通商城',
    amount: Random.natural(100, 1000),
    order_id: '@id',
    order_sn: Random.natural(),
    create_time: '@datetime'
  }],
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const accountData = Mock.mock({
  'items': {
    advance: Random.natural(20000, 1000000),
    credit_amount: Random.natural(20000, 1000000),
    cash_amount: Random.natural(20000, 1000000)
  }
})

export default [
  {
    url: '/coupon/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 200,
        data: {
          items: items
        },
        total: data.total,
        card_type: data.card_type,
        last_page: data.last_page,
        pageNo: data.pageNo,
        pageSize: data.pageSize
      }
    }
  },
  {
    url: '/couponDetail/list',
    type: 'get',
    response: config => {
      const items = couponDate.items
      return {
        code: 200,
        data: {
          items: items
        },
        card_id: data.card_id,
        total: data.total,
        card_type: data.card_type,
        last_page: data.last_page,
        pageNo: data.pageNo,
        pageSize: data.pageSize
      }
    }
  },
  {
    url: '/bill/record/list',
    type: 'get',
    response: config => {
      const items = recordList.items
      return {
        code: 200,
        data: {
          items: items
        },
        invoice_type: data.invoice_type,
        total: data.total,
        last_page: data.last_page,
        pageNo: data.pageNo,
        pageSize: data.pageSize
      }
    }
  },
  {
    url: '/bill/info',
    type: 'get',
    response: config => {
      const items = billDetail.items
      return {
        code: 200,
        data: {
          items: items
        }
      }
    }
  },
  {
    url: '/bill/orderList',
    type: 'get',
    response: config => {
      const items = orderList.items
      return {
        code: 200,
        data: {
          items: items
        },
        total: data.total,
        last_page: data.last_page,
        pageNo: data.pageNo,
        pageSize: data.pageSize
      }
    }
  },
  {
    url: '/bill/invoiceList',
    type: 'get',
    response: config => {
      const items = invoiceList.items
      return {
        code: 200,
        data: {
          items: items
        },
        total_amount: data.total_amount,
        total: data.total,
        last_page: data.last_page,
        pageNo: data.pageNo,
        pageSize: data.pageSize
      }
    }
  },
  {
    url: '/bill/financeDetail/rechargeList',
    type: 'get',
    response: config => {
      const items = rechargeData.items
      return {
        code: 200,
        data: {
          items: items
        },
        total: data.total,
        last_page: data.last_page,
        pageNo: data.pageNo,
        pageSize: data.pageSize
      }
    }
  },
  {
    url: '/bill/financeDetail/withdrawList',
    type: 'get',
    response: config => {
      const items = withdrawData.items
      return {
        code: 200,
        data: {
          items: items
        },
        total: data.total,
        last_page: data.last_page,
        pageNo: data.pageNo,
        pageSize: data.pageSize
      }
    }
  },
  {
    url: '/bill/financeDetail/serviceFinanceList',
    type: 'get',
    response: config => {
      const items = serviceFinanceData.items
      return {
        code: 200,
        data: {
          items: items
        },
        total: data.total,
        last_page: data.last_page,
        pageNo: data.pageNo,
        pageSize: data.pageSize
      }
    }
  },
  {
    url: '/bill/financeDetail/detailList',
    type: 'get',
    response: config => {
      const items = detailData.items
      return {
        code: 200,
        data: {
          items: items
        },
        total: data.total,
        last_page: data.last_page,
        pageNo: data.pageNo,
        pageSize: data.pageSize
      }
    }
  },
  {
    url: '/bill/financeDetail/b1Account',
    type: 'get',
    response: config => {
      const items = accountData.items
      return {
        code: 200,
        data: {
          items: items
        }
      }
    }
  }
]
