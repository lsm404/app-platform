import fetch from '@/utils/fetch'
/**
 * 订单列表商品详情
 * @param params
 */

export function orderList(params) {
  return fetch({
    url: '/b1order/order/orderList',
    method: 'get',
    params
  })
}
/**
 * 订单列表售后页面
 * @param params
 */

export function afterSalesList(params) {
  return fetch({
    url: '/b1order/order/afterSalesList',
    method: 'get',
    params
  })
}
/**
 * 订单列表售后详情
 * @param params
 */

export function itemRefundDateil(params) {
  return fetch({
    url: '/b1order/order/itemRefundDateil',
    method: 'get',
    params
  })
}
/**
 * 订单列表商品详情导出
 * @param params
 */

export function exportOrder(params) {
  return fetch({
    url: '/b1order/order/exportOrder',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    method: 'post',
    params
  })
}
/**
 * 商品一级分类
 * @param params
 */

export function getGoodsList() {
  return fetch({
    url: '/b1order/Order/getGoodsList',
    method: 'get'
  })
}

/**
 * 商品二级分类
 * @param params
 */

export function sortListForSel(params) {
  return fetch({
    url: '/b1order/Order/sortListForSel',
    method: 'get',
    params
  })
}

/**
 * 商品三级分类
 * @param params
 */
export function categoryListForSel(params) {
  return fetch({
    url: '/b1order/Order/categoryListForSel',
    method: 'get',
    params
  })
}
/**
 * 售后商品标签一级
 *
 */
export function getGoodsLable() {
  return fetch({
    url: '/b1order/Order/getGoodsLable',
    method: 'get'
  })
}
/**
 * 售后商品标签二级
 * @param params
 */
export function getTagOptions(params) {
  return fetch({
    url: '/b1order/Order/getTagOptions',
    method: 'get',
    params
  })
}
/**
 * 订单详情
 * @id
 */

export function orderDetail(params) {
  return fetch({
    url: '/b1order/order/orderDetail',
    method: 'get',
    params
  })
}
/**
 * 确认操作中获取物流
 *
 */

export function getLogistics() {
  return fetch({
    url: '/b1order/order/getLogistics',
    method: 'get'
  })
}
/**
 * 确认操作中提交物流信息
 *
 */

export function passMsgSubmit(params) {
  return fetch({
    url: '/b1order/order/passMsgSubmit',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    method: 'post',
    params
  })
}
/**
 * 售后填写物流信息
 *
 */

export function itemRefundWithAgree(params) {
  return fetch({
    url: '/b1order/order/itemRefundWithAgree',
    method: 'get',
    params
  })
}
