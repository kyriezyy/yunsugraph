<template>
  <div id="app">
    <header>
      header 部分
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
*,*:after,*:before{
  padding: 0;
  margin: 0;
  box-sizing: border-box
}
html,body{
  height: 100%;
}
#app {
  height: 100%;
}
header{
  height: 60px;
  background: cornflowerblue;
}
</style>
