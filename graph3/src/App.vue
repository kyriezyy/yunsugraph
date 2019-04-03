<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MyHeader from './components/Header'

export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style>

</style>
