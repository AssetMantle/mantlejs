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
exports.broadcastTx = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const config = __importStar(require("../config.json"));
exports.broadcastTx = async (path, wallet, mnemonic, tx, chainID, gas, gasPrice, mode) => {
  try {
    // create a signer object
    const signer = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: config.prefix,
    });
    const account = await signer.getAccounts();
    const addressLocal = account[0].address;
    console.log("Sending Address: ", addressLocal);
    // get Stargate client using the signer and RPC endpoint
    const client = await stargate_1.SigningStargateClient.connectWithSigner(
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
const getTxResponse = (response) => {
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
//# sourceMappingURL=broadcastTx.js.map
