import Vue from 'vue'
import VueRouter from 'vue-router'



// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}




Vue.use(VueRouter)

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: "Login",
            component: () => import("../views/login"),
            meta: {
                isShow: false,

            }
        },
        {
            path: '/reg',
            name: "Reg",
            component: () => import("../views/reg"),
            meta: {
                isShow: false,

            }
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import("../views/home"),
            meta: {
                isShow: true
            }
        },
        {
            path: '/classify',
            name: "Classify",
            component: () => import("../views/classify"),
            meta: {
                isShow: true
            }
        },
        {

            path: '/sousuo',
            name: 'Sousuo',
            component: () => import("../views/sousuo"),
            meta: {
                isShow: false
            }
        },
        {
            path: '/classify',
            name: "Classify",
            component: () => import("../views/classify"),
            meta: {
                isShow: true
            },
        },
        {

            path: '/surprise',
            name: "Surprise",
            component: () => import("../views/surprise"),
            meta: {
                isShow: true

            }
        },
        {
            path: '/cart',
            name: "Cart",
            component: () => import("../views/cart"),
            meta: {
                isShow: true
            }
        },
        {
            path: '/mine',
            name: "Mine",
            component: () => import("../views/mine"),
            meta: {
                isShow: true
            }
        },
        {

            path: '/mines',
            name: "Mines",
            component: () => import("../views/mines"),
            meta: {
                isShow: true
            }
        },
        {
            path: '/detail',
            name: 'Detail',
            component: () => import("../views/detail"),
            meta: {
                isShow: false

            }
        },
    ],





})

export default router