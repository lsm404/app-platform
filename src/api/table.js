import request from '@/utils/request'
import fetch from '@/utils/fetch'
export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
export function getsku(params) {
  return request({
    url: '/shop/skulist',
    method: 'get',
    params
  })
}
export function getShopItem(params) {
  return request({
    url: '/shop/shopitem',
    method: 'get',
    params
  })
}
export function getShoplist(params) {
  return fetch({
    url: 'http://api.develop.yqtb2b.com/platform/product/getProductPageList',
    method: 'post',
    params
  })
}
