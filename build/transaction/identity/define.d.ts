import { AssetMantle } from "../../utilities/mantleJS";
export declare class defineIdentity extends AssetMantle {
    define: (address: string, chain_id: string, mnemonic: string, fromID: string, mutableTraits: string, immutableTraits: any, mutableMetaTraits: any, immutableMetaTraits: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createIdentityDefineMsg: (address: string, chain_id: string, fromID: string, mutableTraits: string, immutableTraits: any, mutableMetaTraits: any, immutableMetaTraits: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
