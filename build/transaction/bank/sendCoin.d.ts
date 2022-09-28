import { Persistence } from "../../utilities/persistenceJS";
export declare class bank extends Persistence {
    sendCoin: (from_address: string, chain_id: string, to_address: string, mnemonic: string, denom: string, amount: string, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;
    createSendCoinMsg: (from_address: string, chain_id: string, to_address: string, denom: string, amount: string, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;
}
