// 引入封装的axios接口
import { get } from "../utils/request"

// 获取商品信息(文档)
// url
//   /api/v1/products
// method
//   get
// params
//   per   每一页显示的数量,默认10
//   page  当前页码,默认1
//   name  商品名字
//   product_category  分类id
// return
//   {
//     "totalCount": 14,   // 总记录数量
//     "pages": 1,         // 当前页码
//     "products": [...]
//   }

//商品列表
export const reqProducts = (data) => get('/api/v1/products', data)

// url
//   /api/v1/products/:id
// method
//   get
// return
//   {
//   }

//商品详情
export const reqProductDetail = (id) => get(`/api/v1/products/${id}`)