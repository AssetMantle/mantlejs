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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.decryptStore = exports.createStore = exports.getWalletPath = exports.createWallet = exports.createRandomWallet = exports.getWallet = void 0;
var bip39 = __importStar(require("bip39"));
var bip32 = __importStar(require("bip32"));
var tmSig = __importStar(require("@tendermint/sig"));
var crypto = __importStar(require("crypto"));
var config = __importStar(require("../config.json"));
var passwordHashAlgorithm = "sha512";
exports.getWallet = function (mnemonic, bip39Passphrase) {
    return new Promise(function (resolve) {
        var seed = bip39.mnemonicToSeedSync(mnemonic, bip39Passphrase);
        var masterKey = bip32.fromSeed(seed);
        var walletPath = exports.getWalletPath();
        resolve(tmSig.createWalletFromMasterKey(masterKey, config.prefix, walletPath));
    });
};
exports.createRandomWallet = function (bip39Passphrase) { return __awaiter(void 0, void 0, void 0, function () {
    var mnemonic, walletInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bip39.generateMnemonic(256)];
            case 1:
                mnemonic = _a.sent();
                return [4 /*yield*/, exports.getWallet(mnemonic, bip39Passphrase)];
            case 2:
                walletInfo = _a.sent();
                return [2 /*return*/, {
                        address: walletInfo.address,
                        mnemonic: mnemonic
                    }];
        }
    });
}); };
exports.createWallet = function (mnemonic, bip39Passphrase) { return __awaiter(void 0, void 0, void 0, function () {
    var validateMnemonic, walletInfo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                validateMnemonic = bip39.validateMnemonic(mnemonic);
                if (!validateMnemonic) return [3 /*break*/, 2];
                return [4 /*yield*/, exports.getWallet(mnemonic, bip39Passphrase)];
            case 1:
                walletInfo = _a.sent();
                return [2 /*return*/, {
                        address: walletInfo.address,
                        mnemonic: mnemonic
                    }];
            case 2: return [2 /*return*/, {
                    address: "Invalid mnemonic.",
                    mnemonic: "Invalid mnemonic."
                }];
        }
    });
}); };
exports.getWalletPath = function () {
    return "m/44'/118'/0'/0/0";
};
exports.createStore = function (mnemonic, password) {
    try {
        var key = crypto.randomBytes(32);
        var iv = crypto.randomBytes(16);
        var cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
        var encrypted = cipher.update(mnemonic);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        var obj = {
            hashpwd: crypto
                .createHash(passwordHashAlgorithm)
                .update(password)
                .digest("hex"),
            iv: iv.toString("hex"),
            salt: key.toString("hex"),
            crypted: encrypted.toString("hex")
        };
        return {
            Response: obj,
            error: null
        };
    }
    catch (exception) {
        return {
            Response: false,
            error: exception.message
        };
    }
};
exports.decryptStore = function (fileData, password) {
    var hashpwd = fileData.hashpwd;
    var iv = fileData.iv;
    var salt = fileData.salt;
    var crypted = fileData.crypted;
    if (hashpwd ===
        crypto.createHash(passwordHashAlgorithm).update(password).digest("hex")) {
        var ivText = Buffer.from(iv, "hex");
        var encryptedText = Buffer.from(crypted, "hex");
        var decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(salt, "hex"), ivText);
        var decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return {
            mnemonic: decrypted.toString()
        };
    }
    else {
        return {
            mnemonic: "Incorrect password."
        };
    }
};
