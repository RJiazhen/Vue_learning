<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由携带query参数，用于传递参数 -->
        <!-- <router-link :to="`message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
        <!-- 使用对象携带query参数 -->
        <router-link :to="{
            path:'/home/message/detail',
            query:{
                id:m.id,
                title:m.title
            }
        }">
          {{m.title}}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style>
</style>