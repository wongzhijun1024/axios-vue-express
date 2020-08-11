<template>
  <div id="app">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "axios教程",
    };
  },
  created: function () {
    this.post();
  },
  methods: {
    get: function () {
      this.$api.reqLogin({ name: "wzj2", passwd: 123456 }, function (data) {
        console.log(data);
      });
    },
    post: function () {
      this.$api.reqHome({}, function (data) {
        console.log(data);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
