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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bank = void 0;
const request_1 = __importDefault(require("request"));
const persistenceJS_1 = require("../../utilities/persistenceJS");
const broadcastTx_1 = require("../../utilities/broadcastTx");
const keys_1 = require("../../utilities/keys");
const config = __importStar(require("../../config.json"));
class bank extends persistenceJS_1.Persistence {
    constructor() {
        super(...arguments);
        this.sendCoin = async (from_address, chain_id, to_address, mnemonic, denom, amount, feesAmount, feesToken, gas, mode, memo) => {
            let path = this.path;
            const wallet = await keys_1.getWallet(mnemonic, "");
            let options = {
                method: "POST",
                url: path + "/bank/accounts/" + to_address + "/transfers",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    base_req: {
                        from: from_address,
                        chain_id: chain_id,
                        memo: memo,
                        fees: [{ amount: String(feesAmount), denom: feesToken }],
                    },
                    amount: [
                        {
                            denom: denom,
                            amount: amount,
                        },
                    ],
                }),
            };
            return new Promise(function (resolve, reject) {
                request_1.default(options, function (error, response) {
                    if (error) {
                        reject(error);
                    }
                    let result = JSON.parse(response.body);
                    resolve(broadcastTx_1.broadcastTx(path, wallet, mnemonic, result.value, chain_id, result.value.fee.gas, config.GASPRICE, mode));
                });
            }).catch(function (error) {
                console.log("Promise Rejected: " + error);
                return error;
            });
        };
        this.createSendCoinMsg = async (from_address, chain_id, to_address, denom, amount, feesAmount, feesToken, gas, memo) => {
            let path = this.path;
            let options = {
                method: "POST",
                url: path + "/bank/accounts/" + to_address + "/transfers",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    base_req: {
                        from: from_address,
                        chain_id: chain_id,
                        memo: memo,
                        fees: [{ amount: String(feesAmount), denom: feesToken }],
                    },
                    amount: [
                        {
                            denom: denom,
                            amount: amount,
                        },
                    ],
                }),
            };
            return new Promise(function (resolve, reject) {
                request_1.default(options, function (error, response) {
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
}
exports.bank = bank;
//# sourceMappingURL=sendCoin.js.map