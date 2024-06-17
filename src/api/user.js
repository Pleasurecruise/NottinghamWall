//导入request.js请求工具
import request from '../utils/request.js'

//提供调用注册接口的函数
export const userRegisterService = (registerData) => {
    //借助于UrlSearchParams完成传递
    const params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key]);
    }
    return request.post('/user/register', params);
}

//提供调用登录接口的函数
export const userLoginService = (loginData) => {
    //借助于UrlSearchParams完成传递
    const params = new URLSearchParams()
    for (let key in loginData) {
        params.append(key, loginData[key]);
    }
    return request.post('/user/login', params);
}