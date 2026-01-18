export function estimateGas(tx) {
  if (!tx.gasLimit) return "Unknown";
  return tx.gasLimit.toString();
}
