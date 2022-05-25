<template>
  <div>
    <input
      class="input"
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
// 引入nanoid用于生成id
import { nanoid } from "nanoid";
export default {
  name: "MyInput",
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    add(event) {
      if (!event.target.value.trim()) return alert("输入不能为空");
      const todoObj = {
        id: nanoid(),
        title: event.target.value,
        done: false,
      };
      //   调用自定义事件将数据传回给App
      this.$emit("addTodo", todoObj);
      event.target.value = "";
    },
  },
};
</script>

<style scoped>
.input {
  width: 80%;
  height: 30px;
  align-items: center;
  margin: 0 10%;
  padding: 0 0 0 10px;
  border-radius: 10px;
}
</style>