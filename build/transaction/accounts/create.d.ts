import { Persistence } from "../../utilities/persistenceJS";
export declare class createAccount extends Persistence {
    create: (address: string, chain_id: string, mnemonic: string, name: string, denom: string, amount: any, gas: any, memo: string) => Promise<any>;
}
