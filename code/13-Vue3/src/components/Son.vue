<template>
  <div class="son">
    <h3>我是son组件（祖）{{name}}-{{price}}</h3>
  </div>
</template>

<script>
import { toRefs } from "vue";
import { inject } from "@vue/runtime-core";
export default {
  name: "Son",
  setup() {
    let car = inject("car");
    console.log(car, "***");
    return { ...toRefs(car) };
  },
};
</script>

<style>
.son {
  background-color: rgb(255, 127, 255);
  padding: 10px;
}
</style>