import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/coupon/list',
    method: 'get',
    params
  })
}

export function couponDetail(params) {
  return request({
    url: '/couponDetail/list',
    method: 'get',
    params
  })
}

export function recordData(params) {
  return request({
    url: '/bill/record/list',
    method: 'get',
    params
  })
}

export function billInfo(params) {
  return request({
    url: '/bill/info',
    method: 'get',
    params
  })
}

export function orderList(params) {
  return request({
    url: '/bill/orderList',
    method: 'get',
    params
  })
}

export function invoiceList(params) {
  return request({
    url: '/bill/invoiceList',
    method: 'get',
    params
  })
}

export function rechargeList(params) {
  return request({
    url: '/bill/financeDetail/rechargeList',
    method: 'get',
    params
  })
}

export function withdrawList(params) {
  return request({
    url: '/bill/financeDetail/withdrawList',
    method: 'get',
    params
  })
}

export function serviceFinanceList(params) {
  return request({
    url: '/bill/financeDetail/serviceFinanceList',
    method: 'get',
    params
  })
}

export function detailList(params) {
  return request({
    url: '/bill/financeDetail/detailList',
    method: 'get',
    params
  })
}

export function accountData(params) {
  return request({
    url: '/bill/financeDetail/b1Account',
    method: 'get',
    params
  })
}

