import * as config from "../../config.json";
import Request from "request";
import { Persistence } from "../../utilities/persistenceJS";
import { broadcastTx } from "../../utilities/broadcastTx";
import { getWallet } from "../../utilities/keys";

export class mutateAsset extends Persistence {
  mutate = async (
    address: string,
    chain_id: string,
    mnemonic: any,
    fromID: string,
    assetID: any,
    mutableMetaProperties: any,
    mutableProperties: string,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string
  ): Promise<any> => {
    const wallet = await getWallet(mnemonic, "");
    let path = this.path;

    let options = {
      method: "POST",
      url: path + config.mutateAssetPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.mutateAssetType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          fromID: fromID,
          assetID: assetID,
          mutableMetaProperties: mutableMetaProperties,
          mutableProperties: mutableProperties,
        },
      }),
    };
    return new Promise(function (resolve, reject) {
      Request(options, function (error: any, response: { body: string; }) {
        if (error) {
          reject(error);
        }
        let result = JSON.parse(response.body);
        resolve(broadcastTx(path, wallet, mnemonic ,result.value, chain_id, result.value.fee.gas ,config.GASPRICE, mode));
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };

  createAssetMutateMsg = async (
      address: string,
      chain_id: string,
      fromID: string,
      assetID: any,
      mutableMetaProperties: any,
      mutableProperties: string,
      feesAmount: any,
      feesToken: any,
      gas: any,
      memo: string
  ): Promise<any> => {
    let path = this.path;

    let options = {
      method: "POST",
      url: path + config.mutateAssetPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.mutateAssetType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          fromID: fromID,
          assetID: assetID,
          mutableMetaProperties: mutableMetaProperties,
          mutableProperties: mutableProperties,
        },
      }),
    };
    return new Promise(function (resolve, reject) {
      Request(options, function (error: any, response: { body: string; }) {
        if (error) {
          reject(error);
        }
        let result = JSON.parse(response.body);
        resolve(result);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };
}