import {http} from '@/utils/http'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

type LoginWxMinParams = {
  id: string
  openid: string
  token: string
}
/**
 * 微信小程序手机号登录
 * @param data
 */
export const postLoginWxMin = (data :LoginParams) => {
  return http({
    url: '/student/login/phone',
    method: 'POST',
    data,
  })
}
/**
 * 微信小程序直接登录
 * @param data
 */
export const postLogin = (data: LoginWxMinParams) => {
  return http({
    url: '/student/login/login',
    method: 'POST',
    data,
  })
}
