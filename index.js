import { connectRPC } from "./rpc.client.js";
import { startBlockListener } from "./block.listener.js";
import { NETWORK, TARGET_ADDRESS } from "./network.config.js";

console.log("Web3 Transaction Intelligence Kit");
console.log("Network:", NETWORK);
console.log("Target Address:", TARGET_ADDRESS);

const provider = connectRPC();
startBlockListener(provider);
