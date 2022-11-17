import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { signTx } from "@tendermint/sig";
import * as config from "../config.json";

export const broadcastTx = async (
  path: any = config.TENDERMINT_REST_URL,
  wallet: any,
  mnemonic: any,
  tx: any,
  chainID: any = config.chain_id,
  gas: any,
  gasPrice: any,
  mode: any,
): Promise<any> => {
  try {
    // create a signer object
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: config.prefix });
    const accounts = await signer.getAccounts();
    const addressLocal = accounts[0].address;

    console.log("Sending Address: ", addressLocal);
    console.log("tx msg payload: ", tx.msg);
    console.log("tx fee payload: ", tx.fee);
    console.log("tx memo payload: ", tx.memo);
    console.log("user mnemonic: ", mnemonic);

    // get the account number and sequence from REST API
    let accountResult = await getAccount(addressLocal, path);
    let accountNum = accountResult.account.result.value.account_number;
    if (accountNum === undefined) {
      accountNum = String(0);
    }
    let seq = accountResult.account.result.value.sequence;
    if (seq === undefined) {
      seq = String(0);
    }

    // get the signMeta object
    const signMeta = {
      account_number: accountNum,
      chain_id: chainID,
      sequence: seq,
    };

    // get the signed message using raw tx, signMeta and wallet/signer
    let stdTx = signTx(tx, signMeta, wallet);

    console.log("signed message", stdTx);
    let signedTemplated = {
      tx: stdTx,
      mode: mode,
    };

    //initiate sign and broadcast from the stargate client
    const response = await sendPostRequest(path.concat(config.broadcastTx), signedTemplated);
    console.log("Transaction Response: ", response);
    return response;
  } catch (error) {
    console.error("Error during txn broadcast: ", error);
    return error;
  }
};

export async function getAccount(address: any, path: any): Promise<any> {
  let result = { success: false, account: {} };
  try {
    let response = await fetch(path + config.getAccount + address);
    let json = await response.json();
    result.success = true;
    result.account = json;
    return result;
  } catch (e) {
    console.log(e);
    return result;
  }
}

const sendPostRequest = async (url: any, payload: any): Promise<any> => {
  // const resp = await Axios.post(url, payload);
  // return resp.data;

  const rawResponse = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const content = await rawResponse.json();
  return content;
};

export default broadcastTx;

/* const obj1 = {
  type: "/xprt/assets/mint/request",
  value: {
    baseReq: {
      from: "mantle16qczacumv2dkkx252xqj4fsfxlyev3s3wu5939",
      chain_id: "devnet-mantle-1",
      memo: "sync",
      fees: [{ amount: "0", denom: "umnt1" }],
      gas: "400000",
    },
    toID: "devnet-mantle-1.cGn3HMW8M3t5gMDv-wXa9sseHnA=|aAUYDVGMcWoh2eYUIoya1HsbOgM=",
    fromID: "devnet-mantle-1.cGn3HMW8M3t5gMDv-wXa9sseHnA=|aAUYDVGMcWoh2eYUIoya1HsbOgM=",
    classificationID: "devnet-mantle-1.j0Uuu1ZA7krYEQ036oQVnzmkQVs=",
    mutableProperties: "burn:H|1,lock:H|1",
    immutableProperties: "color:S|Blue",
    mutableMetaProperties: "propertyName:S|IkFueXRoaW5nIg==,type:S|asset",
    immutableMetaProperties:
      "URI:S|aHR0cHM6Ly8xNDk2OTU4NDcudjIucHJlc3NhYmxlY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wMi9NZXQtcy1iXzExem9uLmpwZw==,name:S|TWlyYWdl,description:S|Tm90aGluZw==,category:S|ZCB0cw",
  },
};
 */
