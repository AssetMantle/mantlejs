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
exports.Message = exports.VoteSetBits = exports.VoteSetMaj23 = exports.HasVote = exports.Vote = exports.BlockPart = exports.ProposalPOL = exports.Proposal = exports.NewValidBlock = exports.NewRoundStep = exports.protobufPackage = void 0;
/* eslint-disable */
var types_js_1 = require("../types/types.js");
var types_js_2 = require("../libs/bits/types.js");
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.consensus";
function createBaseNewRoundStep() {
    return {
        height: long_1.default.ZERO,
        round: 0,
        step: 0,
        secondsSinceStartTime: long_1.default.ZERO,
        lastCommitRound: 0,
    };
}
exports.NewRoundStep = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.step !== 0) {
            writer.uint32(24).uint32(message.step);
        }
        if (!message.secondsSinceStartTime.isZero()) {
            writer.uint32(32).int64(message.secondsSinceStartTime);
        }
        if (message.lastCommitRound !== 0) {
            writer.uint32(40).int32(message.lastCommitRound);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNewRoundStep();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.step = reader.uint32();
                    break;
                case 4:
                    message.secondsSinceStartTime = reader.int64();
                    break;
                case 5:
                    message.lastCommitRound = reader.int32();
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
            round: isSet(object.round) ? Number(object.round) : 0,
            step: isSet(object.step) ? Number(object.step) : 0,
            secondsSinceStartTime: isSet(object.secondsSinceStartTime)
                ? long_1.default.fromValue(object.secondsSinceStartTime)
                : long_1.default.ZERO,
            lastCommitRound: isSet(object.lastCommitRound)
                ? Number(object.lastCommitRound)
                : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.step !== undefined && (obj.step = Math.round(message.step));
        message.secondsSinceStartTime !== undefined &&
            (obj.secondsSinceStartTime = (message.secondsSinceStartTime || long_1.default.ZERO).toString());
        message.lastCommitRound !== undefined &&
            (obj.lastCommitRound = Math.round(message.lastCommitRound));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseNewRoundStep();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.step = (_b = object.step) !== null && _b !== void 0 ? _b : 0;
        message.secondsSinceStartTime =
            object.secondsSinceStartTime !== undefined &&
                object.secondsSinceStartTime !== null
                ? long_1.default.fromValue(object.secondsSinceStartTime)
                : long_1.default.ZERO;
        message.lastCommitRound = (_c = object.lastCommitRound) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseNewValidBlock() {
    return {
        height: long_1.default.ZERO,
        round: 0,
        blockPartSetHeader: undefined,
        blockParts: undefined,
        isCommit: false,
    };
}
exports.NewValidBlock = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockPartSetHeader !== undefined) {
            types_js_1.PartSetHeader.encode(message.blockPartSetHeader, writer.uint32(26).fork()).ldelim();
        }
        if (message.blockParts !== undefined) {
            types_js_2.BitArray.encode(message.blockParts, writer.uint32(34).fork()).ldelim();
        }
        if (message.isCommit === true) {
            writer.uint32(40).bool(message.isCommit);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNewValidBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.blockPartSetHeader = types_js_1.PartSetHeader.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.blockParts = types_js_2.BitArray.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.isCommit = reader.bool();
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
            round: isSet(object.round) ? Number(object.round) : 0,
            blockPartSetHeader: isSet(object.blockPartSetHeader)
                ? types_js_1.PartSetHeader.fromJSON(object.blockPartSetHeader)
                : undefined,
            blockParts: isSet(object.blockParts)
                ? types_js_2.BitArray.fromJSON(object.blockParts)
                : undefined,
            isCommit: isSet(object.isCommit) ? Boolean(object.isCommit) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.blockPartSetHeader !== undefined &&
            (obj.blockPartSetHeader = message.blockPartSetHeader
                ? types_js_1.PartSetHeader.toJSON(message.blockPartSetHeader)
                : undefined);
        message.blockParts !== undefined &&
            (obj.blockParts = message.blockParts
                ? types_js_2.BitArray.toJSON(message.blockParts)
                : undefined);
        message.isCommit !== undefined && (obj.isCommit = message.isCommit);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseNewValidBlock();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.blockPartSetHeader =
            object.blockPartSetHeader !== undefined &&
                object.blockPartSetHeader !== null
                ? types_js_1.PartSetHeader.fromPartial(object.blockPartSetHeader)
                : undefined;
        message.blockParts =
            object.blockParts !== undefined && object.blockParts !== null
                ? types_js_2.BitArray.fromPartial(object.blockParts)
                : undefined;
        message.isCommit = (_b = object.isCommit) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseProposal() {
    return { proposal: undefined };
}
exports.Proposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.proposal !== undefined) {
            types_js_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = types_js_1.Proposal.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal)
                ? types_js_1.Proposal.fromJSON(object.proposal)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? types_js_1.Proposal.toJSON(message.proposal)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseProposal();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? types_js_1.Proposal.fromPartial(object.proposal)
                : undefined;
        return message;
    },
};
function createBaseProposalPOL() {
    return { height: long_1.default.ZERO, proposalPolRound: 0, proposalPol: undefined };
}
exports.ProposalPOL = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.proposalPolRound !== 0) {
            writer.uint32(16).int32(message.proposalPolRound);
        }
        if (message.proposalPol !== undefined) {
            types_js_2.BitArray.encode(message.proposalPol, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposalPOL();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.proposalPolRound = reader.int32();
                    break;
                case 3:
                    message.proposalPol = types_js_2.BitArray.decode(reader, reader.uint32());
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
            proposalPolRound: isSet(object.proposalPolRound)
                ? Number(object.proposalPolRound)
                : 0,
            proposalPol: isSet(object.proposalPol)
                ? types_js_2.BitArray.fromJSON(object.proposalPol)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.proposalPolRound !== undefined &&
            (obj.proposalPolRound = Math.round(message.proposalPolRound));
        message.proposalPol !== undefined &&
            (obj.proposalPol = message.proposalPol
                ? types_js_2.BitArray.toJSON(message.proposalPol)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseProposalPOL();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.proposalPolRound = (_a = object.proposalPolRound) !== null && _a !== void 0 ? _a : 0;
        message.proposalPol =
            object.proposalPol !== undefined && object.proposalPol !== null
                ? types_js_2.BitArray.fromPartial(object.proposalPol)
                : undefined;
        return message;
    },
};
function createBaseBlockPart() {
    return { height: long_1.default.ZERO, round: 0, part: undefined };
}
exports.BlockPart = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.part !== undefined) {
            types_js_1.Part.encode(message.part, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockPart();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.part = types_js_1.Part.decode(reader, reader.uint32());
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
            round: isSet(object.round) ? Number(object.round) : 0,
            part: isSet(object.part) ? types_js_1.Part.fromJSON(object.part) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.part !== undefined &&
            (obj.part = message.part ? types_js_1.Part.toJSON(message.part) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseBlockPart();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.part =
            object.part !== undefined && object.part !== null
                ? types_js_1.Part.fromPartial(object.part)
                : undefined;
        return message;
    },
};
function createBaseVote() {
    return { vote: undefined };
}
exports.Vote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vote !== undefined) {
            types_js_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = types_js_1.Vote.decode(reader, reader.uint32());
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
            vote: isSet(object.vote) ? types_js_1.Vote.fromJSON(object.vote) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vote !== undefined &&
            (obj.vote = message.vote ? types_js_1.Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseVote();
        message.vote =
            object.vote !== undefined && object.vote !== null
                ? types_js_1.Vote.fromPartial(object.vote)
                : undefined;
        return message;
    },
};
function createBaseHasVote() {
    return { height: long_1.default.ZERO, round: 0, type: 0, index: 0 };
}
exports.HasVote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.index !== 0) {
            writer.uint32(32).int32(message.index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHasVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.index = reader.int32();
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
            round: isSet(object.round) ? Number(object.round) : 0,
            type: isSet(object.type) ? types_js_1.signedMsgTypeFromJSON(object.type) : 0,
            index: isSet(object.index) ? Number(object.index) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined &&
            (obj.type = types_js_1.signedMsgTypeToJSON(message.type));
        message.index !== undefined && (obj.index = Math.round(message.index));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseHasVote();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.index = (_c = object.index) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseVoteSetMaj23() {
    return { height: long_1.default.ZERO, round: 0, type: 0, blockId: undefined };
}
exports.VoteSetMaj23 = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.blockId !== undefined) {
            types_js_1.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVoteSetMaj23();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.blockId = types_js_1.BlockID.decode(reader, reader.uint32());
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
            round: isSet(object.round) ? Number(object.round) : 0,
            type: isSet(object.type) ? types_js_1.signedMsgTypeFromJSON(object.type) : 0,
            blockId: isSet(object.blockId)
                ? types_js_1.BlockID.fromJSON(object.blockId)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined &&
            (obj.type = types_js_1.signedMsgTypeToJSON(message.type));
        message.blockId !== undefined &&
            (obj.blockId = message.blockId
                ? types_js_1.BlockID.toJSON(message.blockId)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseVoteSetMaj23();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? types_js_1.BlockID.fromPartial(object.blockId)
                : undefined;
        return message;
    },
};
function createBaseVoteSetBits() {
    return {
        height: long_1.default.ZERO,
        round: 0,
        type: 0,
        blockId: undefined,
        votes: undefined,
    };
}
exports.VoteSetBits = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.blockId !== undefined) {
            types_js_1.BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.votes !== undefined) {
            types_js_2.BitArray.encode(message.votes, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVoteSetBits();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.blockId = types_js_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.votes = types_js_2.BitArray.decode(reader, reader.uint32());
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
            round: isSet(object.round) ? Number(object.round) : 0,
            type: isSet(object.type) ? types_js_1.signedMsgTypeFromJSON(object.type) : 0,
            blockId: isSet(object.blockId)
                ? types_js_1.BlockID.fromJSON(object.blockId)
                : undefined,
            votes: isSet(object.votes) ? types_js_2.BitArray.fromJSON(object.votes) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.height !== undefined &&
            (obj.height = (message.height || long_1.default.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined &&
            (obj.type = types_js_1.signedMsgTypeToJSON(message.type));
        message.blockId !== undefined &&
            (obj.blockId = message.blockId
                ? types_js_1.BlockID.toJSON(message.blockId)
                : undefined);
        message.votes !== undefined &&
            (obj.votes = message.votes ? types_js_2.BitArray.toJSON(message.votes) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseVoteSetBits();
        message.height =
            object.height !== undefined && object.height !== null
                ? long_1.default.fromValue(object.height)
                : long_1.default.ZERO;
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.blockId =
            object.blockId !== undefined && object.blockId !== null
                ? types_js_1.BlockID.fromPartial(object.blockId)
                : undefined;
        message.votes =
            object.votes !== undefined && object.votes !== null
                ? types_js_2.BitArray.fromPartial(object.votes)
                : undefined;
        return message;
    },
};
function createBaseMessage() {
    return {
        newRoundStep: undefined,
        newValidBlock: undefined,
        proposal: undefined,
        proposalPol: undefined,
        blockPart: undefined,
        vote: undefined,
        hasVote: undefined,
        voteSetMaj23: undefined,
        voteSetBits: undefined,
    };
}
exports.Message = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.newRoundStep !== undefined) {
            exports.NewRoundStep.encode(message.newRoundStep, writer.uint32(10).fork()).ldelim();
        }
        if (message.newValidBlock !== undefined) {
            exports.NewValidBlock.encode(message.newValidBlock, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposal !== undefined) {
            exports.Proposal.encode(message.proposal, writer.uint32(26).fork()).ldelim();
        }
        if (message.proposalPol !== undefined) {
            exports.ProposalPOL.encode(message.proposalPol, writer.uint32(34).fork()).ldelim();
        }
        if (message.blockPart !== undefined) {
            exports.BlockPart.encode(message.blockPart, writer.uint32(42).fork()).ldelim();
        }
        if (message.vote !== undefined) {
            exports.Vote.encode(message.vote, writer.uint32(50).fork()).ldelim();
        }
        if (message.hasVote !== undefined) {
            exports.HasVote.encode(message.hasVote, writer.uint32(58).fork()).ldelim();
        }
        if (message.voteSetMaj23 !== undefined) {
            exports.VoteSetMaj23.encode(message.voteSetMaj23, writer.uint32(66).fork()).ldelim();
        }
        if (message.voteSetBits !== undefined) {
            exports.VoteSetBits.encode(message.voteSetBits, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newRoundStep = exports.NewRoundStep.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.newValidBlock = exports.NewValidBlock.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.proposal = exports.Proposal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proposalPol = exports.ProposalPOL.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.blockPart = exports.BlockPart.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.vote = exports.Vote.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.hasVote = exports.HasVote.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.voteSetMaj23 = exports.VoteSetMaj23.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.voteSetBits = exports.VoteSetBits.decode(reader, reader.uint32());
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
            newRoundStep: isSet(object.newRoundStep)
                ? exports.NewRoundStep.fromJSON(object.newRoundStep)
                : undefined,
            newValidBlock: isSet(object.newValidBlock)
                ? exports.NewValidBlock.fromJSON(object.newValidBlock)
                : undefined,
            proposal: isSet(object.proposal)
                ? exports.Proposal.fromJSON(object.proposal)
                : undefined,
            proposalPol: isSet(object.proposalPol)
                ? exports.ProposalPOL.fromJSON(object.proposalPol)
                : undefined,
            blockPart: isSet(object.blockPart)
                ? exports.BlockPart.fromJSON(object.blockPart)
                : undefined,
            vote: isSet(object.vote) ? exports.Vote.fromJSON(object.vote) : undefined,
            hasVote: isSet(object.hasVote)
                ? exports.HasVote.fromJSON(object.hasVote)
                : undefined,
            voteSetMaj23: isSet(object.voteSetMaj23)
                ? exports.VoteSetMaj23.fromJSON(object.voteSetMaj23)
                : undefined,
            voteSetBits: isSet(object.voteSetBits)
                ? exports.VoteSetBits.fromJSON(object.voteSetBits)
                : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.newRoundStep !== undefined &&
            (obj.newRoundStep = message.newRoundStep
                ? exports.NewRoundStep.toJSON(message.newRoundStep)
                : undefined);
        message.newValidBlock !== undefined &&
            (obj.newValidBlock = message.newValidBlock
                ? exports.NewValidBlock.toJSON(message.newValidBlock)
                : undefined);
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? exports.Proposal.toJSON(message.proposal)
                : undefined);
        message.proposalPol !== undefined &&
            (obj.proposalPol = message.proposalPol
                ? exports.ProposalPOL.toJSON(message.proposalPol)
                : undefined);
        message.blockPart !== undefined &&
            (obj.blockPart = message.blockPart
                ? exports.BlockPart.toJSON(message.blockPart)
                : undefined);
        message.vote !== undefined &&
            (obj.vote = message.vote ? exports.Vote.toJSON(message.vote) : undefined);
        message.hasVote !== undefined &&
            (obj.hasVote = message.hasVote
                ? exports.HasVote.toJSON(message.hasVote)
                : undefined);
        message.voteSetMaj23 !== undefined &&
            (obj.voteSetMaj23 = message.voteSetMaj23
                ? exports.VoteSetMaj23.toJSON(message.voteSetMaj23)
                : undefined);
        message.voteSetBits !== undefined &&
            (obj.voteSetBits = message.voteSetBits
                ? exports.VoteSetBits.toJSON(message.voteSetBits)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseMessage();
        message.newRoundStep =
            object.newRoundStep !== undefined && object.newRoundStep !== null
                ? exports.NewRoundStep.fromPartial(object.newRoundStep)
                : undefined;
        message.newValidBlock =
            object.newValidBlock !== undefined && object.newValidBlock !== null
                ? exports.NewValidBlock.fromPartial(object.newValidBlock)
                : undefined;
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? exports.Proposal.fromPartial(object.proposal)
                : undefined;
        message.proposalPol =
            object.proposalPol !== undefined && object.proposalPol !== null
                ? exports.ProposalPOL.fromPartial(object.proposalPol)
                : undefined;
        message.blockPart =
            object.blockPart !== undefined && object.blockPart !== null
                ? exports.BlockPart.fromPartial(object.blockPart)
                : undefined;
        message.vote =
            object.vote !== undefined && object.vote !== null
                ? exports.Vote.fromPartial(object.vote)
                : undefined;
        message.hasVote =
            object.hasVote !== undefined && object.hasVote !== null
                ? exports.HasVote.fromPartial(object.hasVote)
                : undefined;
        message.voteSetMaj23 =
            object.voteSetMaj23 !== undefined && object.voteSetMaj23 !== null
                ? exports.VoteSetMaj23.fromPartial(object.voteSetMaj23)
                : undefined;
        message.voteSetBits =
            object.voteSetBits !== undefined && object.voteSetBits !== null
                ? exports.VoteSetBits.fromPartial(object.voteSetBits)
                : undefined;
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
//# sourceMappingURL=types.js.map