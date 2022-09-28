import { Persistence } from "../../utilities/persistenceJS";
export declare class deputizeMaintainer extends Persistence {
    deputize: (address: string, chain_id: string, mnemonic: string, identityID: string, clsID: string, toID: string, maintainedTraits: string, addMaintainer: any, removeMaintainer: any, mutateMaintainer: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createDeputizeMsg: (address: string, chain_id: string, identityID: string, clsID: string, toID: string, maintainedTraits: string, addMaintainer: any, removeMaintainer: any, mutateMaintainer: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
