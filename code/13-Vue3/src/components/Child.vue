<template>
  <div class="child">
    <h3>我是child组件（祖）</h3>
    <son />
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "Child",
  components: { Son },
};
</script>

<style>
.child {
  background-color: aqua;
  padding: 10px;
}
</style>