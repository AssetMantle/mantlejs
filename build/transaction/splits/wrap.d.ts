import { AssetMantle } from "../../utilities/mantleJS";
export declare class wrapSplits extends AssetMantle {
  wrap: (
    address: string,
    chain_id: string,
    mnemonic: string,
    fromID: string,
    coins: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;
  createSplitsWrapMsg: (
    address: string,
    chain_id: string,
    fromID: string,
    coins: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;
}
