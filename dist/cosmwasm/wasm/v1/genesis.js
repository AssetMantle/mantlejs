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
exports.Sequence = exports.Contract = exports.Code = exports.GenesisState_GenMsgs = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var types_js_1 = require("./types.js");
var long_1 = __importDefault(require("long"));
var tx_js_1 = require("./tx.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmwasm.wasm.v1";
function createBaseGenesisState() {
    return {
        params: undefined,
        codes: [],
        contracts: [],
        sequences: [],
        genMsgs: [],
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            types_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.codes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Code.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.contracts; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Contract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.sequences; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.Sequence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _f = 0, _g = message.genMsgs; _f < _g.length; _f++) {
            var v = _g[_f];
            exports.GenesisState_GenMsgs.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = types_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.codes.push(exports.Code.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.contracts.push(exports.Contract.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(exports.Sequence.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.genMsgs.push(exports.GenesisState_GenMsgs.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? types_js_1.Params.fromJSON(object.params) : undefined,
            codes: Array.isArray(object === null || object === void 0 ? void 0 : object.codes)
                ? object.codes.map(function (e) { return exports.Code.fromJSON(e); })
                : [],
            contracts: Array.isArray(object === null || object === void 0 ? void 0 : object.contracts)
                ? object.contracts.map(function (e) { return exports.Contract.fromJSON(e); })
                : [],
            sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences)
                ? object.sequences.map(function (e) { return exports.Sequence.fromJSON(e); })
                : [],
            genMsgs: Array.isArray(object === null || object === void 0 ? void 0 : object.genMsgs)
                ? object.genMsgs.map(function (e) { return exports.GenesisState_GenMsgs.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? types_js_1.Params.toJSON(message.params) : undefined);
        if (message.codes) {
            obj.codes = message.codes.map(function (e) { return (e ? exports.Code.toJSON(e) : undefined); });
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map(function (e) {
                return e ? exports.Contract.toJSON(e) : undefined;
            });
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map(function (e) {
                return e ? exports.Sequence.toJSON(e) : undefined;
            });
        }
        else {
            obj.sequences = [];
        }
        if (message.genMsgs) {
            obj.genMsgs = message.genMsgs.map(function (e) {
                return e ? exports.GenesisState_GenMsgs.toJSON(e) : undefined;
            });
        }
        else {
            obj.genMsgs = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? types_js_1.Params.fromPartial(object.params)
                : undefined;
        message.codes = ((_a = object.codes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Code.fromPartial(e); })) || [];
        message.contracts =
            ((_b = object.contracts) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Contract.fromPartial(e); })) || [];
        message.sequences =
            ((_c = object.sequences) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.Sequence.fromPartial(e); })) || [];
        message.genMsgs =
            ((_d = object.genMsgs) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.GenesisState_GenMsgs.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseGenesisState_GenMsgs() {
    return {
        storeCode: undefined,
        instantiateContract: undefined,
        executeContract: undefined,
    };
}
exports.GenesisState_GenMsgs = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.storeCode !== undefined) {
            tx_js_1.MsgStoreCode.encode(message.storeCode, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateContract !== undefined) {
            tx_js_1.MsgInstantiateContract.encode(message.instantiateContract, writer.uint32(18).fork()).ldelim();
        }
        if (message.executeContract !== undefined) {
            tx_js_1.MsgExecuteContract.encode(message.executeContract, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState_GenMsgs();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeCode = tx_js_1.MsgStoreCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instantiateContract = tx_js_1.MsgInstantiateContract.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.executeContract = tx_js_1.MsgExecuteContract.decode(reader, reader.uint32());
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
            storeCode: isSet(object.storeCode)
                ? tx_js_1.MsgStoreCode.fromJSON(object.storeCode)
                : undefined,
            instantiateContract: isSet(object.instantiateContract)
                ? tx_js_1.MsgInstantiateContract.fromJSON(object.instantiateContract)
                : undefined,
            executeContract: isSet(object.executeContract)
                ? tx_js_1.MsgExecuteContract.fromJSON(object.executeContract)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.storeCode !== undefined &&
            (obj.storeCode = message.storeCode
                ? tx_js_1.MsgStoreCode.toJSON(message.storeCode)
                : undefined);
        message.instantiateContract !== undefined &&
            (obj.instantiateContract = message.instantiateContract
                ? tx_js_1.MsgInstantiateContract.toJSON(message.instantiateContract)
                : undefined);
        message.executeContract !== undefined &&
            (obj.executeContract = message.executeContract
                ? tx_js_1.MsgExecuteContract.toJSON(message.executeContract)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseGenesisState_GenMsgs();
        message.storeCode =
            object.storeCode !== undefined && object.storeCode !== null
                ? tx_js_1.MsgStoreCode.fromPartial(object.storeCode)
                : undefined;
        message.instantiateContract =
            object.instantiateContract !== undefined &&
                object.instantiateContract !== null
                ? tx_js_1.MsgInstantiateContract.fromPartial(object.instantiateContract)
                : undefined;
        message.executeContract =
            object.executeContract !== undefined && object.executeContract !== null
                ? tx_js_1.MsgExecuteContract.fromPartial(object.executeContract)
                : undefined;
        return message;
    },
};
function createBaseCode() {
    return {
        codeId: long_1.default.UZERO,
        codeInfo: undefined,
        codeBytes: new Uint8Array(),
        pinned: false,
    };
}
exports.Code = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.codeInfo !== undefined) {
            types_js_1.CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.codeBytes.length !== 0) {
            writer.uint32(26).bytes(message.codeBytes);
        }
        if (message.pinned === true) {
            writer.uint32(32).bool(message.pinned);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.codeInfo = types_js_1.CodeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codeBytes = reader.bytes();
                    break;
                case 4:
                    message.pinned = reader.bool();
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
            codeId: isSet(object.codeId) ? long_1.default.fromValue(object.codeId) : long_1.default.UZERO,
            codeInfo: isSet(object.codeInfo)
                ? types_js_1.CodeInfo.fromJSON(object.codeInfo)
                : undefined,
            codeBytes: isSet(object.codeBytes)
                ? bytesFromBase64(object.codeBytes)
                : new Uint8Array(),
            pinned: isSet(object.pinned) ? Boolean(object.pinned) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.codeId !== undefined &&
            (obj.codeId = (message.codeId || long_1.default.UZERO).toString());
        message.codeInfo !== undefined &&
            (obj.codeInfo = message.codeInfo
                ? types_js_1.CodeInfo.toJSON(message.codeInfo)
                : undefined);
        message.codeBytes !== undefined &&
            (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
        message.pinned !== undefined && (obj.pinned = message.pinned);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCode();
        message.codeId =
            object.codeId !== undefined && object.codeId !== null
                ? long_1.default.fromValue(object.codeId)
                : long_1.default.UZERO;
        message.codeInfo =
            object.codeInfo !== undefined && object.codeInfo !== null
                ? types_js_1.CodeInfo.fromPartial(object.codeInfo)
                : undefined;
        message.codeBytes = (_a = object.codeBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pinned = (_b = object.pinned) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseContract() {
    return { contractAddress: "", contractInfo: undefined, contractState: [] };
}
exports.Contract = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.contractInfo !== undefined) {
            types_js_1.ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.contractState; _i < _a.length; _i++) {
            var v = _a[_i];
            types_js_1.Model.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseContract();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.contractInfo = types_js_1.ContractInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.contractState.push(types_js_1.Model.decode(reader, reader.uint32()));
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
            contractAddress: isSet(object.contractAddress)
                ? String(object.contractAddress)
                : "",
            contractInfo: isSet(object.contractInfo)
                ? types_js_1.ContractInfo.fromJSON(object.contractInfo)
                : undefined,
            contractState: Array.isArray(object === null || object === void 0 ? void 0 : object.contractState)
                ? object.contractState.map(function (e) { return types_js_1.Model.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        message.contractInfo !== undefined &&
            (obj.contractInfo = message.contractInfo
                ? types_js_1.ContractInfo.toJSON(message.contractInfo)
                : undefined);
        if (message.contractState) {
            obj.contractState = message.contractState.map(function (e) {
                return e ? types_js_1.Model.toJSON(e) : undefined;
            });
        }
        else {
            obj.contractState = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseContract();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.contractInfo =
            object.contractInfo !== undefined && object.contractInfo !== null
                ? types_js_1.ContractInfo.fromPartial(object.contractInfo)
                : undefined;
        message.contractState =
            ((_b = object.contractState) === null || _b === void 0 ? void 0 : _b.map(function (e) { return types_js_1.Model.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSequence() {
    return { idKey: new Uint8Array(), value: long_1.default.UZERO };
}
exports.Sequence = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.idKey.length !== 0) {
            writer.uint32(10).bytes(message.idKey);
        }
        if (!message.value.isZero()) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSequence();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idKey = reader.bytes();
                    break;
                case 2:
                    message.value = reader.uint64();
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
            idKey: isSet(object.idKey)
                ? bytesFromBase64(object.idKey)
                : new Uint8Array(),
            value: isSet(object.value) ? long_1.default.fromValue(object.value) : long_1.default.UZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.idKey !== undefined &&
            (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = (message.value || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSequence();
        message.idKey = (_a = object.idKey) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value =
            object.value !== undefined && object.value !== null
                ? long_1.default.fromValue(object.value)
                : long_1.default.UZERO;
        return message;
    },
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
var atob = globalThis.atob ||
    (function (b64) { return globalThis.Buffer.from(b64, "base64").toString("binary"); });
function bytesFromBase64(b64) {
    var bin = atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
var btoa = globalThis.btoa ||
    (function (bin) { return globalThis.Buffer.from(bin, "binary").toString("base64"); });
function base64FromBytes(arr) {
    var bin = [];
    arr.forEach(function (byte) {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map