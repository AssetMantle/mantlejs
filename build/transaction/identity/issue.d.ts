import { AssetMantle } from "../../utilities/mantleJS";
export declare class issueIdentity extends AssetMantle {
  issue: (
    address: string,
    chain_id: string,
    mnemonic: any,
    to: any,
    fromID: string,
    classificationID: any,
    mutableProperties: string,
    immutableProperties: any,
    mutableMetaProperties: any,
    immutableMetaProperties: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;
  createIdentityIssueMsg: (
    address: string,
    chain_id: string,
    to: any,
    fromID: string,
    classificationID: any,
    mutableProperties: string,
    immutableProperties: any,
    mutableMetaProperties: any,
    immutableMetaProperties: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;
}
