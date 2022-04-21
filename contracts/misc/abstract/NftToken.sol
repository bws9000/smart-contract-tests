// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

abstract contract NftToken{
    function ownerOf(uint256 tokenId) external virtual returns (address);
    function balanceOf(address owner) external virtual returns (uint256);
    function safeTransferFrom(address from, address to, uint256 tokenId) virtual external payable;
    function approve(address approveTo, uint256 tokenId) virtual external payable;
    function getApproved(uint256 tokenId) virtual external view returns (address);
    function setApprovalForAll(address operator, bool isApproved) virtual external;
    function isApprovedForAll(address owner, address operator) virtual external view returns (bool);
}