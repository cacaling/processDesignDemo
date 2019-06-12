<template>
  <div class="grids">
    <el-form :inline="true" :model="formzsfs" class="demo-form-inline" label-width="100px">
      <el-form-item label="阻水方式">
        <el-radio-group v-model="formzsfs.radioSelect" @change="changeradioSelectHandler">
          <el-radio-button label="油膏"></el-radio-button>
          <el-radio-button label="阻水带"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="带宽" v-show="isFlag">
        <el-input-number :precision="2"
          :step="0.1" v-model="formzsfs.daikuan" clearable placeholder="请输入内容"></el-input-number>
      </el-form-item>
      <el-form-item label="其他余量">
        <el-input v-model="formzsfs.other" clearable placeholder="请输入内容"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlag: false,
      formzsfs:{
        radioSelect:"油膏",
        daikuan:"",
        other:""
      }
    };
  },
  methods: {
    changeradioSelectHandler(values) {
      if (values == "油膏") {
        this.isFlag = false;
      } else {
        this.isFlag = true;
      }
    }
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


