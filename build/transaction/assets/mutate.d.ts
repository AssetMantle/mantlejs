import { Persistence } from "../../utilities/persistenceJS";
export declare class mutateAsset extends Persistence {
    mutate: (address: string, chain_id: string, mnemonic: any, fromID: string, assetID: any, mutableProperties: string, mutableMetaProperties: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createAssetMutateMsg: (address: string, chain_id: string, fromID: string, assetID: any, mutableProperties: string, mutableMetaProperties: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
