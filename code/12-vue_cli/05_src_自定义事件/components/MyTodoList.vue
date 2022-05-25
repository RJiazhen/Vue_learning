<template>
  <div class="mytodolist">
    <ul>
      <my-todo
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import MyTodo from "./MyTodo.vue";
export default {
  name: "MyTodoList",

  components: {
    MyTodo,
  },
  props: ["todos", "checkTodo", "deleteTodo"],
};
</script>

<style>
.mytodolist {
  width: 80%;
  margin: 10px 10%;
  border-radius: 10px;
}
</style>