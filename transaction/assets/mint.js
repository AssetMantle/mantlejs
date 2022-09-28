"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
exports.mintAsset = void 0;
var config = __importStar(require("../../config.json"));
var request_1 = __importDefault(require("request"));
var persistenceJS_1 = require("../../utilities/persistenceJS");
var broadcastTx_1 = require("../../utilities/broadcastTx");
var keys_1 = require("../../utilities/keys");
var mintAsset = /** @class */ (function (_super) {
  __extends(mintAsset, _super);
  function mintAsset() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.mint = function (
      address,
      chain_id,
      mnemonic,
      toID,
      fromID,
      classificationID,
      mutableProperties,
      immutableProperties,
      mutableMetaProperties,
      immutableMetaProperties,
      feesAmount,
      feesToken,
      gas,
      mode,
      memo,
    ) {
      return __awaiter(_this, void 0, void 0, function () {
        var wallet, path, options;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, keys_1.getWallet(mnemonic, "")];
            case 1:
              wallet = _a.sent();
              path = this.path;
              options = {
                method: "POST",
                url: path + config.mintAssetPath,
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  type: config.mintAssetType,
                  value: {
                    baseReq: {
                      from: address,
                      chain_id: chain_id,
                      memo: memo,
                      fees: [{ amount: String(feesAmount), denom: feesToken }],
                      gas: String(gas),
                    },
                    toID: toID,
                    fromID: fromID,
                    classificationID: classificationID,
                    mutableProperties: mutableProperties,
                    immutableProperties: immutableProperties,
                    mutableMetaProperties: mutableMetaProperties,
                    immutableMetaProperties: immutableMetaProperties,
                  },
                }),
              };
              return [
                2 /*return*/,
                new Promise(function (resolve, reject) {
                  request_1["default"](options, function (error, response) {
                    if (error) {
                      reject(error);
                    }
                    var result = JSON.parse(response.body);
                    resolve(
                      broadcastTx_1.broadcastTx(
                        path,
                        wallet,
                        mnemonic,
                        result.value,
                        chain_id,
                        result.value.fee.gas,
                        config.GASPRICE,
                        mode,
                      ),
                    );
                  });
                })["catch"](function (error) {
                  console.log("Promise Rejected: " + error);
                  return error;
                }),
              ];
          }
        });
      });
    };
    _this.createAssetMintMsg = function (
      address,
      chain_id,
      toID,
      fromID,
      classificationID,
      mutableProperties,
      immutableProperties,
      mutableMetaProperties,
      immutableMetaProperties,
      feesAmount,
      feesToken,
      gas,
      memo,
    ) {
      return __awaiter(_this, void 0, void 0, function () {
        var path, options;
        return __generator(this, function (_a) {
          path = this.path;
          options = {
            method: "POST",
            url: path + config.mintAssetPath,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: config.mintAssetType,
              value: {
                baseReq: {
                  from: address,
                  chain_id: chain_id,
                  memo: memo,
                  fees: [{ amount: String(feesAmount), denom: feesToken }],
                  gas: String(gas),
                },
                toID: toID,
                fromID: fromID,
                classificationID: classificationID,
                mutableProperties: mutableProperties,
                immutableProperties: immutableProperties,
                mutableMetaProperties: mutableMetaProperties,
                immutableMetaProperties: immutableMetaProperties,
              },
            }),
          };
          return [
            2 /*return*/,
            new Promise(function (resolve, reject) {
              request_1["default"](options, function (error, response) {
                if (error) {
                  reject(error);
                }
                var result = JSON.parse(response.body);
                resolve(result);
              });
            })["catch"](function (error) {
              console.log("Promise Rejected: " + error);
              return error;
            }),
          ];
        });
      });
    };
    return _this;
  }
  return mintAsset;
})(persistenceJS_1.Persistence);
exports.mintAsset = mintAsset;
