import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import * as config from "../config.json";

export const broadcastTx = async (
  path: any,
  wallet: any,
  mnemonic: any,
  tx: any,
  chainID?: any,
  gas?: any,
  gasPrice?: any,
  mode?: any,
): Promise<any> => {
  try {
    // create a signer object
    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: config.prefix });
    const account = await wallet.getAccounts();
    const addressLocal = account[0].address;
    console.log("Sending Address: ", addressLocal);

    // get Stargate client using the signer and RPC endpoint
    const client = await SigningStargateClient.connectWithSigner(
      config.TENDERMINT_RPC_URL, // Replace with your own RPC endpoint
      signer,
    );

    //initiate sign and broadcast from the stargate client
    let response = await client.signAndBroadcast(addressLocal, tx.msg, tx.fee, tx.memo || "");
    return response;
  } catch (error) {
    console.error("Error during txn broadcast: ", error);
    return error;
  }
};

const getTxResponse = (response: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (response.code) {
      //reject(JSON.stringify(response.raw_log).message);
    } else if (response.error) {
      reject(response.error);
    } else {
      if (response.txhash) {
        resolve(response.txhash);
      } else {
        console.log(JSON.stringify(response));
        reject("Tx failed due to unknown reasons");
      }
    }
  });
};
