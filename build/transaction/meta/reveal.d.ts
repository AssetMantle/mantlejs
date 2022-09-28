import { Persistence } from "../../utilities/persistenceJS";
export declare class revealMeta extends Persistence {
    reveal: (address: string, chain_id: string, mnemonic: any, metaFact: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createMetaRevealMsg: (address: string, chain_id: string, metaFact: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
