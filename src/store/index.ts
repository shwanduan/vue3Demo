/*
 * @Descripttion: 创建store
 * @Author: 段振宇
 * @version: 
 * @Date: 2022-08-09 17:44:29
 * @LastEditors: 段振宇
 */
import type { App } from "vue";
import { createPinia } from "pinia";
const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };