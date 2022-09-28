import { Persistence } from "../../utilities/persistenceJS";
export declare class takeOrder extends Persistence {
    take: (address: string, chain_id: string, mnemonic: any, fromID: string, takerOwnableSplit: any, orderID: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createOrderTakeMsg: (address: string, chain_id: string, fromID: string, takerOwnableSplit: any, orderID: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
