const { accounts, contract } = require('@openzeppelin/test-environment');
const { expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

describe('NftFactory', function () {

  const [owner, addr1] = accounts;

  const NftFactory = contract.fromArtifact('NftFactory');
  const NftFactoryItemERC721 = contract.fromArtifact('NftFactoryItemERC721');


  beforeEach('Deploy NftFactory and NftFactoryItemERC721', async function () {
    this.nftFactory = await NftFactory.new({ from: owner });
    this.nftItem = await NftFactoryItemERC721.new({ from: owner });
  });


  describe('NftFactory Owner', function () {
    
    it('NftFactory contract owner is sender', async function () {
      expect(await this.nftFactory.owner()).to.equal(owner);
    });

  });



  describe('Spawn Nft with NftFactory ( ERC721 not subscribed )', function () {

      it('will revert', async function(){
        
        await expectRevert(
          this.nftFactory.spawn(
            this.nftItem.address, 
            'MyNFT', 
            'MNFT', 
            'https://baseURI',
            [],
            { from: addr1 }),'Error: Address not subscribed'
        );
      });

  });


  describe('Spawn Nft with NftFactory ( subscribed )', function () {

      it('Spawn New Nft', async function(){
        
        // subscribe
        const subReceipt = await this.nftFactory
        .subscribeItem(this.nftItem.address, { from: owner });

        expect(subReceipt.logs.filter(res => res.event === 'ItemSubscribed'));
        
        const receipt = await this.nftFactory.spawn(
          this.nftItem.address, 
          'MyNFT', 
          'MNFT', 
          'https://baseURI',
          [],
          { from: addr1 });

          expect(receipt.logs.filter(res => res.event === 'NftSpawned')[0]
          .args.newNft).to.have.lengthOf(42);
      });

  });

});
