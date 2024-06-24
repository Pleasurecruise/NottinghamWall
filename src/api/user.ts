import request from '@/utils/request'
/**
 *
 *
 */
// 分页查询
export const getUserList = (params: any) =>
  request({
    'url': `/student/page`,
    'method': 'get',
    'params': params
  })
