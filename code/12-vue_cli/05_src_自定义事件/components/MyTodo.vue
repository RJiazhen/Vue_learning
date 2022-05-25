<template>
  <li class="mytodo">
    <!-- 使用:checked="todo.done"动态指定checked标签属性有还是没有，当todo.done为true时则有，反之则无 -->
    <input type="checkbox" :checked="todo.done" @click="handleCheck(todo)" />
    <span>{{ todo.title }}</span>
    <button class="btn btn-danger" @click="ConfirmDeleteTodo(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "mytodo",
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    handleCheck(todo) {
      this.checkTodo(todo.id);
    },
    ConfirmDeleteTodo(id){
        if(confirm('确认删除吗？')){
            deleteTodo(id);
        }
    }
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