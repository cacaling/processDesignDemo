<template>
  <div class="grids">
    <el-form
      :inline="true"
      :rules="rulesjh"
      :model="formjh"
      ref="formjh"
      class="demo-form-inline"
      label-width="100px"
    >
      <el-form-item label="套管数" prop="tubeNumber">
        <el-input v-model.number="formjh.tubeNumber" clearable placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="填充绳数" prop="tcsNumber">
        <el-input v-model.number="formjh.tcsNumber" clearable placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="节距">
        <el-select v-model="formjh.jj" clearable placeholder="请选择"></el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formjh: {
        tubeNumber: "",
        tcsNumber: "",
        jj: ""
      },
      rulesjh: {
        tubeNumber: [
          {
            required: true,
            message: "套管不能为空"
          },
          {
            type: "number",
            message: "套管数必须为数字值"
          }
        ],
        tcsNumber: [
          {
            required: true,
            message: "填充绳数不能为空"
          },
          {
            type: "number",
            message: "填充绳数必须为数字值"
          }
        ]
      }
    };
  },
  methdos: {}
};
</script>

<style scoped>
.grids {
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
}
.el-form-item {
  margin: 15px 20px;
}
</style>


