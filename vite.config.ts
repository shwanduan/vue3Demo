/*
 * @Descripttion: 
 * @Author: 段振宇
 * @version: 
 * @Date: 2022-08-08 16:33:24
 * @LastEditors: 段振宇
 */
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // hack: `true; @import (reference) "${path.resolve("src/assets/css/base.less")}";`,
        },
        javascriptEnabled: true,
      },
    },
  }
})