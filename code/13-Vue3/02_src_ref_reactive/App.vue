<template>

  <h1>信息</h1>
  <h2>姓名{{name}}</h2>
  <h2>年龄{{age}}</h2>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
// 导入渲染函数
// import { h } from "vue";
// 导入ref函数
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // vue3中要修改数据的值，且进行动态更新则需要使用ref方法，并修改数据对象的value值
    let name = ref("zs");
    let age = ref(18);

    //   方法
    function changeInfo() {
      (name.value = "ls"), (age.value = 40);
    }

    // 把要用的内容返回
    return { name, age, changeInfo };
    // return () => h("h1", "test");
  },
};
</script>

<style>
</style>