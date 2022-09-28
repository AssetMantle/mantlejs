import { Persistence } from "../../utilities/persistenceJS";
export declare class mintAsset extends Persistence {
    mint: (address: string, chain_id: string, mnemonic: any, toID: any, fromID: string, classificationID: any, mutableProperties: string, immutableProperties: any, mutableMetaProperties: any, immutableMetaProperties: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createAssetMintMsg: (address: string, chain_id: string, toID: any, fromID: string, classificationID: any, mutableProperties: string, immutableProperties: any, mutableMetaProperties: any, immutableMetaProperties: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
