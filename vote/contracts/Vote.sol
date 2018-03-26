pragma solidity ^0.4.17;

contract Vote{
    address[] public candidates;
    address public manager;
    uint[] public votes;
    
    function Vote() public {
        manager = msg.sender;
    }
    
    function enter() public payable{
        //validation
        require(msg.value >= 0 ether);
        
        candidates.push(msg.sender);
        votes.push(0);
    }
    
    function vote(uint index) public {
        votes[index] += 1;
    }
    
    function getWinner() public restricted returns(uint) {
        // only manager can call this
        require(msg.sender == manager);
        
        uint winner = 0;
        for (uint i = 0; i < votes.length; i++) {
            if (votes[i]>votes[winner]) {
                winner = i;
            }
        }
        reset();
        return winner;
    }
    
    function reset() private {
        candidates = new address[](0);
        votes = new uint[](0);
    }
    
    function getCandidates() public view returns(address[]) {
        return candidates;
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}