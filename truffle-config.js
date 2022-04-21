// configuration for truffle project
// defines deployment and compilation settings

//require('dotenv').config()
const {
    privateKey,
    mnemonic,
    projectId,
    etherscanApiKey,
    polygonApiKey
  } = require('./secrets.json');
  const HDWalletProvider = require('@truffle/hdwallet-provider');
  
  module.exports = {
    networks: {
  
      development: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*"
      },
  
      /*
      rinkeby: {
        provider: () => new HDWalletProvider({
          privateKey,
          providerOrUrl: `https://rinkeby.infura.io/v3/${projectId}`
        }),
        network_id: 42,
        gas: 10000000,
        gasPrice: 2000000000 // 2 gwei
      },
      */
  
      // kovan: {
      //   provider: () => new HDWalletProvider({
      //     mnemonic: {
      //       phrase: process.env.MNEMONIC_PHRASE
      //     },
      //     providerOrUrl: `https://kovan.infura.io/v3/${process.env.INFURA_KEY}`
      //   }),
      //   network_id: 42,
      //   gas: 10000000,
      //   gasPrice: 2000000000 // 2 gwei
      // },
  
      // mainnet: {
      //   provider: () => new HDWalletProvider({
      //     mnemonic: {
      //       phrase: process.env.MNEMONIC_PHRASE
      //     },
      //     providerOrUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`
      //   }),
      //   network_id: 1,
      //   gas: 10000000,
      //   gasPrice: 20000000000,  // 20 gwei
      // },
  
    },
  
    compilers: {
      solc: {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    },
  
    mocha: {
      timeout: 5000
    },
  
    api_keys: {
      etherscan: etherscanApiKey,
      polygonscan: polygonApiKey
    },
  
    plugins: ["truffle-contract-size", "truffle-plugin-verify"]
  };