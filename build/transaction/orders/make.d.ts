import { Persistence } from "../../utilities/persistenceJS";
export declare class makeOrder extends Persistence {
    make: (address: string, chain_id: string, mnemonic: any, fromID: string, classificationID: any, makerOwnableID: string, takerOwnableID: string, expiresIn: any, makerOwnableSplit: any, mutableProperties: string, immutableProperties: any, mutableMetaProperties: any, immutableMetaProperties: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createOrderMakeMsg: (address: string, chain_id: string, fromID: string, classificationID: any, makerOwnableID: string, takerOwnableID: string, expiresIn: any, makerOwnableSplit: any, mutableProperties: string, immutableProperties: any, mutableMetaProperties: any, immutableMetaProperties: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
