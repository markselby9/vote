import web3 from './web3';

const address = '0xe600E9b1F1c3AD46D749A4FfAD70D4AE8c2dc9EC';

const abi = [{
  constant: false,
  inputs: [{ name: 'index', type: 'uint256' }],
  name: 'vote',
  outputs: [],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  constant: true,
  inputs: [],
  name: 'getCandidates',
  outputs: [{ name: '', type: 'address[]' }],
  payable: false,
  stateMutability: 'view',
  type: 'function',
}, {
  constant: true,
  inputs: [{ name: '', type: 'uint256' }],
  name: 'candidates',
  outputs: [{ name: '', type: 'address' }],
  payable: false,
  stateMutability: 'view',
  type: 'function',
}, {
  constant: true,
  inputs: [],
  name: 'manager',
  outputs: [{ name: '', type: 'address' }],
  payable: false,
  stateMutability: 'view',
  type: 'function',
}, {
  constant: true,
  inputs: [{ name: '', type: 'uint256' }],
  name: 'votes',
  outputs: [{ name: '', type: 'uint256' }],
  payable: false,
  stateMutability: 'view',
  type: 'function',
}, {
  constant: false,
  inputs: [],
  name: 'getWinner',
  outputs: [{ name: '', type: 'uint256' }],
  payable: false,
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  constant: false,
  inputs: [],
  name: 'enter',
  outputs: [],
  payable: true,
  stateMutability: 'payable',
  type: 'function',
}, { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' }];


export default new web3.eth.Contract(abi, address);
