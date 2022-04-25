const { accounts, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

const BasicERC721 = contract.fromArtifact('BasicERC721');

describe('BasicERC721', function () {

  const [owner] = accounts;

  this.beforeEach('init', async function(){

    this.newToken = await BasicERC721.new(
        'MyNftContract',
        'MNFT',
        'https://baseuri',
        { from: owner }
    );

  });

  describe('after token deployed', function () {
    
    it('the symbol should be MNFT', async function () {
      expect(await this.newToken.symbol()).equal('MNFT');
    });

    it('i should have 2 NFTs minted', async function () {

        await this.newToken.mintOneNft({ from: owner });
        await this.newToken.mintOneNft({ from: owner });

        const count = await this.newToken._tokenIds(); 
        // _tokenIds are currently public in our NFT
        // we're accessing the value of the Counter struct directly for this example
        // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol
        // not recommended, just for testing purposes to prove a point...
        expect(Number(count)).to.equal(2);
    });

  });

});