<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学校名称：{{ name }}</h2>
    <h2>x：{{ x }}</h2>
    <h2>y：{{ y }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "学校信息",
    };
  },

};
</script>
