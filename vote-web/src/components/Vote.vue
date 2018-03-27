<template>
  <section>
    <p>vote</p>
  </section>
</template>

<script>
import web3 from '../lib/web3';

export default {
  name: 'Vote',
  created() {
    console.log(web3.eth.accounts.wallet);
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>
