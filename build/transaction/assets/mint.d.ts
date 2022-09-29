import { AssetMantle } from "../../utilities/mantleJS";
export declare class mintAsset extends AssetMantle {
  mint: (
    address: string,
    chain_id: string,
    mnemonic: any,
    toID: any,
    fromID: string,
    classificationID: any,
    mutableProperties: string,
    immutableProperties: any,
    mutableMetaProperties: any,
    immutableMetaProperties: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;
  createAssetMintMsg: (
    address: string,
    chain_id: string,
    toID: any,
    fromID: string,
    classificationID: any,
    mutableProperties: string,
    immutableProperties: any,
    mutableMetaProperties: any,
    immutableMetaProperties: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;
}
