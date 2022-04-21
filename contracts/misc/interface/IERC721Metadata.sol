// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

interface ERC721Metadata {
    function name() external view returns (string calldata name);
    function symbol() external view returns (string calldata symbol);
    function tokenURI(uint256 tokenId) external view returns (string memory);
}