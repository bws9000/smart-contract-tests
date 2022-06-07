const NftFactory = artifacts.require('NftFactory');
const NftFactoryItemERC721 = artifacts.require('NftFactoryItemERC721');

module.exports = function(deployer) {
  deployer.deploy(NftFactory);
  deployer.deploy(NftFactoryItemERC721);
};