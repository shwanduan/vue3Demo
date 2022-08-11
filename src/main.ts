/*
 * @Descripttion: 
 * @Author: 段振宇
 * @version: 
 * @Date: 2022-08-09 11:37:14
 * @LastEditors: 段振宇
 */
import { createApp } from 'vue'
import './style.css'
import '/@/style/index.less'
import App from './App.vue'
import router from './router'
import Vconsole from 'vconsole'
if (import.meta.env.VITE_APP_MODE == 'development') {
  console.log(import.meta.env.VITE_APP_MODE, 'development')
  new Vconsole()
} else {
  console.log(import.meta.env.VITE_APP_MODE, 'pro')
}
const app = createApp(App)
app.use(router)
app.mount('#app')
