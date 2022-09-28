import { Persistence } from "../../utilities/persistenceJS";
export declare class burnAsset extends Persistence {
    burn: (address: string, chain_id: string, mnemonic: string, fromID: string, assetID: string, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createAssetBurnMsg: (address: string, chain_id: string, fromID: string, assetID: string, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
