import Cookies from 'js-cookie'

export const isLogined = () => {
    if (Cookies.get("token")) {
        return true
    }
    return false
};

// 设置token
export const setToken = (token) => {
    Cookies.set("token", token)
};

// 获取token
export const getToken = () => {
    return Cookies.get("token")
};

// 移除token

export const removeToken = () => {
    Cookies.remove("token")
};