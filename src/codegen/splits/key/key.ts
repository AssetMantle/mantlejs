import { SplitID, SplitIDAmino, SplitIDSDKType } from "../../ids/base/split_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Key {
  splitID?: SplitID;
}
export interface KeyProtoMsg {
  typeUrl: "/assetmantle.modules.splits.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  split_i_d?: SplitIDAmino;
}
export interface KeyAminoMsg {
  type: "/assetmantle.modules.splits.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  split_i_d?: SplitIDSDKType;
}
function createBaseKey(): Key {
  return {
    splitID: undefined
  };
}
export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.splitID !== undefined) {
      SplitID.encode(message.splitID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.splitID = SplitID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Key {
    return {
      splitID: isSet(object.splitID) ? SplitID.fromJSON(object.splitID) : undefined
    };
  },
  toJSON(message: Key): unknown {
    const obj: any = {};
    message.splitID !== undefined && (obj.splitID = message.splitID ? SplitID.toJSON(message.splitID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.splitID = object.splitID !== undefined && object.splitID !== null ? SplitID.fromPartial(object.splitID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    return {
      splitID: object?.split_i_d ? SplitID.fromAmino(object.split_i_d) : undefined
    };
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.split_i_d = message.splitID ? SplitID.toAmino(message.splitID) : undefined;
    return obj;
  },
  fromAminoMsg(object: KeyAminoMsg): Key {
    return Key.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyProtoMsg): Key {
    return Key.decode(message.value);
  },
  toProto(message: Key): Uint8Array {
    return Key.encode(message).finish();
  },
  toProtoMsg(message: Key): KeyProtoMsg {
    return {
      typeUrl: "/assetmantle.modules.splits.key.Key",
      value: Key.encode(message).finish()
    };
  }
};