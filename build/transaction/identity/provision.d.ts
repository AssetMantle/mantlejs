import { AssetMantle } from "../../utilities/mantleJS";
export declare class provisionIdentity extends AssetMantle {
  provision: (
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
  createIdentityProvisionMsg: (
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
