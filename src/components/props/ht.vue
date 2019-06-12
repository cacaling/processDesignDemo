<template>
  <div class="grids">
    <el-form
      :inline="true"
      :model="formht"
      :rules="rulesht"
      class="demo-form-inline"
      label-width="100px"
    >
      <el-form-item label="护套壁厚" prop="ht">
        <el-input-number
          :precision="2"
          :step="0.1"
          v-model="formht.ht"
          clearable
          placeholder="请输入内容"
        ></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
    data(){
        return{
            formht:{
                ht:""
            },
            rulesht:{
                ht:{
                    required:true,
                    message:"值不能为空"
                }
            }
        }
    }
}
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
