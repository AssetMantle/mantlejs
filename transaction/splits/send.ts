import * as config from "../../config.json";
import Request from "request";
import { AssetMantle } from "../../utilities/mantleJS";
import { broadcastTx } from "../../utilities/broadcastTx";
import { getWallet } from "../../utilities/keys";

export class sendSplits extends AssetMantle {
  send = async (
    address: string,
    chain_id: string,
    mnemonic: string,
    fromID: string,
    toID: string,
    ownableID: string,
    split: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ): Promise<any> => {
    const wallet = await getWallet(mnemonic, "");
    let path = this.path;

    let options = {
      method: "POST",
      url: path + config.sendSplitPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.sendSplitType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          fromID: fromID,
          toID: toID,
          ownableID: ownableID,
          split: split,
        },
      }),
    };

    return new Promise(function (resolve, reject) {
      Request(options, function (error: any, response: { body: string }) {
        if (error) {
          reject(error);
        }
        let result = JSON.parse(response.body);
        resolve(
          broadcastTx(
            path,
            wallet,
            mnemonic,
            result.value,
            chain_id,
            result.value.fee.gas,
            config.GASPRICE,
            mode,
          ),
        );
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };

  createSplitsSendMsg = async (
    address: string,
    chain_id: string,
    fromID: string,
    toID: string,
    ownableID: string,
    split: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ): Promise<any> => {
    let path = this.path;

    let options = {
      method: "POST",
      url: path + config.sendSplitPath,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: config.sendSplitType,
        value: {
          baseReq: {
            from: address,
            chain_id: chain_id,
            memo: memo,
            fees: [{ amount: String(feesAmount), denom: feesToken }],
            gas: String(gas),
          },
          fromID: fromID,
          toID: toID,
          ownableID: ownableID,
          split: split,
        },
      }),
    };

    return new Promise(function (resolve, reject) {
      Request(options, function (error: any, response: { body: string }) {
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
