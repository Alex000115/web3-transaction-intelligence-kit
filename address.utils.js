import { getAddress } from "ethers";
import { TARGET_ADDRESS } from "./network.config.js";

export function isTargetAddress(address) {
  if (!address) return false;
  try {
    return (
      getAddress(address).toLowerCase() ===
      getAddress(TARGET_ADDRESS).toLowerCase()
    );
  } catch {
    return false;
  }
}
