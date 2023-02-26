require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/EgbLHbEPKXwngaugAacNsXzHMk1pSUzW",
      accounts: [
        "a1ddde1e321877facbc1179997a7f734ec1770b19537a22c5c3b1851c2bb958a",
      ],
    },
  },
};
