import { AssetMantle } from "../../utilities/mantleJS";
export declare class unwrapsplits extends AssetMantle {
  unwrap: (
    address: string,
    chain_id: string,
    mnemonic: string,
    fromID: string,
    ownableID: string,
    split: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;
  createSplitsUnwrapMsg: (
    address: string,
    chain_id: string,
    fromID: string,
    ownableID: string,
    split: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;
}
