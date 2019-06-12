<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/cable1">钢铝包光缆</el-menu-item>
      <el-menu-item index="/cable2">非金属光缆</el-menu-item>
      <el-menu-item index="/cable3">ADSS光缆</el-menu-item>
      <el-menu-item index="/process">工艺单</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </header>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key) {
        this.$router.push(key);
      }
    }
  }
</script>

<style>
</style>
