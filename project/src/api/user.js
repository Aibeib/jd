import {post} from '../utils/request';

// 注册接口
export const reqRegister = (data) => post("/api/v1/auth/reg", data)

// 登录接口

export const reqLogin = (data) => post("/api/v1/auth/reg", data)