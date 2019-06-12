<template>
  <div class="grids">
    <el-form
      :inline="true"
      :model="formfls"
      :rules="rulesfls"
      class="demo-form-inline"
      label-width="100px"
    >
      <el-form-item label="芳纶纱" prop="fls">
        <el-input v-model.number="formfls.fls" clearable placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="芳纶纱规格">
        <el-select v-model="formfls.flsgg" clearable placeholder="请选择"></el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formfls: {
        fls: "",
        flsgg: ""
      },
      rulesfls: {
        fls: [
          {
            required: true,
            message: "芳纶沙不能为空"
          },
          {
            type: "number",
            message: "芳纶沙必须为数字值"
          }
        ]
      }
    };
  }
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


