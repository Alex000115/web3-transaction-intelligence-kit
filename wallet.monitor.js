import { isTargetAddress } from "./address.utils.js";
import { decodeTransferEvent } from "./event.decoder.js";

export function scanTransactions(transactions) {
  transactions.forEach((tx) => {
    if (isTargetAddress(tx.from) || isTargetAddress(tx.to)) {
      console.log("Wallet Activity Detected");
      console.log("Hash:", tx.hash);
      console.log("From:", tx.from);
      console.log("To:", tx.to);
      decodeTransferEvent(tx);
      console.log("-------------------------");
    }
  });
}
