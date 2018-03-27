<template>
  <div id="app">
    <Vote></Vote>
  </div>
</template>

<script>
import Vote from './components/Vote';

export default {
  name: 'App',
  components: {
    Vote,
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
