/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsermobile(phone) {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  return reg.test(phone)
}
