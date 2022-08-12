/*
 * @Descripttion:
 * @Author: 段振宇
 * @version:
 * @Date: 2022-08-10 13:25:26
 * @LastEditors: 段振宇
 */
import {
  Router,
  RouteMeta,
  createRouter,
  RouteRecordRaw,
  RouteComponent,
  RouteRecordName,
  createWebHashHistory
} from 'vue-router';

// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import xfFile from '/@/views/xfFile.vue';
import studentStatusQuery from '/@/views/studentStatusQuery.vue';


// 2. 定义路由配置
const routes = [
  { path: '/', redirect: '/studentStatusQuery' },
  { path: '/xfFile', name: 'xfFile', component: xfFile },
  { path: '/studentStatusQuery', name: 'studentStatusQuery', component: studentStatusQuery },
];

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHashHistory(),
  // 采用 history 模式
  // history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
