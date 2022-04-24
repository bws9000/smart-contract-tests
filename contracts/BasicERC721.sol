// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BasicERC721 is ERC721, Ownable {
    
    using Counters for Counters.Counter;

    Counters.Counter public _tokenIds;

    string private baseUri;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _uri) 
        ERC721(_name,_symbol) {
            baseUri = _uri;
        }

    function mintOneNft() external {
        _safeMint(msg.sender, _tokenIds.current());
        _tokenIds.increment();
    }
    
}