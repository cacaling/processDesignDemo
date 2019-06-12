<template>
  <div>
    <el-popover placement="bottom" width="50%" trigger="click">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{useData.光缆名称.name}}</span>
          <div style=" float: right; padding: 3px 0;width=40%">
            <el-input v-model="input" placeholder="允许纤应变"></el-input>
          </div>
        </div>
        <div>
          <div slot="header" class="clearfix">
            <span>拉力参数</span>
          </div>
          <el-row :gutter="12">
            <el-col :span="8">
              <el-card shadow="hover">光纤束等效直径: 1.00459</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">光纤预偏置: 0.0</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">光纤自由度: 0.24771</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">绞合节距: 195</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">绞合半径: 3.15</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">绞合产生的弯曲半径: 308.9</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">光缆截面积: 100.3</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">光纤拉伸窗口: 0.07779</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">光纤收缩窗口: 0.08416</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">短期拉力: 3243</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">光纤起应变点拉力: 619</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">短期拉力缆应变: 0.41</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">光缆等效模量MPa: 7930.5</el-card>
            </el-col>
          </el-row>
          <div slot="header" class="clearfix">
            <span>材料消耗</span>
          </div>
          <el-row :gutter="12">
            <el-col :span="8">
              <el-card shadow="hover">钢丝: 24.8</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">PBT: 11.5</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">纤膏: 7.8</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">缆膏: 22.6</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">内护铝带: --</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">外护钢带: 44.4</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">阻水纱: 0</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">内护套料: 28.3</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">外护套料: 91.6</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">光纤: 3.8</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">PP填充绳: 0.0</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">FRP垫层: 10.3</el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover">扎纱: 0.7</el-card>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-button slot="reference">参数验证</el-button>
    </el-popover>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      input: "",
      useData: {
        光缆名称: {
          name: "(1+5)结构 GYTY53-60"
        },
        拉力值: {
          光纤束等效直径: 1.00459,
          光纤预偏置: 0.0,
          光纤自由度: 0.24771,
          绞合节距: 195,
          绞合半径: 3.15,
          绞合产生的弯曲半径: 308.9,
          光缆截面积: 100.3,
          光纤拉伸窗口: 0.07779,
          光纤收缩窗口: 0.08416,
          短期拉力: 3243,
          光纤起应变点拉力: 619,
          短期拉力缆应变: 0.41,
          光缆等效模量MPa: 7930.5
        },
        材料消耗: {
          钢丝: 24.8,
          PBT: 11.5,
          纤膏: 7.8,
          缆膏: 22.6,
          内护铝带: "/",
          外护钢带: 44.4,
          阻水纱: 0,
          内护套料: 28.3,
          外护套料: 91.6,
          光纤: 3.8,
          PP填充绳: 0.0,
          FRP垫层: 10.3,
          扎纱: 0.7
        }
      }
    };
  }
};
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 800px;
}
</style>


