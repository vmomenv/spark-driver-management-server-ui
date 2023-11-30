import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import './api/mock'
import Cookies from 'js-cookie'  
Vue.config.productionTip = false
    //在vue中使用elementui
Vue.use(ElementUI);

//添加全局前置导航守卫
router.beforeEach((to,from,next)=>{
    //判断token存不存在
    const token = Cookies.get('token')
    //token不存在，说明当前用户未登录，应该跳转到登录页面
    if(!token && to.name !=='login'){
        next({ name:'login'})
    }else if(token && to.name ==='login'){//token存在，说明用户登录，此时跳转到首页
        next({name:'home'})
    }else{
        next()
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')