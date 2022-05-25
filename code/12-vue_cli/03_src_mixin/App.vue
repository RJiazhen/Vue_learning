<template>
  <div>
    <!-- 注意这里的属性必须使用引号包起来以字符串的形式传入，否则无法使用。 -->
    <!-- 也可以使用:属性名="表达式"的形式，让其能接收非字符串的数据 -->
    <Student name="张三" sex="男" :age="18+1"/>
    <School/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: "App",
  components: {
    Student,
    School,
  },

};
</script>
