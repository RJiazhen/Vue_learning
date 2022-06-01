<template>
  <h2>这里是About内容</h2>
</template>

<script>
export default {
  name: "About",

  //   组件内路由守卫
  //   通过路由规则进入时触发
  beforeRouteEnter(to, from, next) {
    console.log("触发About的进入路由内组件");
    next();
  },
  //   通过路由规则离开时触发
  beforeRouteLeave(to, from, next) {
    console.log();
    next();
  },
};
</script>
