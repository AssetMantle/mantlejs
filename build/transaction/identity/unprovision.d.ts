import { AssetMantle } from "../../utilities/mantleJS";
export declare class unprovisionIdentity extends AssetMantle {
  unprovision: (
    address: string,
    chain_id: string,
    mnemonic: any,
    identityID: any,
    to: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;
  createIdentityUnprovisionMsg: (
    address: string,
    chain_id: string,
    identityID: any,
    to: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;
}
