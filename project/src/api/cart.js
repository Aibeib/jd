import { get, post } from '../utils/request'

//添加购物车
export const reqAddcart = (data) => post('/api/v1/shop_carts', data)

//获取购物车列表
export const reqCartlist = () => get('/api/v1/shop_carts')  //看api,不需要传参数