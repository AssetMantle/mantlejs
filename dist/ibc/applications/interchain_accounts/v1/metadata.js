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
exports.Metadata = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.interchain_accounts.v1";
function createBaseMetadata() {
    return {
        version: "",
        controllerConnectionId: "",
        hostConnectionId: "",
        address: "",
        encoding: "",
        txType: "",
    };
}
exports.Metadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.controllerConnectionId !== "") {
            writer.uint32(18).string(message.controllerConnectionId);
        }
        if (message.hostConnectionId !== "") {
            writer.uint32(26).string(message.hostConnectionId);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        if (message.encoding !== "") {
            writer.uint32(42).string(message.encoding);
        }
        if (message.txType !== "") {
            writer.uint32(50).string(message.txType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.controllerConnectionId = reader.string();
                    break;
                case 3:
                    message.hostConnectionId = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.encoding = reader.string();
                    break;
                case 6:
                    message.txType = reader.string();
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
            version: isSet(object.version) ? String(object.version) : "",
            controllerConnectionId: isSet(object.controllerConnectionId)
                ? String(object.controllerConnectionId)
                : "",
            hostConnectionId: isSet(object.hostConnectionId)
                ? String(object.hostConnectionId)
                : "",
            address: isSet(object.address) ? String(object.address) : "",
            encoding: isSet(object.encoding) ? String(object.encoding) : "",
            txType: isSet(object.txType) ? String(object.txType) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.controllerConnectionId !== undefined &&
            (obj.controllerConnectionId = message.controllerConnectionId);
        message.hostConnectionId !== undefined &&
            (obj.hostConnectionId = message.hostConnectionId);
        message.address !== undefined && (obj.address = message.address);
        message.encoding !== undefined && (obj.encoding = message.encoding);
        message.txType !== undefined && (obj.txType = message.txType);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseMetadata();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.controllerConnectionId = (_b = object.controllerConnectionId) !== null && _b !== void 0 ? _b : "";
        message.hostConnectionId = (_c = object.hostConnectionId) !== null && _c !== void 0 ? _c : "";
        message.address = (_d = object.address) !== null && _d !== void 0 ? _d : "";
        message.encoding = (_e = object.encoding) !== null && _e !== void 0 ? _e : "";
        message.txType = (_f = object.txType) !== null && _f !== void 0 ? _f : "";
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
//# sourceMappingURL=metadata.js.map