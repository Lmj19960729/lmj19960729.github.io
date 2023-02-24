<template>
  <div class="container">
  <div class="nav">
  <NavigationBar></NavigationBar>
  <div class="main-container"></div>
  </div>
</div>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue';

</script>

<style scoped>
.container{
  margin:30px 220px 0;
  padding: 30px;
}
.nav {
  float:left;
}

</style>