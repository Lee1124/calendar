<template>
  <div id="dropSelect">
    <el-select v-model="value1" popper-class="calendarOption" placeholder="请选择">
      <el-option
        v-for="item in option1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-select v-model="value2" popper-class="calendarOption" placeholder="请选择">
      <el-option
        v-for="item in option2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  /*数据*/
  let dataObj = {
    option1: [
      {label: '全部类型', value: 0},
      {label: '选项1', value: 1},
      {label: '选项2', value: 2},
      {label: '选项3', value: 3}
    ],
    value1: 0,
    option2: [
      {label: '全部人员', value: 0},
      {label: 'option2-1', value: 1},
      {label: 'option2-2', value: 2},
      {label: 'option2-3', value: 3}
    ],
    value2: 0,
  };
  /*方法*/
  let myMethods = {};
  export default {
    name: "dropSelect",
    data() {
      return dataObj;
    },
    methods: myMethods,
    created() {

    },
  }
</script>

<style scoped>

</style>
