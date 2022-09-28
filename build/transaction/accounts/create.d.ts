import { AssetMantle } from "../../utilities/mantleJS";
export declare class createAccount extends AssetMantle {
    create: (address: string, chain_id: string, mnemonic: string, name: string, denom: string, amount: any, gas: any, memo: string) => Promise<any>;
}
