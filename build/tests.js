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
const keys_1 = require("./utilities/keys");
const helper_1 = require("./helpers/helper");
const config = __importStar(require("./config.json"));
const define_1 = require("./transaction/assets/define");
const mint_1 = require("./transaction/assets/mint");
const mutate_1 = require("./transaction/assets/mutate");
const burn_1 = require("./transaction/assets/burn");
const query_1 = require("./transaction/assets/query");
const sendCoin_1 = require("./transaction/bank/sendCoin");
const query_2 = require("./transaction/classification/query");
const nub_1 = require("./transaction/identity/nub");
const define_2 = require("./transaction/identity/define");
const issue_1 = require("./transaction/identity/issue");
const query_3 = require("./transaction/identity/query");
const provision_1 = require("./transaction/identity/provision");
const unprovision_1 = require("./transaction/identity/unprovision");
const deputize_1 = require("./transaction/maintainers/deputize");
const reveal_1 = require("./transaction/meta/reveal");
const define_3 = require("./transaction/orders/define");
const make_1 = require("./transaction/orders/make");
const take_1 = require("./transaction/orders/take");
const cancel_1 = require("./transaction/orders/cancel");
const query_4 = require("./transaction/orders/query");
const send_1 = require("./transaction/splits/send");
const wrap_1 = require("./transaction/splits/wrap");
const unwrap_1 = require("./transaction/splits/unwrap");
let url = "http://localhost:1317";
const assetDefine = new define_1.defineAsset(url);
const assetMint = new mint_1.mintAsset(url);
const assetMutate = new mutate_1.mutateAsset(url);
const assetBurn = new burn_1.burnAsset(url);
const assetQuery = new query_1.queryAssets(url);
const sendCoin = new sendCoin_1.bank(url);
const clsQuery = new query_2.cls(url);
const identityNub = new nub_1.nubIdentity(url);
const identityDefine = new define_2.defineIdentity(url);
const identityIssue = new issue_1.issueIdentity(url);
const identityQuery = new query_3.queryIdentities(url);
const identityProvision = new provision_1.provisionIdentity(url);
const identityUnprovision = new unprovision_1.unprovisionIdentity(url);
const maintainerDeputize = new deputize_1.deputizeMaintainer(url);
const metaReveal = new reveal_1.revealMeta(url);
const orderDefine = new define_3.defineOrder(url);
const orderMake = new make_1.makeOrder(url);
const orderTake = new take_1.takeOrder(url);
const orderCancel = new cancel_1.cancelOrder(url);
const orderQuery = new query_4.queryOrders(url);
const splitsSend = new send_1.sendSplits(url);
const splitsWrap = new wrap_1.wrapSplits(url);
const splitsUnwrap = new unwrap_1.unwrapsplits(url);
const mnemonic = "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";
async function test() {
    console.log("Creating random wallet...");
    let randomWallet = await keys_1.createRandomWallet("");
    console.log(randomWallet);
    let userGivenMnemonic = "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";
    console.log("Creating wallet from mnemonic...");
    let wallet = await keys_1.createWallet(userGivenMnemonic, "");
    console.log(wallet);
    let createdStore = await keys_1.createStore(wallet.mnemonic, "123123123");
    let keyRes = "";
    if (createdStore.error) {
        console.log(createdStore.error);
    }
    else {
        console.log("Keystore created with name " + wallet.address + ".json");
        keyRes = createdStore.Response;
    }
    if (createdStore.error) {
        console.log("Unable to store    Reason: " + createdStore.error);
    }
    console.log("Reading keystore...");
    let mnemonicRestored = await keys_1.decryptStore(keyRes, "123123123");
    console.log(mnemonicRestored);
    let result = await nub(wallet.address, config.chain_id, mnemonic, config.nubID, 25, "stake", 200000, "block");
    let _res = JSON.parse(JSON.stringify(result));
    let check = await helper_1.checkRawLog(_res.rawLog);
    if (check) {
        console.log("\n\n**TX HASH for nub** :" + _res.transactionHash);
    }
    else {
        console.log("\n\n**TX failed for nub** :" + _res.rawLog);
    }
    if (result) {
        let res = await sendCoin.sendCoin(wallet.address, config.chain_id, wallet.address, mnemonic, "stake", "1000000", 25, "stake", 200000, "block", "");
        let check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Send Coin** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Send Coin** :" + res.rawLog);
        }
        let results = await identityQuery.queryIdentity();
        let listResponse = await helper_1.FindInResponse("identities", results, config.nubID);
        let clsID = listResponse.classificationID + "|" + listResponse.hashID;
        res = await identityDefine.define(wallet.address, config.chain_id, mnemonic, clsID, "mutableTraits111:S|identity11543", "immutableTraits:S|identity22662", "mutableMetaTraits:S|identity34167", "immutableMetaTraits:S|identity45648", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define identity 1** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for define identity 1** :" + res.rawLog);
        }
        results = await clsQuery.queryClassification();
        listResponse = await helper_1.FindInResponse("classifications", results, "immutableMetaTraits");
        let classificationID = listResponse.chainID + "." + listResponse.hashID;
        res = await identityIssue.issue(wallet.address, config.chain_id, mnemonic, config.testAccountAddress, clsID, classificationID, "mutableTraits111:S|identity11543", "immutableTraits:S|identity22662", "mutableMetaTraits:S|identity34167", "immutableMetaTraits:S|identity45648", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for issue identity 1** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for issue identity 1** :" + res.rawLog);
        }
        res = await identityDefine.define(wallet.address, config.chain_id, mnemonic, clsID, "mutableTraits2:S|identity11543", "immutableTraits2:S|identity22662", "mutableMetaTraits2:S|identity34167", "immutableMetaTraits2:S|identity45648", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define identity 2** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for define identity 2** :" + res.rawLog);
        }
        results = await clsQuery.queryClassification();
        listResponse = await helper_1.FindInResponse("classifications", results, "immutableMetaTraits2");
        let classificationID1 = listResponse.chainID + "." + listResponse.hashID;
        res = await identityIssue.issue(wallet.address, config.chain_id, mnemonic, config.testAccountAddress, clsID, classificationID1, "mutableTraits2:S|identity11543", "immutableTraits2:S|identity22662", "mutableMetaTraits2:S|identity34167", "immutableMetaTraits2:S|identity45648", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for issue identity 2** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for issue identity 2** :" + res.rawLog);
        }
        results = await identityQuery.queryIdentity();
        listResponse = await helper_1.FindInResponse("identities", results, "immutableMetaTraits");
        let identityID1 = listResponse.classificationID + "|" + listResponse.hashID;
        results = await identityQuery.queryIdentity();
        listResponse = await helper_1.FindInResponse("identities", results, "immutableMetaTraits2");
        let identityID2 = listResponse.classificationID + "|" + listResponse.hashID;
        res = await identityProvision.provision(wallet.address, config.chain_id, mnemonic, identityID1, randomWallet.address, 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Provision** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Provision1** :" + res.rawLog);
        }
        res = await identityUnprovision.unprovision(wallet.address, config.chain_id, mnemonic, identityID1, randomWallet.address, 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Unprovision** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Unprovision1** :" + res.rawLog);
        }
        res = await assetDefine.define(wallet.address, config.chain_id, mnemonic, identityID1, "ASSET1:S|num1,burn:H|1", "ASSET2:S|", "ASSET3:S|num3", "ASSET4:S|num4", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define assets** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for define assets** :" + res.rawLog);
        }
        results = await clsQuery.queryClassification();
        listResponse = await helper_1.FindInResponse("classifications", results, "ASSET4");
        let assetClsID = listResponse.chainID + "." + listResponse.hashID;
        res = await assetMint.mint(wallet.address, config.chain_id, mnemonic, identityID1, identityID1, assetClsID, "ASSET1:S|num1,burn:H|1", "ASSET2:S|num2", "ASSET3:S|num3", "ASSET4:S|num4", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mint assets** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for mint assets** :" + res.rawLog);
        }
        results = await assetQuery.queryAsset();
        listResponse = await helper_1.FindInResponse("assets", results, "ASSET4");
        let assetID = listResponse.classificationID + "|" + listResponse.hashID;
        res = await assetMutate.mutate(wallet.address, config.chain_id, mnemonic, identityID1, assetID, "ASSET1:S|", "ASSET3:S|num3", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mutate assets** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for mutate assets** :" + res.rawLog);
        }
        res = await assetDefine.define(wallet.address, config.chain_id, mnemonic, identityID1, "ASSET5:S|num1,burn:H|1", "ASSET6:S|", "ASSET7:S|num3", "ASSET8:S|num4", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define assets 1** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for define assets 1** :" + res.rawLog);
        }
        results = await clsQuery.queryClassification();
        listResponse = await helper_1.FindInResponse("classifications", results, "ASSET8");
        let assetClsID1 = listResponse.chainID + "." + listResponse.hashID;
        res = await assetMint.mint(wallet.address, config.chain_id, mnemonic, identityID1, identityID1, assetClsID1, "ASSET5:S|num1,burn:H|1", "ASSET6:S|num2", "ASSET7:S|num3", "ASSET8:S|num4", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mint assets 2 ** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for mint assets 2** :" + res.rawLog);
        }
        results = await assetQuery.queryAsset();
        listResponse = await helper_1.FindInResponse("assets", results, "ASSET8");
        let assetID1 = listResponse.classificationID + "|" + listResponse.hashID;
        res = await splitsSend.send(wallet.address, config.chain_id, mnemonic, identityID1, identityID2, assetID1, "0.000000000000000001", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Splits Send** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Splits Send** :" + res.rawLog);
        }
        res = await maintainerDeputize.deputize(wallet.address, config.chain_id, mnemonic, identityID1, assetClsID1, identityID2, "ASSET5:S|num1,burn:H|1,ASSET7:S|num3", true, true, true, 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for maintainer deputize** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for maintainer deputize** :" + res.rawLog);
        }
        res = await assetMutate.mutate(wallet.address, config.chain_id, mnemonic, identityID2, assetID1, "ASSET5:S|,burn:H|1", "ASSET7:S|num3", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for mutate assets 2** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for mutate assets 2** :" + res.rawLog);
        }
        res = await metaReveal.reveal(wallet.address, config.chain_id, mnemonic, "H|1", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for meta reveal** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for meta reveal** :" + res.rawLog);
        }
        res = await splitsWrap.wrap(wallet.address, config.chain_id, mnemonic, identityID1, "100000stake", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Wrap** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Wrap** :" + res.rawLog);
        }
        res = await splitsUnwrap.unwrap(wallet.address, config.chain_id, mnemonic, identityID1, "stake", "100", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Unwrap** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Unwrap** :" + res.rawLog);
        }
        res = await splitsSend.send(wallet.address, config.chain_id, mnemonic, identityID1, identityID2, "stake", "499", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Splits Send** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Splits Send** :" + res.rawLog);
        }
        let mutableMetaTraits = "exchangeRate:D|1,makerOwnableSplit:D|0.000000000000000001,expiry:H|1000000,takerID:I|ID";
        res = await orderDefine.define(wallet.address, config.chain_id, mnemonic, identityID2, "description:S|", "Which Gift:S|Christmas Gift,What Gift:S|", mutableMetaTraits, "Gift:S|Exchange,AmazonOrderID:S|", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for define Order** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for define Order** :" + res.rawLog);
        }
        results = await clsQuery.queryClassification();
        listResponse = await helper_1.FindInResponse("classifications", results, "Gift");
        let orderCls = listResponse.chainID + "." + listResponse.hashID;
        res = await orderMake.make(wallet.address, config.chain_id, mnemonic, identityID2, orderCls, "stake", "stake", "100000", "0.000000000000000001", "description:S|awesomeChocolates", "Which Gift:S|Christmas Gift,What Gift:S|Chocolates", "exchangeRate:D|1", "Gift:S|Exchange,AmazonOrderID:S|1234", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Make Order ** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Make Order ** :" + res.rawLog);
        }
        results = await orderQuery.queryOrder();
        listResponse = await helper_1.FindInResponse("orders", results, "Gift");
        let orderID = listResponse.classificationID +
            "*" +
            listResponse.makerOwnableID +
            "*" +
            listResponse.takerOwnableID +
            "*" +
            listResponse.makerID +
            "*" +
            listResponse.hashID;
        res = await orderCancel.cancel(wallet.address, config.chain_id, mnemonic, identityID2, orderID, 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Cancel Order ** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Cancel Order ** :" + res.rawLog);
        }
        res = await orderMake.make(wallet.address, config.chain_id, mnemonic, identityID2, orderCls, "stake", "stake", "100000", "0.000000000000000001", "description:S|awesomeChocolates", "Which Gift:S|Christmas Gift,What Gift:S|Chocolates", "exchangeRate:D|1", "Gift:S|Exchange,AmazonOrderID:S|1234", 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Make Order ** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Make Order ** :" + res.rawLog);
        }
        res = await orderTake.take(wallet.address, config.chain_id, mnemonic, identityID2, "0.000000000000000001", orderID, 25, "stake", 200000, "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Take Order ** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Take Order ** :" + res.rawLog);
        }
        res = await assetBurn.burn(wallet.address, config.chain_id, mnemonic, identityID1, assetID, "25", "stake", "200000", "block", "");
        check = await helper_1.checkRawLog(res.rawLog);
        if (check) {
            console.log("\n\n**TX HASH for Asset Burn ** :" + res.transactionHash);
        }
        else {
            console.log("\n\n**TX failed for Asset Burn ** :" + res.rawLog);
        }
    }
    else {
        console.log("ERROR!!");
        console.log("NUB Tx failed!!");
    }
}
test();
async function nub(address, chain_id, mnemonic, nubID, fee, token, gas, mode) {
    return new Promise(async function (resolve) {
        let result = await identityNub.nub(address, chain_id, mnemonic, nubID, fee, token, gas, mode, "");
        resolve(result);
    });
}
//# sourceMappingURL=tests.js.map