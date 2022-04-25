// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BasicERC721 is ERC721, Ownable {
    
    string public uri;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _uri) 
        ERC721(_name,_symbol) {
            uri = _uri;
        }
    
}
