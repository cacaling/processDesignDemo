<template>
  <div class="grids">
    <el-form
      :inline="true"
      :model="formqt"
      :rules="rulesqt"
      class="demo-form-inline"
      label-width="100px"
    >
      <el-form-item label="中护" prop="zh">
        <el-input-number
          :precision="2"
          :step="0.1"
          v-model="formqt.zh"
          clearable
          placeholder="请输入内容"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="钢丝直径" prop="gszj">
        <el-input-number
          :precision="2"
          :step="0.1"
          v-model="formqt.gszj"
          clearable
          placeholder="请输入内容"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="外护壁厚" prop="whbh">
        <el-input-number
          :precision="2"
          :step="0.1"
          v-model="formqt.whbh"
          clearable
          placeholder="请输入内容"
        ></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formqt: {
        zh: "",
        gszj: "",
        whbh: ""
      },
      rulesqt: {
        zh: [
          {
            required: true,
            message: "值不能为空"
          }
        ],
        gszj: [
          {
            required: true,
            message: "值不能为空"
          }
        ],
        gszj: [
          {
            required: true,
            message: "值不能为空"
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


