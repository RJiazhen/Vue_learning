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
  //   使用props接收route中设定的参数
  props: ["id", "title"],
};
</script>

<style>
</style>