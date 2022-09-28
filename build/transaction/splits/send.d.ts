import { Persistence } from "../../utilities/persistenceJS";
export declare class sendSplits extends Persistence {
    send: (address: string, chain_id: string, mnemonic: string, fromID: string, toID: string, ownableID: string, split: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createSplitsSendMsg: (address: string, chain_id: string, fromID: string, toID: string, ownableID: string, split: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
