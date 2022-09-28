"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.broadcastTx = void 0;
const config = __importStar(require("../config.json"));
const helper_1 = require("../helpers/helper");
const amino_1 = require("@cosmjs/amino");
const launchpad_1 = require("@cosmjs/launchpad");
exports.broadcastTx = async (path, wallet, mnemonic, tx, chainID, gas, gasPrice, mode) => {
    let getAcc = await helper_1.getAccount(wallet.address, path);
    let data = {
        raw_log: ""
    };
    return new Promise(async (resolve, reject) => {
        if (getAcc.hasOwnProperty("error")) {
            data.raw_log = "Account for " + wallet.address + " not found.";
            return reject(data);
        }
        if (Object.keys(getAcc.result.value.address).length === 0) {
            data.raw_log = "Account for " + wallet.address + " not found.";
            return reject(data);
        }
        const _wallet = await amino_1.Secp256k1HdWallet.fromMnemonic(mnemonic);
        let concatGas = gasPrice + "stake";
        let calculateGas = await launchpad_1.GasPrice.fromString(concatGas);
        let client = new launchpad_1.SigningCosmosClient(config.testURL, wallet.address, _wallet, calculateGas, gas, mode);
        let response = await client.signAndBroadcast(tx.msg, tx.fee, "");
        resolve(response);
    }).catch((error) => {
        console.log("Promise Rejected: " + error);
        return error;
    });
};
const getTxResponse = (response) => {
    return new Promise((resolve, reject) => {
        if (response.code) {
            //reject(JSON.stringify(response.raw_log).message);
        }
        else if (response.error) {
            reject(response.error);
        }
        else {
            if (response.txhash) {
                resolve(response.txhash);
            }
            else {
                console.log(JSON.stringify(response));
                reject("Tx failed due to unknown reasons");
            }
        }
    });
};
//# sourceMappingURL=broadcastTx.js.map