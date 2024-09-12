import { Interface } from "ethers";

export interface IContractOptions {
  contractType: string;
  contractAddress: string;
  contractInterface: Interface;
  eventNames?: Array<string>;
}
