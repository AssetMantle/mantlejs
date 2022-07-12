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
exports.Params = exports.ValidatorSigningInfo = exports.protobufPackage = void 0;
/* eslint-disable */
var duration_js_1 = require("../../../google/protobuf/duration.js");
var timestamp_js_1 = require("../../../google/protobuf/timestamp.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.slashing.v1beta1";
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        startHeight: long_1.default.ZERO,
        indexOffset: long_1.default.ZERO,
        jailedUntil: undefined,
        tombstoned: false,
        missedBlocksCounter: long_1.default.ZERO,
    };
}
exports.ValidatorSigningInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.startHeight.isZero()) {
            writer.uint32(16).int64(message.startHeight);
        }
        if (!message.indexOffset.isZero()) {
            writer.uint32(24).int64(message.indexOffset);
        }
        if (message.jailedUntil !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (!message.missedBlocksCounter.isZero()) {
            writer.uint32(48).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.startHeight = reader.int64();
                    break;
                case 3:
                    message.indexOffset = reader.int64();
                    break;
                case 4:
                    message.jailedUntil = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missedBlocksCounter = reader.int64();
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
            address: isSet(object.address) ? String(object.address) : "",
            startHeight: isSet(object.startHeight)
                ? long_1.default.fromValue(object.startHeight)
                : long_1.default.ZERO,
            indexOffset: isSet(object.indexOffset)
                ? long_1.default.fromValue(object.indexOffset)
                : long_1.default.ZERO,
            jailedUntil: isSet(object.jailedUntil)
                ? fromJsonTimestamp(object.jailedUntil)
                : undefined,
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            missedBlocksCounter: isSet(object.missedBlocksCounter)
                ? long_1.default.fromValue(object.missedBlocksCounter)
                : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.startHeight !== undefined &&
            (obj.startHeight = (message.startHeight || long_1.default.ZERO).toString());
        message.indexOffset !== undefined &&
            (obj.indexOffset = (message.indexOffset || long_1.default.ZERO).toString());
        message.jailedUntil !== undefined &&
            (obj.jailedUntil = message.jailedUntil.toISOString());
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.missedBlocksCounter !== undefined &&
            (obj.missedBlocksCounter = (message.missedBlocksCounter || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseValidatorSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.startHeight =
            object.startHeight !== undefined && object.startHeight !== null
                ? long_1.default.fromValue(object.startHeight)
                : long_1.default.ZERO;
        message.indexOffset =
            object.indexOffset !== undefined && object.indexOffset !== null
                ? long_1.default.fromValue(object.indexOffset)
                : long_1.default.ZERO;
        message.jailedUntil = (_b = object.jailedUntil) !== null && _b !== void 0 ? _b : undefined;
        message.tombstoned = (_c = object.tombstoned) !== null && _c !== void 0 ? _c : false;
        message.missedBlocksCounter =
            object.missedBlocksCounter !== undefined &&
                object.missedBlocksCounter !== null
                ? long_1.default.fromValue(object.missedBlocksCounter)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseParams() {
    return {
        signedBlocksWindow: long_1.default.ZERO,
        minSignedPerWindow: new Uint8Array(),
        downtimeJailDuration: undefined,
        slashFractionDoubleSign: new Uint8Array(),
        slashFractionDowntime: new Uint8Array(),
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.signedBlocksWindow.isZero()) {
            writer.uint32(8).int64(message.signedBlocksWindow);
        }
        if (message.minSignedPerWindow.length !== 0) {
            writer.uint32(18).bytes(message.minSignedPerWindow);
        }
        if (message.downtimeJailDuration !== undefined) {
            duration_js_1.Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slashFractionDoubleSign.length !== 0) {
            writer.uint32(34).bytes(message.slashFractionDoubleSign);
        }
        if (message.slashFractionDowntime.length !== 0) {
            writer.uint32(42).bytes(message.slashFractionDowntime);
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
                    message.signedBlocksWindow = reader.int64();
                    break;
                case 2:
                    message.minSignedPerWindow = reader.bytes();
                    break;
                case 3:
                    message.downtimeJailDuration = duration_js_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.slashFractionDoubleSign = reader.bytes();
                    break;
                case 5:
                    message.slashFractionDowntime = reader.bytes();
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
            signedBlocksWindow: isSet(object.signedBlocksWindow)
                ? long_1.default.fromValue(object.signedBlocksWindow)
                : long_1.default.ZERO,
            minSignedPerWindow: isSet(object.minSignedPerWindow)
                ? bytesFromBase64(object.minSignedPerWindow)
                : new Uint8Array(),
            downtimeJailDuration: isSet(object.downtimeJailDuration)
                ? duration_js_1.Duration.fromJSON(object.downtimeJailDuration)
                : undefined,
            slashFractionDoubleSign: isSet(object.slashFractionDoubleSign)
                ? bytesFromBase64(object.slashFractionDoubleSign)
                : new Uint8Array(),
            slashFractionDowntime: isSet(object.slashFractionDowntime)
                ? bytesFromBase64(object.slashFractionDowntime)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.signedBlocksWindow !== undefined &&
            (obj.signedBlocksWindow = (message.signedBlocksWindow || long_1.default.ZERO).toString());
        message.minSignedPerWindow !== undefined &&
            (obj.minSignedPerWindow = base64FromBytes(message.minSignedPerWindow !== undefined
                ? message.minSignedPerWindow
                : new Uint8Array()));
        message.downtimeJailDuration !== undefined &&
            (obj.downtimeJailDuration = message.downtimeJailDuration
                ? duration_js_1.Duration.toJSON(message.downtimeJailDuration)
                : undefined);
        message.slashFractionDoubleSign !== undefined &&
            (obj.slashFractionDoubleSign = base64FromBytes(message.slashFractionDoubleSign !== undefined
                ? message.slashFractionDoubleSign
                : new Uint8Array()));
        message.slashFractionDowntime !== undefined &&
            (obj.slashFractionDowntime = base64FromBytes(message.slashFractionDowntime !== undefined
                ? message.slashFractionDowntime
                : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseParams();
        message.signedBlocksWindow =
            object.signedBlocksWindow !== undefined &&
                object.signedBlocksWindow !== null
                ? long_1.default.fromValue(object.signedBlocksWindow)
                : long_1.default.ZERO;
        message.minSignedPerWindow = (_a = object.minSignedPerWindow) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.downtimeJailDuration =
            object.downtimeJailDuration !== undefined &&
                object.downtimeJailDuration !== null
                ? duration_js_1.Duration.fromPartial(object.downtimeJailDuration)
                : undefined;
        message.slashFractionDoubleSign = (_b = object.slashFractionDoubleSign) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.slashFractionDowntime = (_c = object.slashFractionDowntime) !== null && _c !== void 0 ? _c : new Uint8Array();
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
function toTimestamp(date) {
    var seconds = numberToLong(date.getTime() / 1000);
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_js_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=slashing.js.map