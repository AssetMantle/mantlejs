"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = exports.broadcastTx = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const sig_1 = require("@tendermint/sig");
const config = __importStar(require("../config.json"));
exports.broadcastTx = async (
  path = config.TENDERMINT_REST_URL,
  wallet,
  mnemonic,
  tx,
  chainID = config.chain_id,
  gas,
  gasPrice,
  mode,
) => {
  try {
    // create a signer object
    const signer = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: config.prefix,
    });
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
    let stdTx = sig_1.signTx(tx, signMeta, wallet);
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
async function getAccount(address, path) {
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
exports.getAccount = getAccount;
const sendPostRequest = async (url, payload) => {
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
exports.default = exports.broadcastTx;
//# sourceMappingURL=broadcastTx.js.map
