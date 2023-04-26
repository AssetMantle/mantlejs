import { DataID, DataIDAmino, DataIDSDKType } from "../../ids/base/data_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Key {
  dataID?: DataID;
}
export interface KeyProtoMsg {
  typeUrl: "/assetmantle.modules.metas.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  data_i_d?: DataIDAmino;
}
export interface KeyAminoMsg {
  type: "/assetmantle.modules.metas.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  data_i_d?: DataIDSDKType;
}
function createBaseKey(): Key {
  return {
    dataID: undefined
  };
}
export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataID !== undefined) {
      DataID.encode(message.dataID, writer.uint32(10).fork()).ldelim();
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
          message.dataID = DataID.decode(reader, reader.uint32());
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
      dataID: isSet(object.dataID) ? DataID.fromJSON(object.dataID) : undefined
    };
  },
  toJSON(message: Key): unknown {
    const obj: any = {};
    message.dataID !== undefined && (obj.dataID = message.dataID ? DataID.toJSON(message.dataID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.dataID = object.dataID !== undefined && object.dataID !== null ? DataID.fromPartial(object.dataID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    return {
      dataID: object?.data_i_d ? DataID.fromAmino(object.data_i_d) : undefined
    };
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.data_i_d = message.dataID ? DataID.toAmino(message.dataID) : undefined;
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
      typeUrl: "/assetmantle.modules.metas.key.Key",
      value: Key.encode(message).finish()
    };
  }
};