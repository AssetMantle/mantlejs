import { Persistence } from "../../utilities/persistenceJS";
export declare class cancelOrder extends Persistence {
    cancel: (address: string, chain_id: string, mnemonic: string, fromID: string, orderID: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createOrderCancelMsg: (address: string, chain_id: string, fromID: string, orderID: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
