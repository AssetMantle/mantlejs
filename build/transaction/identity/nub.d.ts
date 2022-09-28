import { AssetMantle } from "../../utilities/mantleJS";
export declare class nubIdentity extends AssetMantle {
    nub: (address: string, chain_id: string, mnemonic: any, nubID: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createIdentityNubMsg: (address: string, chain_id: string, nubID: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
