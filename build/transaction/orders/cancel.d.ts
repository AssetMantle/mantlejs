import { AssetMantle } from "../../utilities/mantleJS";
export declare class cancelOrder extends AssetMantle {
    cancel: (address: string, chain_id: string, mnemonic: string, fromID: string, orderID: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createOrderCancelMsg: (address: string, chain_id: string, fromID: string, orderID: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
