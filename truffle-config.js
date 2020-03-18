require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('./src/lib/hdwalletprovider');

let mnemonic = 'jazz kiwi october slab chapter deny radar pull harvest permit forget secret'; 
let testAccounts = [
"0x516bf026afe7258ade3518e02cacfb6def99137faab9bfe2323bbf64a1425f15",
"0x440fe026249bd59c9567217ae06ccd341f30b1429c4900e1c896cfd601815bcd",
"0xa7fee3d1eebc6a71635982bd4c26bcaf4bf518dfe1be278b8dca657917f45eb1",
"0x4e7f0ba518c8847fe6666d03dfe0ac418e84293e7f307dfa6f920e0300b45c9b",
"0x743e65f5b0e7f36e5122fcabffbc9e25683e118631b907626dc8bf6e4a1e12ca",
"0xb6a961c6e9b1caf96d9d8be7f85d48c9199d1a9ceb0efe4484358b084ac435ca",
"0x2e9e5aaad782f7e012379a254a0994b9e7ea4fafe34b37639393e3d41b978019",
"0x277822712f1734a9138dd943301d42770a2249da318096d147e0028d89ec85c2",
"0xf384e6096d063b5e1842f9eab5250ca0c56e1bf76813d96e79c3f807c36aee76",
"0x07fd810ddc91ad2f0bee705caf4bc8571e70fa1522357113c9b1fa76ab47457c"
]; 
let devUri = 'https://api.baobab.klaytn.net:8651';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '1001',
            gas: '8500000',
            gasPrice: null,
        }
    },
    compilers: {
        solc: {
            version: '^0.5.6'
        }
    }
};
