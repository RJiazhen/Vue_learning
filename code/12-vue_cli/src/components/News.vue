<template>
  <div>
    <p>路由生命周期钩子测试</p>
    <li>news001 <input type="text"> </li>
    <li>news002 <input type="text"> </li>
    <li>news003 <input type="text"> </li>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  //   路由的专用生命周期钩子，在激活后调用
  activated() {
    console.log("News组件激活了");
    this.timer = setInterval(() => {
      console.log("定时器还在使用");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 1000);
  },
  //   路由的专用生命周期钩子，在失活后调用
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>