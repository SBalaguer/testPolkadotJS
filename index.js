// Import
import { ApiPromise, WsProvider } from '@polkadot/api';

const wsProvider = new WsProvider('wss://rpc.polkadot.io');
const api = await ApiPromise.create({ provider: wsProvider });
console.log(api.genesisHash.toHex())


/// THIS WORKS too

// try{
//     ApiPromise
//       .create({ provider: wsProvider })
//       .then((api) =>
//         console.log(api.genesisHash.toHex())
//       )
// }catch (error){
//     console.log(error);
// }