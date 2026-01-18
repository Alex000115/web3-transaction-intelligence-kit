import { scanTransactions } from "./wallet.monitor.js";

export function startBlockListener(provider) {
  provider.on("block", async (blockNumber) => {
    console.log("New Block Detected:", blockNumber);
    try {
      const block = await provider.getBlock(blockNumber, true);
      if (block && block.transactions) {
        scanTransactions(block.transactions);
      }
    } catch (err) {
      console.error("Block read error:", err.message);
    }
  });
}
