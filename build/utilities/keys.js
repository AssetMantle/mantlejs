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
exports.decryptStore = exports.createStore = exports.getWalletPath = exports.createWallet = exports.createRandomWallet = exports.getWallet = void 0;
const bip39 = __importStar(require("bip39"));
const bip32 = __importStar(require("bip32"));
const tmSig = __importStar(require("@tendermint/sig"));
const crypto = __importStar(require("crypto"));
const config = __importStar(require("../config.json"));
const passwordHashAlgorithm = "sha512";
exports.getWallet = (mnemonic, bip39Passphrase) => {
    return new Promise(function (resolve) {
        const seed = bip39.mnemonicToSeedSync(mnemonic, bip39Passphrase);
        const masterKey = bip32.fromSeed(seed);
        const walletPath = exports.getWalletPath();
        resolve(tmSig.createWalletFromMasterKey(masterKey, config.prefix, walletPath));
    });
};
exports.createRandomWallet = async (bip39Passphrase) => {
    const mnemonic = await bip39.generateMnemonic(256);
    const walletInfo = await exports.getWallet(mnemonic, bip39Passphrase);
    return {
        address: walletInfo.address,
        mnemonic: mnemonic,
    };
};
exports.createWallet = async (mnemonic, bip39Passphrase) => {
    let validateMnemonic = bip39.validateMnemonic(mnemonic);
    if (validateMnemonic) {
        const walletInfo = await exports.getWallet(mnemonic, bip39Passphrase);
        return {
            address: walletInfo.address,
            mnemonic: mnemonic,
        };
    }
    else {
        return {
            address: "Invalid mnemonic.",
            mnemonic: "Invalid mnemonic.",
        };
    }
};
exports.getWalletPath = () => {
    return "m/44'/118'/0'/0/0";
};
exports.createStore = (mnemonic, password) => {
    try {
        const key = crypto.randomBytes(32);
        const iv = crypto.randomBytes(16);
        let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
        let encrypted = cipher.update(mnemonic);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        let obj = {
            hashpwd: crypto
                .createHash(passwordHashAlgorithm)
                .update(password)
                .digest("hex"),
            iv: iv.toString("hex"),
            salt: key.toString("hex"),
            crypted: encrypted.toString("hex"),
        };
        return {
            Response: obj,
            error: null,
        };
    }
    catch (exception) {
        return {
            Response: false,
            error: exception.message,
        };
    }
};
exports.decryptStore = (fileData, password) => {
    let hashpwd = fileData.hashpwd;
    let iv = fileData.iv;
    let salt = fileData.salt;
    let crypted = fileData.crypted;
    if (hashpwd ===
        crypto.createHash(passwordHashAlgorithm).update(password).digest("hex")) {
        let ivText = Buffer.from(iv, "hex");
        let encryptedText = Buffer.from(crypted, "hex");
        let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(salt, "hex"), ivText);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return {
            mnemonic: decrypted.toString(),
        };
    }
    else {
        return {
            mnemonic: "Incorrect password.",
        };
    }
};
//# sourceMappingURL=keys.js.map