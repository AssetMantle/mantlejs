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
exports.queryAssets = void 0;
const config = __importStar(require("../../config.json"));
const request_1 = __importDefault(require("request"));
const mantleJS_1 = require("../../utilities/mantleJS");
class queryAssets extends mantleJS_1.AssetMantle {
    constructor() {
        super(...arguments);
        this.queryAsset = async () => {
            let path = this.path;
            let options = {
                method: "GET",
                url: path + config.queryAssetPath,
                headers: {},
            };
            return new Promise(function (resolve, reject) {
                request_1.default(options, async function (error, res) {
                    if (error) {
                        reject(error);
                    }
                    let result = JSON.parse(res.body);
                    let list = result.result.value.assets.value.list;
                    resolve(list);
                });
            }).catch(function (error) {
                console.log("Promise Rejected: " + error);
                return error;
            });
        };
        this.queryAssetWithID = async (id) => {
            let path = this.path;
            let options = {
                method: "GET",
                url: path + config.queryAssetWithID + id,
                headers: {},
            };
            return new Promise(function (resolve, reject) {
                request_1.default(options, async function (error, res) {
                    if (error) {
                        reject(error);
                    }
                    resolve(res.body);
                });
            }).catch(function (error) {
                console.log("Promise Rejected: " + error);
                return error;
            });
        };
    }
}
exports.queryAssets = queryAssets;
//# sourceMappingURL=query.js.map