import request from '@/utils/request'

export function list(params) {
  return request({
    url: '/router/list',
    method: 'get',
    params
  })
}
