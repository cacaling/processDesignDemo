<template>
  <div class="grids">
    <label :v-text="getValues"></label>
    <el-form :inline="true" :model="formtube" class="demo-form-inline" label-width="100px">
      <el-form-item label="套管外径">
        <el-select v-model="formtube.tgwj" clearable placeholder="请选择">
          <el-option label="2.1" value="2.1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内孔">
        <el-select v-model="formtube.nk" clearable placeholder="请选择">
          <el-option label value></el-option>
          <el-option label="1.5" value="1.5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="每管芯数">
        <el-select v-model="formtube.mgxs" clearable placeholder="请选择"></el-select>
      </el-form-item>
      <el-form-item label="余长‰">
        <el-input-number
          v-model="formtube.yc"
          :precision="2"
          :step="0.1"
          clearable
          placeholder="请选择"
        ></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unChange: true,
      formtube: {
        tgwj: "",
        nk: "",
        mgxs: "",
        yc: "",
        isChange: false
      },
      returnValues: ""
    };
  },
  methods: {},
  computed: {
    getValues: {
      get: function() {
        if (this.formtube.tgwj != "" || this.formtube.nk != "") {
          console.log(this.returnValues);
          return (this.returnValues = 1);
        } else {
          console.log(this.returnValues);
          return (this.returnValues = 0);
        }
      },
      set: function(val) {
        if (this.formtube.tgwj != "" || this.formtube.nk != "") {
          console.log(this.returnValues);
          return (this.returnValues = 10);
        } else {
          console.log(this.returnValues);
          return (this.returnValues = 20);
        }
      }
    }
  },
  mounted() {
    var $this = this;
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




