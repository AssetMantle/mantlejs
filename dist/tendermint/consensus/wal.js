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
exports.TimedWALMessage = exports.WALMessage = exports.EndHeight = exports.TimeoutInfo = exports.MsgInfo = exports.protobufPackage = void 0;
/* eslint-disable */
var types_js_1 = require("./types.js");
var duration_js_1 = require("../../google/protobuf/duration.js");
var timestamp_js_1 = require("../../google/protobuf/timestamp.js");
var long_1 = __importDefault(require("long"));
var events_js_1 = require("../types/events.js");
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.consensus";
function createBaseMsgInfo() {
    return { msg: undefined, peerId: "" };
}
exports.MsgInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.msg !== undefined) {
            types_js_1.Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        if (message.peerId !== "") {
            writer.uint32(18).string(message.peerId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = types_js_1.Message.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.peerId = reader.string();
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
            msg: isSet(object.msg) ? types_js_1.Message.fromJSON(object.msg) : undefined,
            peerId: isSet(object.peerId) ? String(object.peerId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.msg !== undefined &&
            (obj.msg = message.msg ? types_js_1.Message.toJSON(message.msg) : undefined);
        message.peerId !== undefined && (obj.peerId = message.peerId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMsgInfo();
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? types_js_1.Message.fromPartial(object.msg)
                : undefined;
        message.peerId = (_a = object.peerId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseTimeoutInfo() {
    return { duration: undefined, height: long_1.default.ZERO, round: 0, step: 0 };
}
exports.TimeoutInfo = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.duration !== undefined) {
            duration_js_1.Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.step !== 0) {
            writer.uint32(32).uint32(message.step);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTimeoutInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = duration_js_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.step = reader.uint32();
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
            duration: isSet(object.duration)
                ? duration_js_1.Duration.fromJSON(object.duration)
                : undefined,
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
            round: isSet(object.round) ? Number(object.round) : 0,
            step: isSet(object.step) ? Number(object.step) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? duration_js_1.Duration.toJSON(message.duration)
                : undefined);
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.step !== undefined && (obj.step = Math.round(message.step));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTimeoutInfo();
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? duration_js_1.Duration.fromPartial(object.duration)
                : undefined;
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.step = (_b = object.step) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseEndHeight() {
    return { height: long_1.default.ZERO };
}
exports.EndHeight = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEndHeight();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseEndHeight();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseWALMessage() {
    return {
        eventDataRoundState: undefined,
        msgInfo: undefined,
        timeoutInfo: undefined,
        endHeight: undefined,
    };
}
exports.WALMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.eventDataRoundState !== undefined) {
            events_js_1.EventDataRoundState.encode(message.eventDataRoundState, writer.uint32(10).fork()).ldelim();
        }
        if (message.msgInfo !== undefined) {
            exports.MsgInfo.encode(message.msgInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.timeoutInfo !== undefined) {
            exports.TimeoutInfo.encode(message.timeoutInfo, writer.uint32(26).fork()).ldelim();
        }
        if (message.endHeight !== undefined) {
            exports.EndHeight.encode(message.endHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWALMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventDataRoundState = events_js_1.EventDataRoundState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.msgInfo = exports.MsgInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timeoutInfo = exports.TimeoutInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.endHeight = exports.EndHeight.decode(reader, reader.uint32());
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
            eventDataRoundState: isSet(object.eventDataRoundState)
                ? events_js_1.EventDataRoundState.fromJSON(object.eventDataRoundState)
                : undefined,
            msgInfo: isSet(object.msgInfo)
                ? exports.MsgInfo.fromJSON(object.msgInfo)
                : undefined,
            timeoutInfo: isSet(object.timeoutInfo)
                ? exports.TimeoutInfo.fromJSON(object.timeoutInfo)
                : undefined,
            endHeight: isSet(object.endHeight)
                ? exports.EndHeight.fromJSON(object.endHeight)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.eventDataRoundState !== undefined &&
            (obj.eventDataRoundState = message.eventDataRoundState
                ? events_js_1.EventDataRoundState.toJSON(message.eventDataRoundState)
                : undefined);
        message.msgInfo !== undefined &&
            (obj.msgInfo = message.msgInfo
                ? exports.MsgInfo.toJSON(message.msgInfo)
                : undefined);
        message.timeoutInfo !== undefined &&
            (obj.timeoutInfo = message.timeoutInfo
                ? exports.TimeoutInfo.toJSON(message.timeoutInfo)
                : undefined);
        message.endHeight !== undefined &&
            (obj.endHeight = message.endHeight
                ? exports.EndHeight.toJSON(message.endHeight)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseWALMessage();
        message.eventDataRoundState =
            object.eventDataRoundState !== undefined &&
                object.eventDataRoundState !== null
                ? events_js_1.EventDataRoundState.fromPartial(object.eventDataRoundState)
                : undefined;
        message.msgInfo =
            object.msgInfo !== undefined && object.msgInfo !== null
                ? exports.MsgInfo.fromPartial(object.msgInfo)
                : undefined;
        message.timeoutInfo =
            object.timeoutInfo !== undefined && object.timeoutInfo !== null
                ? exports.TimeoutInfo.fromPartial(object.timeoutInfo)
                : undefined;
        message.endHeight =
            object.endHeight !== undefined && object.endHeight !== null
                ? exports.EndHeight.fromPartial(object.endHeight)
                : undefined;
        return message;
    },
};
function createBaseTimedWALMessage() {
    return { time: undefined, msg: undefined };
}
exports.TimedWALMessage = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.time !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.msg !== undefined) {
            exports.WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTimedWALMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.msg = exports.WALMessage.decode(reader, reader.uint32());
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            msg: isSet(object.msg) ? exports.WALMessage.fromJSON(object.msg) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.msg !== undefined &&
            (obj.msg = message.msg ? exports.WALMessage.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTimedWALMessage();
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? exports.WALMessage.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
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
//# sourceMappingURL=wal.js.map