<!--
 * @Descripttion: 
 * @Author: 段振宇
 * @version: 
 * @Date: 2022-08-09 11:37:14
 * @LastEditors: 段振宇
-->
<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
export default defineComponent({
  name: 'app',
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  computed: {
    currentLocale() {
      // return this.$storage.locale?.locale === "zh" ? zhCn : en;
      return zhCn;
    },
  },
});
</script>
<style lang="less" scoped></style>
