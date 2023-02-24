<template>
<navigation>
 <router-link to="/blogs">Blog</router-link>
 <router-link to="/notes">Notes</router-link>
 <router-link to="/recommend">Recommend</router-link>
  </navigation>
 <router-view/>
</template>

<script setup>

</script>

<style scoped>

navigation a{
  text-decoration: none;
  margin: 10px;
  font-weight: 500;
  font-size: 28px;
  color: #777f88;
}
navigation a.router-link-exact-active {
  color: #111111;
}
</style>
