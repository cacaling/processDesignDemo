<template>
  <div class="grids">
    <el-form :inline="true" :model="formwh" class="demo-form-inline" label-width="100px">
      <el-form-item label="外护壁厚">
        <el-input-number :precision="2" :step="0.1" v-model="formwh.whbh" clearable placeholder="请输入内容"></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formwh: {
        whbh: ""
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


