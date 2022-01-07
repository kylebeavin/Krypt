// https://eth-ropsten.alchemyapi.io/v2/qeC5lT54urCurkus4HRnosxU7abExzKH

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/qeC5lT54urCurkus4HRnosxU7abExzKH',
      accounts: ['d01a84454af6ef498051f6affc841f0405d21cc5ebf7e01250f831f9debb11dd']
    }
  }
}