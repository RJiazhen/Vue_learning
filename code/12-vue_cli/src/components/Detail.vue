<template>
  <div>
    <!-- 使用route.query进行参数的接收 -->
    <li>消息id：{{$route.query.id}}</li>
    <li>消息title：{{$route.query.title}}</li>
  </div>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style>
</style>