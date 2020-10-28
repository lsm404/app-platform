import request from '@/utils/request'

export function b1userList(params) {
  return request({
    url: '/b1user/list',
    method: 'get',
    params
  })
}

export function b2userList(params) {
  return request({
    url: '/b2user/list',
    method: 'get',
    params
  })
}

export function b3userList(params) {
  return request({
    url: '/b3user/list',
    method: 'get',
    params
  })
}

export function tradeList(params) {
  return request({
    url: '/trade/list',
    method: 'get',
    params
  })
}
