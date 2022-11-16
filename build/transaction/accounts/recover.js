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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoverAccount = void 0;
const config = __importStar(require("../../config.json"));
const request_1 = __importDefault(require("request"));
const mantleJS_1 = require("../../utilities/mantleJS");
//import {Promise} from 'es6-promise';
class recoverAccount extends mantleJS_1.AssetMantle {
  constructor() {
    super(...arguments);
    this.recover = async (mnemonic, name) => {
      let options = {
        method: "POST",
        url: this.path + config.keysRecover,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, mnemonic: mnemonic }),
      };
      return new Promise(function (resolve, reject) {
        request_1.default(options, function (error, response) {
          if (error) {
            reject(error);
          }
          let result = JSON.parse(response.body);
          let address = result.address;
          Promise.resolve(address);
        });
      }).catch(function (error) {
        console.log("Promise Rejected: " + error);
        return error;
      });
    };
  }
}
exports.recoverAccount = recoverAccount;
//# sourceMappingURL=recover.js.map
