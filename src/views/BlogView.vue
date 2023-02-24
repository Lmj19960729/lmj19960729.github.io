<template>
  <div class="container">
  <div class="nav">
  <NavigationBar></NavigationBar>
  <div class="main-container">
    <div class="text-container">
    <h1 class="title">Break line in Js</h1>
    <div class="boot"><span class="time">Feb28</span>
      <span style="width:15px">·</span>
      <span class="readtime">2min</span></div>
   </div>
   <div class="text-container">
    <h1 class="title">Break line in Js</h1>
    <div class="boot"><span class="time">Feb28</span>
      <span style="width:15px">·</span>
      <span class="readtime">2min</span></div>
   </div>
   <div class="text-container">
    <h1 class="title">Break line in Js</h1>
    <div class="boot"><span class="time">Feb28</span>
      <span style="width:15px">·</span>
      <span class="readtime">2min</span></div>
   </div>
   <div class="text-container">
    <h1 class="title">Break line in Js</h1>
    <div class="boot"><span class="time">Feb28</span>
      <span style="width:15px">·</span>
      <span class="readtime">2min</span></div>
   </div>
   <div class="text-container">
    <h1 class="title">Break line in Js</h1>
    <div class="boot"><span class="time">Feb28</span>
      <span style="width:15px">·</span>
      <span class="readtime">2min</span></div>
   </div>
   <div class="text-container">
    <h1 class="title">Break line in Js</h1>
    <div class="boot"><span class="time">Feb28</span>
      <span style="width:15px">·</span>
      <span class="readtime">2min</span></div>
   </div>
   <div class="text-container">
    <h1 class="title">Break line in Js</h1>
    <div class="boot"><span class="time">Feb28</span>
      <span style="width:15px">·</span>
      <span class="readtime">2min</span></div>
   </div>
   
</div>
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
.main-container{
  margin-top: 40px;
  padding: 15px;
}
.text-container{
  margin-bottom: 20px;
}
.title{
  margin: 0;
  font-size: 22px;
  font-weight:500;
  display:flex ;
  color: rgb(85, 84, 84);
}
.boot{
  display: flex;
  justify-content: flex-start;
}
.boot span{
  color:rgb(149, 143, 143);
  font-weight: 500; 
}

</style>

