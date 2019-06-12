<template>
  <div class="grids">
    <el-form
      :inline="true"
      :model="formjqj"
      class="demo-form-inline"
      label-width="100px"
    >
      <el-form-item label="加强芯尺寸">
        <el-select v-model="formjqj.jqjcc" clearable placeholder="请选择"></el-select>
      </el-form-item>
      <el-form-item label="加强芯类型">
        <el-select v-model="formjqj.jqjlx" clearable placeholder="请选择"></el-select>
      </el-form-item>
      <el-form-item style="width:17.1%;">
        <el-checkbox v-model="formjqj.checked">垫层</el-checkbox>
      </el-form-item>
      <el-form-item label="垫层后外径">
        <el-select :disabled="formjqj.checked" v-model="formjqj.jqjwj" clearable placeholder="请选择"></el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formjqj: {
        jqjcc: "",
        jqjlx: "",
        checked: false,
        jqjwj: ""
      },
      value: ""
    };
  },
  methods: {}
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

