const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let vote;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  vote = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Vote', () => {
	it('deploys a contract', () => {
		assert.ok(vote.options.address);
	});

	it('allows enter', async () => {
		await vote.methods.enter().send({
			from: accounts[0],
		});
		let candidates = await vote.methods.getCandidates().call({
			from: accounts[0],
		})
		assert.equal(candidates[0], accounts[0]);
		assert.equal(candidates.length, 1);
	});

	it('allows select', async () => {
		await vote.methods.enter().send({
			from: accounts[0],
		});
		await vote.methods.enter().send({
			from: accounts[1],
		});
		await vote.methods.enter().send({
			from: accounts[2],
		});
		await vote.methods.vote(1).send({
			from: accounts[0],
		});
		let winner = await vote.methods.getWinner().call({
			from: accounts[0],
		});
		assert.equal(winner, 1);


		await vote.methods.vote(0).send({
			from: accounts[1],
		});
		await vote.methods.vote(0).send({
			from: accounts[2],
		});
		winner = await vote.methods.getWinner().call({
			from: accounts[0],
		});
		assert.equal(winner, 0);
	});
});
