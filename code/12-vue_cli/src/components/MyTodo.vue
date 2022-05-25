<template>
  <li class="mytodo">
    <!-- 使用:checked="todo.done"动态指定checked标签属性有还是没有，当todo.done为true时则有，反之则无 -->
    <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)" />
    <span>{{ todo.title }}</span>
    <button class="btn btn-danger" @click="ConfirmDeleteTodo(todo.id)">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: "mytodo",
  props: ["todo"],
  methods: {
    handleCheck(id) {
      // 调用$bus事件对其他组件的数据进行操作
      this.$bus.$emit("checkTodo", id);
    },
    ConfirmDeleteTodo(id) {
      if (confirm("确认删除吗？")) {
        this.$bus.$emit("deleteTodo", id);
      }
    },
  },
};
</script>

<style>
.mytodo {
  margin-top: 5px;
}
.mytodo input {
  margin-right: 10px;
}

li:hover {
  background-color: #ccc;
}

li:hover button {
  display: block;
}

.btn {
  display: none;
  float: right;
  width: 50px;
  height: 100%;
  border-radius: 5px;
}
.btn:hover {
  background-color: red;
}
</style>