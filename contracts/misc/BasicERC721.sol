// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BasicERC721 is ERC721, Ownable {
    
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIds;
    string public uri;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _uri) 
        ERC721(_name,_symbol) {
            uri = _uri;
        }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIds.current();
        _tokenIds.increment();
        _safeMint(to, tokenId);
    }
    
}