import { Persistence } from "../../utilities/persistenceJS";
export declare class nubIdentity extends Persistence {
    nub: (address: string, chain_id: string, mnemonic: any, nubID: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createIdentityNubMsg: (address: string, chain_id: string, nubID: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
