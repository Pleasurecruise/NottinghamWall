import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'
import locale from 'element-plus/dist/locale/zh-cn.js'

//添加全局路由守卫
router.beforeEach((to, from, next) => {
    // 从 localStorage 中获取 token
    const token = localStorage.getItem('token')

    if (!token && to.path !== '/login') {
        next('/login')
    } else {
        next()
    }
})

const app = createApp(App);
const pinia = createPinia();
const persist = createPersistedState();
pinia.use(persist);
app.use(pinia);
app.use(router);
app.use(ElementPlus, { locale });
app.mount('#app')