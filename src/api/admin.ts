import request from '@/utils/request'
/**
 *
 * 员工管理
 *
 **/
// 登录
export const login = (data: any) =>
  request({
    'url': '/manage/login',
    'method': 'post',
    data: data
  })

  // 退出
 export const adminLogout = (params: any) =>
 request({
   'url': `/manage/logout`,
   'method': 'post',
   params
 })
