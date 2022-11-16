import { AssetMantle } from "../../utilities/mantleJS";
export declare class revealMeta extends AssetMantle {
  reveal: (
    address: string,
    chain_id: string,
    mnemonic: any,
    metaFact: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;
  createMetaRevealMsg: (
    address: string,
    chain_id: string,
    metaFact: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;
}
