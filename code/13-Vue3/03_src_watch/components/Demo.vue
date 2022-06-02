<template>
  <h1>姓名：{{person.name}}</h1>
  <h1>年龄：{{person.age}}</h1>
  <h2>深层数据：{{person.a.b}}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.a.b++">修改深层数据</button>

</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "Demo",
  beforeCreate() {
    console.log("--beforeCreate--");
  },
  //   setup在beforeCreate之前执行
  setup() {
    console.log("setup");
    let person = reactive({
      name: "zs",
      age: 18,
      a: { b: 123 },
    });

    // 情况三：使用watch监视reactive对象修改，
    // 1.注意无法正确获取oldValue
    // 2.无法关闭深度监视
    // watch(
    //   person,
    //   (newValue, oldValue) => {
    //     console.log("person变化了", newValue, oldValue);
    //   },
    //   { deep: false }
    // ); //deep:false无效

    // 情况四：监视reactive对象中的某个数据
    // 注意这种情况deep是默认关闭的，如果监视的是子对象，那么这个子对象的属性改变则不会触发
    watch(()=>person.name, (newValue, oldValue) => {
        console.log("person变化了", newValue, oldValue);
    })
    return { person };
  },
};
</script>

<style>
</style>