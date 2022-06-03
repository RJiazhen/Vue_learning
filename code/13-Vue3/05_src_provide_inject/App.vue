<template>
  <div class="app">
    <h3>我是app组件 {{name}}--{{price}}</h3>
    <Child />
  </div>
</template>

<script>
import { provide, reactive, toRefs } from "vue";
import Child from "./components/Child.vue";
export default {
  components: { Child },
  name: "App",
  setup() {
    let car = reactive({ name: "奔驰", price: 40 });
    provide('car', car) //给后代组件提供car数据
    return { ...toRefs(car) };
  },
};
</script>

<style>
.app {
  background-color: grey;
  padding: 10px;
}
</style>