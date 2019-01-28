<template>
  <div id="app">
    <header>
      ChemistryGraph
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
ul{
  list-style: none;
}
html,body{
  height: 100%;
}
#app {
  height: 100%;
}
header{
  height: 60px;
  background: #2b3643;
  padding-left: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold
}


/* rest element css */
.el-radio-button__inner{
  width: 100%;
}
.input-with-select .el-input-group__prepend{
  width: 80px
}
.el-collapse-item__header{
  height: 40px;
  }

.el-checkbox .el-checkbox__input{
  display: none
}
/* .el-radio-button__orig-radio:checked+.el-radio-button__inner{
  background: #95a5a6;
  border-color:
} */
</style>
