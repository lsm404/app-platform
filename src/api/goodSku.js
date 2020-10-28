import fetch from '@/utils/fetch'

export function getSkuInf(sn) {
  return fetch({
    url: '/item/b1_basic_info?item_sn=' + sn,
    method: 'get'
  })
}

export function getSortOne() {
  return fetch({
    url: '/common/first_category_options',
    method: 'get'
  })
}

export function getSortTwo(id) {
  return fetch({
    url: '/common/second_category_options/' + id,
    method: 'get'
  })
}

export function getSortThree(id) {
  return fetch({
    url: '/common/third_category_options/' + id,
    method: 'get'
  })
}

export function getTag(id) {
  return fetch({
    url: '/common/item_tag_options/' + id,
    method: 'get'
  })
}

export function submitSku(id, data) {
  return fetch({
    url: '/item/b1_basic_info/' + id,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    method: 'post',
    data
  })
}
