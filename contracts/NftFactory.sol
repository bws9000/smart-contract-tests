// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import './interface/IFactoryItem.sol';

contract NftFactory {

    event NftSpawned(address newNft, address _owner);
    event ItemSubscribed(address newAddress);

    uint public spawnedCount = 0;
    address[] public spawnedNftArray;

    mapping(address => bool) public spawnedNftMapping;
    mapping(address => bool) public itemsSubscribed;

    address public owner;

    constructor() {
      owner = msg.sender;
    }

    function spawn(
        address nftToSpawn,
        string calldata name,
        string calldata symbol,
        string calldata uri,
        bytes calldata data
    ) external returns (address){
        require(itemsSubscribed[nftToSpawn], 'Error: Address not subscribed');

        address nft = IFactoryItem(nftToSpawn).spawnNft(
            name,
            symbol,
            uri,
            data
        );

        emit NftSpawned(nft, msg.sender);
        
        spawnedCount++;
        spawnedNftArray.push(nft);

        return nft;
    }


    function subscribeItem(address item) external onlyOwner {
        require(item != address(0x0), "Error: Not an address");
        emit ItemSubscribed(item);
        itemsSubscribed[item] = true;
    }

    function getSpawned(uint256 index) external view returns (address) {
        require(index <= spawnedCount, "Error: Doesn't exist");
        return spawnedNftArray[index];
    }

    modifier onlyOwner() {
        require(
            owner == msg.sender,
                "Error: Only owner"
        );
        _;
    }

}