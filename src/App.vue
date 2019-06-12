<template>
  <div id="app">
    <el-container>
      <el-header>
        <AppHeader></AppHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppHeader from "./components/Header";

export default {
  name: "app",
  components: {
    AppHeader
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  text-align: center;
  line-height: 160px;
}
</style>
