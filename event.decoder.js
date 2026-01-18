export function decodeTransferEvent(tx) {
  if (!tx.data || tx.data === "0x") {
    console.log("No contract event data");
    return;
  }

  console.log("Raw Event Data:", tx.data.substring(0, 20) + "...");
  console.log("Event decoding example complete");
}
