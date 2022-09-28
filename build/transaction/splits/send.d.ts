import { AssetMantle } from "../../utilities/mantleJS";
export declare class sendSplits extends AssetMantle {
    send: (address: string, chain_id: string, mnemonic: string, fromID: string, toID: string, ownableID: string, split: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createSplitsSendMsg: (address: string, chain_id: string, fromID: string, toID: string, ownableID: string, split: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
