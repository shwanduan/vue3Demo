/*
 * @Descripttion: 
 * @Author: 段振宇
 * @version: 
 * @Date: 2022-08-09 11:37:14
 * @LastEditors: 段振宇
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
