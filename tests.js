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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
var config = __importStar(require("./config.json"));
var helper_1 = require("./helpers/helper");
var burn_1 = require("./transaction/assets/burn");
var define_1 = require("./transaction/assets/define");
var mint_1 = require("./transaction/assets/mint");
var mutate_1 = require("./transaction/assets/mutate");
var query_1 = require("./transaction/assets/query");
var sendCoin_1 = require("./transaction/bank/sendCoin");
var query_2 = require("./transaction/classification/query");
var define_2 = require("./transaction/identity/define");
var issue_1 = require("./transaction/identity/issue");
var nub_1 = require("./transaction/identity/nub");
var provision_1 = require("./transaction/identity/provision");
var query_3 = require("./transaction/identity/query");
var unprovision_1 = require("./transaction/identity/unprovision");
var deputize_1 = require("./transaction/maintainers/deputize");
var reveal_1 = require("./transaction/meta/reveal");
var cancel_1 = require("./transaction/orders/cancel");
var define_3 = require("./transaction/orders/define");
var make_1 = require("./transaction/orders/make");
var query_4 = require("./transaction/orders/query");
var take_1 = require("./transaction/orders/take");
var send_1 = require("./transaction/splits/send");
var unwrap_1 = require("./transaction/splits/unwrap");
var wrap_1 = require("./transaction/splits/wrap");
var keys_1 = require("./utilities/keys");
var url = config.testURL;
var assetDefine = new define_1.defineAsset(url);
var assetMint = new mint_1.mintAsset(url);
var assetMutate = new mutate_1.mutateAsset(url);
var assetBurn = new burn_1.burnAsset(url);
var assetQuery = new query_1.queryAssets(url);
var sendCoin = new sendCoin_1.bank(url);
var clsQuery = new query_2.cls(url);
var identityNub = new nub_1.nubIdentity(url);
var identityDefine = new define_2.defineIdentity(url);
var identityIssue = new issue_1.issueIdentity(url);
var identityQuery = new query_3.queryIdentities(url);
var identityProvision = new provision_1.provisionIdentity(url);
var identityUnprovision = new unprovision_1.unprovisionIdentity(url);
var maintainerDeputize = new deputize_1.deputizeMaintainer(url);
var metaReveal = new reveal_1.revealMeta(url);
var orderDefine = new define_3.defineOrder(url);
var orderMake = new make_1.makeOrder(url);
var orderTake = new take_1.takeOrder(url);
var orderCancel = new cancel_1.cancelOrder(url);
var orderQuery = new query_4.queryOrders(url);
var splitsSend = new send_1.sendSplits(url);
var splitsWrap = new wrap_1.wrapSplits(url);
var splitsUnwrap = new unwrap_1.unwrapsplits(url);
var mnemonic =
  "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";
function test() {
  return __awaiter(this, void 0, void 0, function () {
    var randomWallet,
      userGivenMnemonic,
      wallet,
      createdStore,
      keyRes,
      mnemonicRestored,
      result,
      _res,
      check,
      res,
      check_1,
      results,
      listResponse,
      clsID,
      classificationID,
      classificationID1,
      identityID1,
      identityID2,
      assetClsID,
      assetID,
      assetClsID1,
      assetID1,
      mutableMetaProperties,
      orderCls,
      orderID;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          console.log("Creating random wallet...");
          return [4 /*yield*/, keys_1.createRandomWallet("")];
        case 1:
          randomWallet = _a.sent();
          console.log("randomwallet: ", randomWallet);
          userGivenMnemonic =
            "wage thunder live sense resemble foil apple course spin horse glass mansion midnight laundry acoustic rhythm loan scale talent push green direct brick please";
          console.log("Creating wallet from mnemonic...");
          return [4 /*yield*/, keys_1.createWallet(userGivenMnemonic, "")];
        case 2:
          wallet = _a.sent();
          console.log("wallet: ", wallet);
          return [4 /*yield*/, keys_1.createStore(wallet.mnemonic, "123123123")];
        case 3:
          createdStore = _a.sent();
          keyRes = "";
          if (createdStore.error) {
            console.log(createdStore.error);
          } else {
            console.log("Keystore created with name " + wallet.address + ".json");
            keyRes = createdStore.Response;
          }
          if (createdStore.error) {
            console.log("Unable to store Reason: " + createdStore.error);
          }
          console.log("Reading keystore...");
          return [4 /*yield*/, keys_1.decryptStore(keyRes, "123123123")];
        case 4:
          mnemonicRestored = _a.sent();
          console.log("mnemonicRestored: ", mnemonicRestored);
          console.log(
            "nub arguments: ",
            wallet.address,
            config.chain_id,
            mnemonic,
            config.nubID,
            25,
            "stake",
            200000,
            "block",
          );
          return [
            4 /*yield*/,
            nub(wallet.address, config.chain_id, mnemonic, config.nubID, 0, "stake", 200000, "block"),
          ];
        case 5:
          result = _a.sent();
          console.log("nub function executed");
          _res = JSON.parse(JSON.stringify(result));
          return [4 /*yield*/, helper_1.checkRawLog(_res.rawLog)];
        case 6:
          check = _a.sent();
          if (check) {
            console.log("\n\n**TX HASH for nub** :" + _res.transactionHash);
          } else {
            console.log("\n\n**TX failed for nub** :" + _res.rawLog);
          }
          if (!result) return [3 /*break*/, 79];
          return [
            4 /*yield*/,
            sendCoin.sendCoin(
              wallet.address,
              config.chain_id,
              wallet.address,
              mnemonic,
              "stake",
              "1000000",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 7:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 8:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Send Coin** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Send Coin** :" + res.rawLog);
          }
          return [4 /*yield*/, identityQuery.queryIdentity()];
        case 9:
          results = _a.sent();
          return [4 /*yield*/, helper_1.FindInResponse("identities", results, config.nubID)];
        case 10:
          listResponse = _a.sent();
          clsID = listResponse.classificationID + "|" + listResponse.hashID;
          return [
            4 /*yield*/,
            identityDefine.define(
              wallet.address,
              config.chain_id,
              mnemonic,
              clsID,
              "mutableProperties111:S|identity11543",
              "immutableProperties:S|identity22662",
              "mutableMetaProperties:S|identity34167",
              "immutableMetaProperties:S|identity45648",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 11:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 12:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for define identity 1** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for define identity 1** :" + res.rawLog);
          }
          return [4 /*yield*/, clsQuery.queryClassification()];
        case 13:
          results = _a.sent();
          return [
            4 /*yield*/,
            helper_1.FindInResponse("classifications", results, "immutableMetaProperties"),
          ];
        case 14:
          listResponse = _a.sent();
          classificationID = listResponse.chainID + "." + listResponse.hashID;
          return [
            4 /*yield*/,
            identityIssue.issue(
              wallet.address,
              config.chain_id,
              mnemonic,
              config.testAccountAddress,
              clsID,
              classificationID,
              "mutableProperties111:S|identity11543",
              "immutableProperties:S|identity22662",
              "mutableMetaProperties:S|identity34167",
              "immutableMetaProperties:S|identity45648",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 15:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 16:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for issue identity 1** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for issue identity 1** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            identityDefine.define(
              wallet.address,
              config.chain_id,
              mnemonic,
              clsID,
              "mutableProperties2:S|identity11543",
              "immutableProperties2:S|identity22662",
              "mutableMetaProperties2:S|identity34167",
              "immutableMetaProperties2:S|identity45648",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 17:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 18:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for define identity 2** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for define identity 2** :" + res.rawLog);
          }
          return [4 /*yield*/, clsQuery.queryClassification()];
        case 19:
          results = _a.sent();
          return [
            4 /*yield*/,
            helper_1.FindInResponse("classifications", results, "immutableMetaProperties2"),
          ];
        case 20:
          listResponse = _a.sent();
          classificationID1 = listResponse.chainID + "." + listResponse.hashID;
          return [
            4 /*yield*/,
            identityIssue.issue(
              wallet.address,
              config.chain_id,
              mnemonic,
              config.testAccountAddress,
              clsID,
              classificationID1,
              "mutableProperties2:S|identity11543",
              "immutableProperties2:S|identity22662",
              "mutableMetaProperties2:S|identity34167",
              "immutableMetaProperties2:S|identity45648",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 21:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 22:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for issue identity 2** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for issue identity 2** :" + res.rawLog);
          }
          return [4 /*yield*/, identityQuery.queryIdentity()];
        case 23:
          results = _a.sent();
          return [4 /*yield*/, helper_1.FindInResponse("identities", results, "immutableMetaProperties")];
        case 24:
          listResponse = _a.sent();
          identityID1 = listResponse.classificationID + "|" + listResponse.hashID;
          return [4 /*yield*/, identityQuery.queryIdentity()];
        case 25:
          results = _a.sent();
          return [4 /*yield*/, helper_1.FindInResponse("identities", results, "immutableMetaProperties2")];
        case 26:
          listResponse = _a.sent();
          identityID2 = listResponse.classificationID + "|" + listResponse.hashID;
          return [
            4 /*yield*/,
            identityProvision.provision(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              randomWallet.address,
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 27:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 28:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Provision** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Provision1** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            identityUnprovision.unprovision(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              randomWallet.address,
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 29:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 30:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Unprovision** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Unprovision1** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            assetDefine.define(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              "ASSET1:S|num1,burn:H|1",
              "ASSET2:S|",
              "ASSET3:S|num3",
              "ASSET4:S|num4",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 31:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 32:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for define assets** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for define assets** :" + res.rawLog);
          }
          return [4 /*yield*/, clsQuery.queryClassification()];
        case 33:
          results = _a.sent();
          return [4 /*yield*/, helper_1.FindInResponse("classifications", results, "ASSET4")];
        case 34:
          listResponse = _a.sent();
          assetClsID = listResponse.chainID + "." + listResponse.hashID;
          return [
            4 /*yield*/,
            assetMint.mint(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              identityID1,
              assetClsID,
              "ASSET1:S|num1,burn:H|1",
              "ASSET2:S|num2",
              "ASSET3:S|num3",
              "ASSET4:S|num4",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 35:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 36:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for mint assets** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for mint assets** :" + res.rawLog);
          }
          return [4 /*yield*/, assetQuery.queryAsset()];
        case 37:
          results = _a.sent();
          return [4 /*yield*/, helper_1.FindInResponse("assets", results, "ASSET4")];
        case 38:
          listResponse = _a.sent();
          assetID = listResponse.classificationID + "|" + listResponse.hashID;
          return [
            4 /*yield*/,
            assetMutate.mutate(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              assetID,
              "ASSET1:S|",
              "ASSET3:S|num3",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 39:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 40:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for mutate assets** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for mutate assets** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            assetDefine.define(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              "ASSET5:S|num1,burn:H|1",
              "ASSET6:S|",
              "ASSET7:S|num3",
              "ASSET8:S|num4",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 41:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 42:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for define assets 1** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for define assets 1** :" + res.rawLog);
          }
          return [4 /*yield*/, clsQuery.queryClassification()];
        case 43:
          results = _a.sent();
          return [4 /*yield*/, helper_1.FindInResponse("classifications", results, "ASSET8")];
        case 44:
          listResponse = _a.sent();
          assetClsID1 = listResponse.chainID + "." + listResponse.hashID;
          return [
            4 /*yield*/,
            assetMint.mint(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              identityID1,
              assetClsID1,
              "ASSET5:S|num1,burn:H|1",
              "ASSET6:S|num2",
              "ASSET7:S|num3",
              "ASSET8:S|num4",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 45:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 46:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for mint assets 2 ** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for mint assets 2** :" + res.rawLog);
          }
          return [4 /*yield*/, assetQuery.queryAsset()];
        case 47:
          results = _a.sent();
          return [4 /*yield*/, helper_1.FindInResponse("assets", results, "ASSET8")];
        case 48:
          listResponse = _a.sent();
          assetID1 = listResponse.classificationID + "|" + listResponse.hashID;
          return [
            4 /*yield*/,
            splitsSend.send(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              identityID2,
              assetID1,
              "0.000000000000000001",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 49:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 50:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Splits Send** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Splits Send** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            maintainerDeputize.deputize(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              assetClsID1,
              identityID2,
              "ASSET5:S|num1,burn:H|1,ASSET7:S|num3",
              true,
              true,
              true,
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 51:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 52:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for maintainer deputize** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for maintainer deputize** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            assetMutate.mutate(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID2,
              assetID1,
              "ASSET5:S|,burn:H|1",
              "ASSET7:S|num3",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 53:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 54:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for mutate assets 2** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for mutate assets 2** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            metaReveal.reveal(
              wallet.address,
              config.chain_id,
              mnemonic,
              "H|1",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 55:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 56:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for meta reveal** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for meta reveal** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            splitsWrap.wrap(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              "100000stake",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 57:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 58:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Wrap** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Wrap** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            splitsUnwrap.unwrap(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              "stake",
              "100",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 59:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 60:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Unwrap** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Unwrap** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            splitsSend.send(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              identityID2,
              "stake",
              "499",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 61:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 62:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Splits Send** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Splits Send** :" + res.rawLog);
          }
          mutableMetaProperties =
            "exchangeRate:D|1,makerOwnableSplit:D|0.000000000000000001,expiry:H|1000000,takerID:I|ID";
          return [
            4 /*yield*/,
            orderDefine.define(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID2,
              "description:S|",
              "Which Gift:S|Christmas Gift,What Gift:S|",
              mutableMetaProperties,
              "Gift:S|Exchange,AmazonOrderID:S|",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 63:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 64:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for define Order** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for define Order** :" + res.rawLog);
          }
          return [4 /*yield*/, clsQuery.queryClassification()];
        case 65:
          results = _a.sent();
          return [4 /*yield*/, helper_1.FindInResponse("classifications", results, "Gift")];
        case 66:
          listResponse = _a.sent();
          orderCls = listResponse.chainID + "." + listResponse.hashID;
          return [
            4 /*yield*/,
            orderMake.make(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID2,
              orderCls,
              "stake",
              "stake",
              "100000",
              "0.000000000000000001",
              "description:S|awesomeChocolates",
              "Which Gift:S|Christmas Gift,What Gift:S|Chocolates",
              "exchangeRate:D|1",
              "Gift:S|Exchange,AmazonOrderID:S|1234",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 67:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 68:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Make Order ** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Make Order ** :" + res.rawLog);
          }
          return [4 /*yield*/, orderQuery.queryOrder()];
        case 69:
          results = _a.sent();
          return [4 /*yield*/, helper_1.FindInResponse("orders", results, "Gift")];
        case 70:
          listResponse = _a.sent();
          orderID =
            listResponse.classificationID +
            "*" +
            listResponse.makerOwnableID +
            "*" +
            listResponse.takerOwnableID +
            "*" +
            listResponse.makerID +
            "*" +
            listResponse.hashID;
          return [
            4 /*yield*/,
            orderCancel.cancel(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID2,
              orderID,
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 71:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 72:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Cancel Order ** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Cancel Order ** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            orderMake.make(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID2,
              orderCls,
              "stake",
              "stake",
              "100000",
              "0.000000000000000001",
              "description:S|awesomeChocolates",
              "Which Gift:S|Christmas Gift,What Gift:S|Chocolates",
              "exchangeRate:D|1",
              "Gift:S|Exchange,AmazonOrderID:S|1234",
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 73:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 74:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Make Order ** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Make Order ** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            orderTake.take(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID2,
              "0.000000000000000001",
              orderID,
              25,
              "stake",
              200000,
              "block",
              "",
            ),
          ];
        case 75:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 76:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Take Order ** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Take Order ** :" + res.rawLog);
          }
          return [
            4 /*yield*/,
            assetBurn.burn(
              wallet.address,
              config.chain_id,
              mnemonic,
              identityID1,
              assetID,
              "25",
              "stake",
              "200000",
              "block",
              "",
            ),
          ];
        case 77:
          res = _a.sent();
          return [4 /*yield*/, helper_1.checkRawLog(res.rawLog)];
        case 78:
          check_1 = _a.sent();
          if (check_1) {
            console.log("\n\n**TX HASH for Asset Burn ** :" + res.transactionHash);
          } else {
            console.log("\n\n**TX failed for Asset Burn ** :" + res.rawLog);
          }
          return [3 /*break*/, 80];
        case 79:
          console.log("ERROR!!");
          console.log("NUB Tx failed!!");
          _a.label = 80;
        case 80:
          return [2 /*return*/];
      }
    });
  });
}
test();
function nub(address, chain_id, mnemonic, nubID, fee, token, gas, mode) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      return [
        2 /*return*/,
        new Promise(function (resolve) {
          return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [
                    4 /*yield*/,
                    identityNub.nub(address, chain_id, mnemonic, nubID, fee, token, gas, mode, ""),
                  ];
                case 1:
                  result = _a.sent();
                  resolve(result);
                  return [2 /*return*/];
              }
            });
          });
        }),
      ];
    });
  });
}
