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
exports.AuthSigMessage = exports.Packet = exports.PacketMsg = exports.PacketPong = exports.PacketPing = exports.protobufPackage = void 0;
/* eslint-disable */
var keys_js_1 = require("../crypto/keys.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.p2p";
function createBasePacketPing() {
    return {};
}
exports.PacketPing = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePacketPing();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBasePacketPing();
        return message;
    },
};
function createBasePacketPong() {
    return {};
}
exports.PacketPong = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePacketPong();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBasePacketPong();
        return message;
    },
};
function createBasePacketMsg() {
    return { channelId: 0, eof: false, data: new Uint8Array() };
}
exports.PacketMsg = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.channelId !== 0) {
            writer.uint32(8).int32(message.channelId);
        }
        if (message.eof === true) {
            writer.uint32(16).bool(message.eof);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePacketMsg();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.int32();
                    break;
                case 2:
                    message.eof = reader.bool();
                    break;
                case 3:
                    message.data = reader.bytes();
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
            channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
            eof: isSet(object.eof) ? Boolean(object.eof) : false,
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.channelId !== undefined &&
            (obj.channelId = Math.round(message.channelId));
        message.eof !== undefined && (obj.eof = message.eof);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePacketMsg();
        message.channelId = (_a = object.channelId) !== null && _a !== void 0 ? _a : 0;
        message.eof = (_b = object.eof) !== null && _b !== void 0 ? _b : false;
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBasePacket() {
    return { packetPing: undefined, packetPong: undefined, packetMsg: undefined };
}
exports.Packet = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.packetPing !== undefined) {
            exports.PacketPing.encode(message.packetPing, writer.uint32(10).fork()).ldelim();
        }
        if (message.packetPong !== undefined) {
            exports.PacketPong.encode(message.packetPong, writer.uint32(18).fork()).ldelim();
        }
        if (message.packetMsg !== undefined) {
            exports.PacketMsg.encode(message.packetMsg, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packetPing = exports.PacketPing.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.packetPong = exports.PacketPong.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.packetMsg = exports.PacketMsg.decode(reader, reader.uint32());
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
            packetPing: isSet(object.packetPing)
                ? exports.PacketPing.fromJSON(object.packetPing)
                : undefined,
            packetPong: isSet(object.packetPong)
                ? exports.PacketPong.fromJSON(object.packetPong)
                : undefined,
            packetMsg: isSet(object.packetMsg)
                ? exports.PacketMsg.fromJSON(object.packetMsg)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.packetPing !== undefined &&
            (obj.packetPing = message.packetPing
                ? exports.PacketPing.toJSON(message.packetPing)
                : undefined);
        message.packetPong !== undefined &&
            (obj.packetPong = message.packetPong
                ? exports.PacketPong.toJSON(message.packetPong)
                : undefined);
        message.packetMsg !== undefined &&
            (obj.packetMsg = message.packetMsg
                ? exports.PacketMsg.toJSON(message.packetMsg)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBasePacket();
        message.packetPing =
            object.packetPing !== undefined && object.packetPing !== null
                ? exports.PacketPing.fromPartial(object.packetPing)
                : undefined;
        message.packetPong =
            object.packetPong !== undefined && object.packetPong !== null
                ? exports.PacketPong.fromPartial(object.packetPong)
                : undefined;
        message.packetMsg =
            object.packetMsg !== undefined && object.packetMsg !== null
                ? exports.PacketMsg.fromPartial(object.packetMsg)
                : undefined;
        return message;
    },
};
function createBaseAuthSigMessage() {
    return { pubKey: undefined, sig: new Uint8Array() };
}
exports.AuthSigMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pubKey !== undefined) {
            keys_js_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.sig.length !== 0) {
            writer.uint32(18).bytes(message.sig);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuthSigMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = keys_js_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sig = reader.bytes();
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
            pubKey: isSet(object.pubKey)
                ? keys_js_1.PublicKey.fromJSON(object.pubKey)
                : undefined,
            sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pubKey !== undefined &&
            (obj.pubKey = message.pubKey
                ? keys_js_1.PublicKey.toJSON(message.pubKey)
                : undefined);
        message.sig !== undefined &&
            (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAuthSigMessage();
        message.pubKey =
            object.pubKey !== undefined && object.pubKey !== null
                ? keys_js_1.PublicKey.fromPartial(object.pubKey)
                : undefined;
        message.sig = (_a = object.sig) !== null && _a !== void 0 ? _a : new Uint8Array();
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
//# sourceMappingURL=conn.js.map