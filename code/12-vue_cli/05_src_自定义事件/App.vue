<template>
  <div class="app">
    <!-- 将addTodo方法传给myinput，用于接收数据 -->
    <MyInput @addTodo="addTodo" />
    <my-todo-list :todos="todos" @checkTodo="checkTodo" @deleteTodo="deleteTodo"/>
    <my-footer />
  </div>
</template>

<script>
import MyInput from "./components/MyInput.vue";
import MyTodoList from "./components/MyTodoList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: "001", title: "起床", done: true },
        { id: "002", title: "刷牙", done: false },
        { id: "003", title: "吃早饭", done: true },
      ],
    };
  },
  components: {
    MyInput,
    MyTodoList,
    MyFooter,
  },
  methods: {
    //   添加todo的方法
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
      console.log("test");
    },
    // 勾选或取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id != id;
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.app {
  margin-top: 20px;
}
</style>
