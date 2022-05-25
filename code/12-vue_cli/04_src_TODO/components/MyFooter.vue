<template>
  <div class="myfooter">
    <input type="checkbox" /><span>已完成0/全部3</span>
    <button>清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style>
.myfooter {
  width: 80%;
  margin: 50px 10%;
  vertical-align: middle;
}

.myfooter input {
  float: left;
  margin-right: 10px;
}

.myfooter button {
  float: right;
}
</style>