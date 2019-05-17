<template>
    <div id="app" ref="app">
        <BaseLayout/>
    </div>
</template>

<script>
    import BaseLayout from './pages/BaseLayout'

    export default {
        name: 'app',
        components: {
            BaseLayout
        },
        data(){
          return {
          }
        },

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    body {
        margin: 0;
    }
</style>
