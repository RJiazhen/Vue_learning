<template>
  <input type="text" v-model="text">
  <h3>{{text}}</h3>
</template>

<script>
import { ref, customRef, track } from "vue";
export default {
  name: "App",
  setup() {
    function myRef(value) {
      let timer; //函数开始时定义一个变量当作定时器
      // 调用一个customRef方法，定义一个Ref
      return customRef((track, trigger) => {
        return {
          // get为读取该数据时调用的函数
          get() {
            track(); //通知vue追踪数据的变化
            return value;
          },
          // set为修改该数据时调用的函数
          set(newValue) {
            //   修改数据时先清楚原先的定时器，然后再开始新的定时器，防止高频修改引发的bug
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 重新解析模板
            }, 1000);
          },
        };
      });
    }
    // 使用ref设置数据
    let text = myRef("hello");

    return { text };
  },
};
</script>

<style>
</style>