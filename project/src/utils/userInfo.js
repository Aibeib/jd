import { get, post, put, delate } from "./request";
/* 获取用户信息 */
export function loadUserInfo() {
  return get("/api/v1/users/info");
}
/* 修改用户信息 */
export function modifyUserInfo(nickName, avatar) {
  return post("/api/v1/users/change_info", {
    nickName,
    avatar,
  });
}
/* 修改用户密码 */
export function modifyUserPassword(oldPassword, password) {
  return post("/api/v1/users/change_pwd", {
    oldPassword,
    password,
  });
}
// 收货地址列表
export function addList() {
  return get("/api/v1/addresses");
}
// 获取单条收货地址
export function AnAddress(id) {
  return get("/api/v1/addresses/" + id);
}
// 收货地址新增
export function newAddress(params) {
  return post("/api/v1/addresses", params
  );
}
// 收货地址修改
export function editAddress(id, params) {
  return put("/api/v1/addresses/" + id, params);
}
// 收货地址删除
export function delAddress(id) {
  return delate("/api/v1/addresses/" + id);
}