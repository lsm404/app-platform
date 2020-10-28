import Mock from 'mockjs'

const Random = Mock.Random

const b1userData = Mock.mock({
  'items|20': [{
    id: '@id',
    login_account: Random.cname(),
    nick_name: Random.cname(),
    role_id: '@id',
    role_name: '系统管理员',
    mobile: '16688886666',
    login_time: '@datetime',
    last_login_ip: '121.23.33',
    intro: Random.ctitle(),
    status: Random.boolean()
  }],
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const b2userData = Mock.mock({
  'items|20': [{
    id: '@id',
    login_account: Random.cname(),
    nick_name: Random.cname(),
    role_id: '@id',
    role_name: '系统管理员',
    business: {
      id: '@id',
      name: Random.ctitle()
    },
    mobile: '16688886666',
    login_time: '@datetime',
    last_login_ip: '121.23.33',
    status: Random.boolean()
  }],
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const b3userData = Mock.mock({
  'items|20': [{
    id: '@id',
    login_account: Random.cname(),
    b2_name: Random.ctitle(),
    nick_name: Random.cname(),
    business: {
      id: '@id',
      type: '现金商城',
      name: Random.ctitle()
    },
    mobile: '16688886666',
    login_time: '@datetime',
    last_login_ip: '121.23.33',
    status: Random.boolean()
  }],
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

const tradeData = Mock.mock({
  'items|20': [{
    id: '@id',
    name: Random.ctitle(),
    create_time: '@datetime'
  }],
  total: Random.natural(1, 100),
  last_page: Random.natural(1, 100),
  pageNo: 1,
  pageSize: 20
})

export default [
  {
    url: '/b1user/list',
    type: 'get',
    response: config => {
      const items = b1userData.items
      return {
        code: 200,
        data: {
          items: items
        },
        total: b1userData.total,
        last_page: b1userData.last_page,
        pageNo: b1userData.pageNo,
        pageSize: b1userData.pageSize
      }
    }
  },
  {
    url: '/b2user/list',
    type: 'get',
    response: config => {
      const items = b2userData.items
      return {
        code: 200,
        data: {
          items: items
        },
        total: b1userData.total,
        last_page: b1userData.last_page,
        pageNo: b1userData.pageNo,
        pageSize: b1userData.pageSize
      }
    }
  },
  {
    url: '/b3user/list',
    type: 'get',
    response: config => {
      const items = b3userData.items
      return {
        code: 200,
        data: {
          items: items
        },
        total: b1userData.total,
        last_page: b1userData.last_page,
        pageNo: b1userData.pageNo,
        pageSize: b1userData.pageSize
      }
    }
  },
  {
    url: '/trade/list',
    type: 'get',
    response: config => {
      const items = tradeData.items
      return {
        code: 200,
        data: {
          items: items
        },
        total: b1userData.total,
        last_page: b1userData.last_page,
        pageNo: b1userData.pageNo,
        pageSize: b1userData.pageSize
      }
    }
  }
]
