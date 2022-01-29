require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain essay idea dry force sleep'; 
let testAccounts = [
"0xca04917fbd4cbd67e19e42daa1ecc4d0c437f89ae4c366519aefa3022b5f0923",
"0x71d40b8d9c35da568433a551bdeadf5a73611abc82772b65a73669a1cd26d089",
"0x2f306991e7e906338f47c7bd48c7229f78309b610cfcd80ab42b422b578d92fc",
"0x91ff5393bc5e1dbd0fdaf0a5b1d596090b5647fda4b56afde808f3eb1bc85ea6",
"0xbc203b6677701d039ea857ee873dfbf4d93d12b5585ebae3471558ec566b5162",
"0xde16403ccc0093208449926892a1910380395c7e435c3136734a2a10f614c0e0",
"0x84efbae7ff401cd88739160665442b98e91761e2fe973a7b6714cfbe42a079e4",
"0x117ea19a93869769c29a7d722ac152a51b50209ae647bf5162ff5c9bd420cdf2",
"0x01b1f0d60bc0d66b9a556094c676e1bd3f8cf47c8e42eea94944058efbf7fe55",
"0x240cb78cacaa4475026269cdb70587a87baf705f9971d72199ac7dacafd1bb34"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


