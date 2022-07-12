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
exports.Params = exports.Minter = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.mint.v1beta1";
function createBaseMinter() {
    return { inflation: "", annualProvisions: "" };
}
exports.Minter = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.inflation !== "") {
            writer.uint32(10).string(message.inflation);
        }
        if (message.annualProvisions !== "") {
            writer.uint32(18).string(message.annualProvisions);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMinter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = reader.string();
                    break;
                case 2:
                    message.annualProvisions = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            inflation: isSet(object.inflation) ? String(object.inflation) : "",
            annualProvisions: isSet(object.annualProvisions)
                ? String(object.annualProvisions)
                : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.inflation !== undefined && (obj.inflation = message.inflation);
        message.annualProvisions !== undefined &&
            (obj.annualProvisions = message.annualProvisions);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMinter();
        message.inflation = (_a = object.inflation) !== null && _a !== void 0 ? _a : "";
        message.annualProvisions = (_b = object.annualProvisions) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseParams() {
    return {
        mintDenom: "",
        inflationRateChange: "",
        inflationMax: "",
        inflationMin: "",
        goalBonded: "",
        blocksPerYear: long_1.default.UZERO,
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.inflationRateChange !== "") {
            writer.uint32(18).string(message.inflationRateChange);
        }
        if (message.inflationMax !== "") {
            writer.uint32(26).string(message.inflationMax);
        }
        if (message.inflationMin !== "") {
            writer.uint32(34).string(message.inflationMin);
        }
        if (message.goalBonded !== "") {
            writer.uint32(42).string(message.goalBonded);
        }
        if (!message.blocksPerYear.isZero()) {
            writer.uint32(48).uint64(message.blocksPerYear);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.inflationRateChange = reader.string();
                    break;
                case 3:
                    message.inflationMax = reader.string();
                    break;
                case 4:
                    message.inflationMin = reader.string();
                    break;
                case 5:
                    message.goalBonded = reader.string();
                    break;
                case 6:
                    message.blocksPerYear = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
            inflationRateChange: isSet(object.inflationRateChange)
                ? String(object.inflationRateChange)
                : "",
            inflationMax: isSet(object.inflationMax)
                ? String(object.inflationMax)
                : "",
            inflationMin: isSet(object.inflationMin)
                ? String(object.inflationMin)
                : "",
            goalBonded: isSet(object.goalBonded) ? String(object.goalBonded) : "",
            blocksPerYear: isSet(object.blocksPerYear)
                ? long_1.default.fromValue(object.blocksPerYear)
                : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
        message.inflationRateChange !== undefined &&
            (obj.inflationRateChange = message.inflationRateChange);
        message.inflationMax !== undefined &&
            (obj.inflationMax = message.inflationMax);
        message.inflationMin !== undefined &&
            (obj.inflationMin = message.inflationMin);
        message.goalBonded !== undefined && (obj.goalBonded = message.goalBonded);
        message.blocksPerYear !== undefined &&
            (obj.blocksPerYear = (message.blocksPerYear || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseParams();
        message.mintDenom = (_a = object.mintDenom) !== null && _a !== void 0 ? _a : "";
        message.inflationRateChange = (_b = object.inflationRateChange) !== null && _b !== void 0 ? _b : "";
        message.inflationMax = (_c = object.inflationMax) !== null && _c !== void 0 ? _c : "";
        message.inflationMin = (_d = object.inflationMin) !== null && _d !== void 0 ? _d : "";
        message.goalBonded = (_e = object.goalBonded) !== null && _e !== void 0 ? _e : "";
        message.blocksPerYear =
            object.blocksPerYear !== undefined && object.blocksPerYear !== null
                ? long_1.default.fromValue(object.blocksPerYear)
                : long_1.default.UZERO;
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=mint.js.map