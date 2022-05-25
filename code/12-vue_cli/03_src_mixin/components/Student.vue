<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个学生",
    //   props比data优先，二者不能使用一样的变量名
      myAge:this.age,
    };
  },
  //使用props接收数据，相当于函数接收参数，参数会依次被props中的变量接收，然后模板中就可以使用
  //   props: ["name", "sex", "age"],
  //   利用限制变量类型以防止可能的错误
  //   props: {
  //       name:String,
  //       age:Number,
  //       sex:String
  //   },

  props: {
    name: {
      type: String, //使用type指定数据类型
      required: true, //使用required制定该数据是必要的
    },
    age: {
      type: Number,
      defualt: 99, //使用default配制默认值
    },
    sex:{
        type:String,
        required:true,
    }
  },
};
</script>
