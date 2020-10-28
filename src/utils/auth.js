// const TokenKey = 'yqt_bms_token'

export function getToken() {
  // return localStorage.yqt_bms_token
  return '$2y$10$cUHEw2SgvVmFmT6SMuYqPOTqsR9V8TCvm.GKLkbJ59XxWHQ/s2Iye'
}

export function setToken(token) {
  localStorage.yqt_bms_token = token
}

export function removeToken() {
  return localStorage.removeItem('yqt_bms_token')
}
