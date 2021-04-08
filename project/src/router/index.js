import Vue from 'vue'
import VueRouter from 'vue-router'


Vue .use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect: '/home'
        },
        {
            path:'/login',
            name:"Login",
            component:() => import("../views/login")
        },
        {
            path:'/reg',
            name:"Reg",
            component:() => import("../views/reg")
        },
        {
            path:'/home',
            name:'Home',
            component: () => import("../views/home")
        },
        {
            path:'/classify',
            name:"Classify",
            component:() => import("../views/classify")
        },
        {
            path:'/surprise',
            name:"Surprise",
            component:() => import("../views/surprise")
        },
        {
            path:'/cart',
            name:"Cart",
            component:() => import("../views/cart")
        },
        {
            path:'/mine',
            name:"Mine",
            component:() => import("../views/mine")
        },
        {
            path:'/detail',
            name:'Detail',
            component:() => import("../views/detail")
        },
    ]
})

export default router