import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
Vue.use(VueRouter)

//将路由与组件进行映射
const routes = [
    //主路由
    {
        path: '/',
        component: Main,
        children: [
            { path: 'home', component: Home },
            { path: 'user', component: User }
        ]
    }
]


//创建route实例，传routes配置
const router = new VueRouter({
    routes //相当于routes: routes
})

export default router //route实例进行暴露