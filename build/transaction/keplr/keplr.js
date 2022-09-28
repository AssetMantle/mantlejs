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
const config = __importStar(require("../../config.json"));
const persistenceJS_1 = require("../../utilities/persistenceJS");
const keys_1 = require("../../utilities/keys");
const tx_1 = require("@cosmjs/stargate/build/codec/cosmos/bank/v1beta1/tx");
class keplr extends persistenceJS_1.Persistence {
    constructor() {
        super(...arguments);
        this.createMsg = async (msgSendTypeUrl, keplrAddress, toAddress, amount, mnemonic, feesAmount, feesToken, gas, mode, memo) => {
            try {
                const wallet = await keys_1.getWallet(mnemonic, "");
                let path = this.path;
                let options = {
                    typeUrl: msgSendTypeUrl,
                    value: tx_1.MsgSend.fromPartial({
                        fromAddress: keplrAddress,
                        toAddress: toAddress,
                        amount: [
                            {
                                denom: config.CoinDenom,
                                amount: String(amount),
                            },
                        ],
                    }),
                };
                return options;
            }
            catch (e) {
                console.log("Error ion keplr: ", e);
            }
        };
    }
}
module.exports = keplr;
//# sourceMappingURL=keplr.js.map