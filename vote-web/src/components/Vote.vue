<template>
  <div>
    <section>
      <p>vote</p>
    </section>
    <section>
      <p>manager: {{manager}}</p>
      <p>candidates: {{candidates}}</p>
    </section>
    <section>
      <button @click="signin">Sign in!</button>
    </section>
    <section>
      <input v-model="indexOfVote"/>
      <button @click="vote">Vote!</button>
    </section>
    <section>
      <button @click="getWinner">Who wins?</button>
      <p>winner: {{candidates[winner]}}</p>
    </section>
    <section>
      <p>notification: {{notification}}</p>
    </section>
  </div>
</template>

<script>
import web3 from '../lib/web3';
import vote from '../lib/vote';

export default {
  name: 'Vote',
  created() {
    (async () => {
      const manager = await vote.methods.manager().call();
      const candidates = await vote.methods.getCandidates().call();
      //      const votes = await vote.methods.votes().call();
      this.manager = manager;
      this.candidates = candidates;
      //      this.votes = votes;
    })();
  },
  data() {
    return {
      manager: null,
      candidates: null,
      //      votes: null,
      notification: null,
      indexOfVote: 0,
      winner: null,
    };
  },
  methods: {
    async signin() {
      const accounts = await web3.eth.getAccounts();
      this.notification = 'Waiting on sign in transaction success...';

      await vote.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei('0.01', 'ether'),
      });

      this.notification = 'You have been entered!';
    },
    async vote() {
      const accounts = await web3.eth.getAccounts();

      this.notification = 'Waiting on vote transaction success...';
      await vote.methods.vote(this.indexOfVote).send({
        from: accounts[0],
        //          value: web3.utils.toWei('0.01', 'ether')
      });
      this.notification = 'You have voted!';
    },
    async getWinner() {
      const accounts = await web3.eth.getAccounts();

      this.notification = 'Waiting on vote transaction success...';
      this.winner = await vote.methods.getWinner().call({
        from: accounts[0],
      });
      this.notification = 'Get winner success!';
    },
  },
};
</script>
