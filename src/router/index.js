import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import File from '../views/File.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

//将路由与组件进行映射
const routes = [
    //主路由
    {
        path: '/',
        component: Main,
        redirect: '/home', //当路径为/时重定向到home
        children: [
            { path: 'home', name: 'home', component: Home },
            { path: 'user', name: 'user', component: User },
            { path: 'file', name: 'file', component: File },
            { path: 'page1', name: 'page1', component: PageOne },
            { path: 'page2', name: 'page2', component: PageTwo }
        ]
    },
    {
        path:'/login',
        name:'login', 
        component:Login
    }
]


//创建route实例，传routes配置
const router = new VueRouter({
    routes //相当于routes: routes
})

export default router //route实例进行暴露