<template>
  <div class="container">
    <iframe class="iframe" src="http://113.28.150.73:8887/demo/#/home" frameborder="0"></iframe>
  </div>
</template>
<script>


export default {
  name: 'demo',
  data() {
    return {
      d3Graph: null,
    };
  },
  created() {},
  mounted() {

  },
  methods: {
  },
};
</script>
<style scoped>
.container{
  height: 100%;
  overflow: hidden;
}
.iframe{
  height: 100%;
  width: 100%;
  margin-top: -50px;
}
</style>
