import { AssetMantle } from "../../utilities/mantleJS";
export declare class mutateAsset extends AssetMantle {
    mutate: (address: string, chain_id: string, mnemonic: any, fromID: string, assetID: any, mutableProperties: string, mutableMetaProperties: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createAssetMutateMsg: (address: string, chain_id: string, fromID: string, assetID: any, mutableProperties: string, mutableMetaProperties: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
