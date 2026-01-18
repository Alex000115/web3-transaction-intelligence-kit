export function simulateTransaction(to, value) {
  return {
    to,
    value,
    status: "simulated",
    message: "This transaction is a reference example only"
  };
}
