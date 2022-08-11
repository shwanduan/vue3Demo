<!--
 * @Descripttion: 学服档案页面
 * @Author: 段振宇
 * @version: 
 * @Date: 2022-08-10 13:26:07
 * @LastEditors: 段振宇
-->
<template>
  <div id="app-container">
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane label="User" name="first"></el-tab-pane>
      <el-tab-pane label="Config" name="second"></el-tab-pane>
      <el-tab-pane label="Role" name="third"></el-tab-pane>
      <el-tab-pane label="Task" name="fourth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';
const dpNumberList = ['dp55890854', 'dp50844643'];

const activeName = ref('first');

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, '1111111111');
};
</script>

<style lang="less" scoped>
#app-container {
  height: 100vh;
  width: 100%;
  margin: 0 auto;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
