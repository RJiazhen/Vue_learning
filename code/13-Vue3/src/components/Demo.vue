<template>
  <h1>姓名：{{name}}</h1>
  <h1>年龄：{{age}}</h1>
  <h2>深层数据：{{a.b}}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="a.b++">修改深层数据</button>

</template>

<script>
import { reactive , toRef, toRefs} from "vue";
export default {
  name: "Demo",
  //   setup在beforeCreate之前执行
  setup() {
    console.log("setup");
    let person = reactive({
      name: "zs",
      age: 18,
      a: { b: 123 },
    });

    // const x = toRefs(person)
    // 使用toRef方法将数据转化为ref对象，并且赋值的该变量会和person的数据继续绑定，共同修改
    return {
        // 使用toRefs可以将person中所有数据都变为Ref对象，再配合...展开对象，则可以简洁地将所有person数据都以简洁的方式输出和使用
        ...toRefs(person)
        };

  },
};
</script>

<style>
</style>