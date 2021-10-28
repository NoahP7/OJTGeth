// pragma solidity >=0.5.0 <0.7.0;
pragma solidity ^0.8.9;

contract myFirstContract{
    constructor() public {}
uint256 storedData;
function set(uint256 x) public {
        storedData = x;
    }
function get() public view returns (uint256 retVal) {
        return storedData;
    }
}