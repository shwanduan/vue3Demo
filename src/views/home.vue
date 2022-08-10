<!--
 * @Descripttion: 测试路由是否成功
 * @Author: 段振宇
 * @version: 
 * @Date: 2022-08-10 13:26:07
 * @LastEditors: 段振宇
-->
<template>
  <div>我是home路由</div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
export default {
  name: '',
  setup() {
    console.log('1-开始创建组件-setup');
    const data = reactive({});
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount');
    });
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted');
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
<style scoped lang="less"></style>
