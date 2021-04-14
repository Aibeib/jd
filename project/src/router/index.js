import Vue from 'vue'
import VueRouter from 'vue-router'


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
        {
            path: '/settlement',
            name: 'Settlement',
            component: () => import("../views/settlement"),
            meta: {
                isShow: false

            }
        },
    ],





})

export default router