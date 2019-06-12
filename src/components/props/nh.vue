<template>
  <div class="grids">
    <el-form :inline="true" :model="formnh" class="demo-form-inline" label-width="100px">
      <el-form-item label="内护壁厚">
        <el-input-number
          :precision="2"
          :step="0.1"
          v-model="formnh.nhbh"
          clearable
          placeholder="请输入内容"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="内护类型">
        <el-select v-model="formnh.nhnx" clearable placeholder="请选择"></el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formnh: {
        nhbh: "",
        nhnx: ""
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


