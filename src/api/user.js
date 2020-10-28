import fetch from '@/utils/fetch'

export function login(data) {
  return fetch({
    url: '/system_user/account_login',
    method: 'post',
    data
  })
}

export function dingCodeLogin(code) {
  return fetch({
    url: '/auth/ding_talk_login?code=' + code,
    method: 'get'
  })
}

export function getInfo() {
  return fetch({
    url: '/system_user/login_user_info',
    method: 'get'
  })
}

export function logout() {
  return fetch({
    url: '/system_user/logout',
    method: 'get'
  })
}
