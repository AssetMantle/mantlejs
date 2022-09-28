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
exports.queryMaintainer = void 0;
const config = __importStar(require("../../config.json"));
const request_1 = __importDefault(require("request"));
const persistenceJS_1 = require("../../utilities/persistenceJS");
class queryMaintainer extends persistenceJS_1.Persistence {
    constructor() {
        super(...arguments);
        this.queryMaintainerWithID = async (id) => {
            let path = this.path;
            let options = {
                method: "GET",
                url: path + config.queryMaintainerWithID + id,
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
exports.queryMaintainer = queryMaintainer;
//# sourceMappingURL=query.js.map