<template>
  <div class="row">
    <div
      v-show="info.users"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 欢迎词 -->
    <h1 v-show="info.isFirst">Welcome to use</h1>
    <!-- 加载中 -->
    <h1 v-show="info.isLoading">Loading</h1>
    <!-- 错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      // 设置几个参数控制当前页面展示的内容
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  methods: {},
  mounted() {
    this.$bus.$on("updateListData", (dataObj) => {
      // 使用这种方法进行相同属性的覆盖
      this.info = { ...this.info, ...dataObj };
      console.log("dataObj:", dataObj);
    });
  },
};
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>