<!--
 * @Descripttion: 学籍查询页面
 * @Author: 段振宇
 * @version: 
 * @Date: 2022-08-10 15:49:26
 * @LastEditors: 段振宇
-->
<template>
  <div id="app-container">
    <div class="app-warp">
      <div class="title">学籍查询</div>
      <div class="select">
        <el-select
          v-model="value"
          class="m-2"
          size="large"
          @change="getSeclectValue"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-input v-model="input" :placeholder="placeholder" />
        <el-button type="primary" size="large">查询</el-button>
      </div>
      <div class="studentInfo">
        <div
          v-for="(item, index) of array"
          :key="index"
          class="studentInfoItem"
        >
          <div>
            <div>学员姓名: {{ item.name }}</div>
            <div>大鹏号： {{ item.dpNumber }}</div>
          </div>
          <div>
            <div>出生年月：{{ item.bornDate }}</div>
            <div>量账号： {{ item.inNumber }}</div>
          </div>
          <div>
            <div>学员报名时间：{{ item.applyDate }}</div>
            <div>学籍手机号： {{ item.phone }}</div>
          </div>
          <div>报名信息： {{ item.applyInfo }}</div>
          <div class="eventButton">
            <el-button type="warning">发送学员信息</el-button>
            <el-button type="warning">绑定当前学员</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('Option1');
const input = ref('');
const placeholder = ref('请输入大鹏号');
const options = [
  {
    value: 'Option1',
    label: '大鹏号',
  },
  {
    value: 'Option2',
    label: '学员姓名',
  },
];
const array = [
  {
    name: '裘筱雯',
    dpNumber: 'dp41057519',
    bornDate: 'X年X月X日',
    inNumber: 'abcd0612a',
    applyDate: 'XXX',
    phone: 'XXX',
    applyInfo: 'UI设计综合课(4 in 1)',
  },
  {
    name: '裘筱雯',
    dpNumber: 'dp41057519',
    bornDate: 'X年X月X日',
    inNumber: 'abcd0612a',
    applyDate: 'XXX',
    phone: 'XXX',
    applyInfo: 'UI设计综合课(4 in 1)',
  },
];
const getSeclectValue = (val: String) => {
  placeholder.value = val === 'Option1' ? '请输入大鹏号' : '请输入学员姓名';
};
</script>

<style lang="less" scoped>
#app-container {
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .app-warp {
    width: 95%;
    margin-top: 20px;
    .title {
      display: flex;
      justify-content: flex-start;
      font-size: 18px;
      color: #333333;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .select {
      display: grid;
      grid-template-columns: 20% 50% 20%;
      grid-template-rows: 100%;
      grid-gap: 3%;
      margin-bottom: 20px;
    }
    .studentInfo {
      width: 100%;
      .studentInfoItem {
        width: 95%;
        margin: 10px auto;
        padding: 10px;
        background: rgba(242, 242, 242, 1);
        .eventButton {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        > div {
          width: 100%;
          display: flex;
          margin-top: 10px;
          > div:nth-last-child(n + 1) {
            width: 50%;
            display: flex;
            justify-content: flex-start;
          }
        }
      }
    }
  }
}
</style>
