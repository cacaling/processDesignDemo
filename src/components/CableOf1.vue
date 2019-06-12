<template>
  <div style="height:100%">
    <div class="radios" style="height:10%">
      护套类型
      <el-radio-group v-model="radio" @change="changeHandler">
        <el-radio v-model="radio" label="1">A/S单护</el-radio>
        <el-radio v-model="radio" label="2">Y内护+53型</el-radio>
        <el-radio v-model="radio" label="3">Y内护+53型</el-radio>
      </el-radio-group>
    </div>
    <el-collapse>
      <el-collapse-item>
        <template slot="title">
          套管：
          <i class="header-icon el-icon-info">{{getValuetaoguan}}</i>
        </template>
        <Tube></Tube>
      </el-collapse-item>
      <el-collapse-item title="加强芯:">
        <zxjqj></zxjqj>
      </el-collapse-item>
      <el-collapse-item title="绞合:">
        <jh></jh>
      </el-collapse-item>
      <el-collapse-item title="阻水方式:">
        <zsfs></zsfs>
      </el-collapse-item>
      <el-collapse-item title="芳纶纱:">
        <fls></fls>
      </el-collapse-item>
      <el-collapse-item title="护套:" v-show="showHT">
        <nh></nh>
      </el-collapse-item>
      <el-collapse-item title="内护:" v-show="showNH">
        <nh></nh>
      </el-collapse-item>
      <el-collapse-item title="外护:" v-show="showWH">
        <wh></wh>
      </el-collapse-item>
      <el-collapse-item title="其他:">
        <qt></qt>
      </el-collapse-item>
    </el-collapse>
    <div style="margin-top:10px">
      <pop></pop>
    </div>
  </div>
</template>

<script>
import Tube from "./props/Tube";
import zxjqj from "./props/zxjqj";
import jh from "./props/jh";
import zsfs from "./props/zsfs";
import fls from "./props/fls";
import nh from "./props/nh";
import wh from "./props/wh";
import qt from "./props/qt";
import ht from "./props/ht";
import pop from "./props/buttonPopover";

export default {
  data() {
    return {
      getValuetaoguan: "套管壁厚 ：",
      radio: "1",
      showNH: false,
      showWH: false,
      showHT: true
    };
  },
  methods: {
    changeHandler(values) {
      if (values == 1) {
        this.showNH = false;
        this.showWH = false;
        this.showHT = true;
      } else {
        this.showHT = false;
        this.showWH = true;
        this.showNH = true;
      }
    }
  },
  components: {
    Tube,
    zxjqj,
    jh,
    zsfs,
    fls,
    nh,
    wh,
    qt,
    pop,
    ht
  }
};
</script>
<style>
.radios {
  height: 10%;
  text-align: left;
}
</style>

