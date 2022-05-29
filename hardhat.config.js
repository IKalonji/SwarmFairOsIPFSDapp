require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const PRIVATE_KEY = "PRIV";
module.exports = {
  solidity: "0.8.14",
  networks: {
    kardiachain: {
      url: "https://dev.kardiachain.io/",
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};
