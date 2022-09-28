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
exports.createAccount = void 0;
const config = __importStar(require("../../config.json"));
const request_1 = __importDefault(require("request"));
const persistenceJS_1 = require("../../utilities/persistenceJS");
class createAccount extends persistenceJS_1.Persistence {
    constructor() {
        super(...arguments);
        this.create = async (address, chain_id, mnemonic, name, denom, amount, gas, memo) => {
            let x = {
                address: "",
                hash: "",
            };
            let path = this.path;
            let keyAddOptions = {
                method: "POST",
                url: path + config.keysAdd,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: name }),
            };
            // @ts-ignore
            return new Promise(function (resolve, reject) {
                request_1.default(keyAddOptions, function (error, response) {
                    if (error) {
                        reject(error);
                    }
                    let result = JSON.parse(response.body);
                    x.address = result.result.keyOutput.address;
                    let signOptions = {
                        method: "POST",
                        url: path + config.signTx,
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            baseReq: { from: address, chain_id: chain_id },
                            type: "cosmos-sdk/StdTx",
                            value: {
                                msg: [
                                    {
                                        type: config.msgSend,
                                        value: {
                                            from_address: address,
                                            to_address: x.address,
                                            amount: [
                                                {
                                                    denom: denom,
                                                    amount: amount,
                                                },
                                            ],
                                        },
                                    },
                                ],
                                fee: { amount: [], gas: gas },
                                signatures: null,
                                memo: memo,
                            },
                        }),
                    };
                    request_1.default(signOptions, function (error, response) {
                        if (error)
                            throw new Error(error);
                        let result = JSON.parse(response.body);
                        let typekey = result.result.tx.signatures[0].pub_key.type;
                        let value = result.result.tx.signatures[0].pub_key.value;
                        let signature = result.result.tx.signatures[0].signature;
                        let broadcastOptions = {
                            method: "POST",
                            url: path + config.broadcastTx,
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                tx: {
                                    msg: [
                                        {
                                            type: config.msgSend,
                                            value: {
                                                from_address: address,
                                                to_address: x.address,
                                                amount: [
                                                    {
                                                        denom: denom,
                                                        amount: amount,
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                    fee: {
                                        amount: [],
                                        gas: gas,
                                    },
                                    signatures: [
                                        {
                                            pub_key: { type: typekey, value: value },
                                            signature: signature,
                                        },
                                    ],
                                    memo: memo,
                                },
                                mode: "sync",
                            }),
                        };
                        request_1.default(broadcastOptions, function (error, resp) {
                            if (error)
                                throw new Error(error);
                            let result = JSON.parse(resp.body);
                            x.hash = result.txhash;
                            resolve(x);
                        });
                    });
                });
            }).catch(function (error) {
                console.log("Promise Rejected: " + error);
                return error;
            });
        };
    }
}
exports.createAccount = createAccount;
//# sourceMappingURL=create.js.map