import { MaintainerID, MaintainerIDAmino, MaintainerIDSDKType } from "../../ids/base/maintainer_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Key {
  maintainerID?: MaintainerID;
}
export interface KeyProtoMsg {
  typeUrl: "/assetmantle.modules.maintainers.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  maintainer_i_d?: MaintainerIDAmino;
}
export interface KeyAminoMsg {
  type: "/assetmantle.modules.maintainers.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  maintainer_i_d?: MaintainerIDSDKType;
}
function createBaseKey(): Key {
  return {
    maintainerID: undefined
  };
}
export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maintainerID !== undefined) {
      MaintainerID.encode(message.maintainerID, writer.uint32(10).fork()).ldelim();
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
          message.maintainerID = MaintainerID.decode(reader, reader.uint32());
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
      maintainerID: isSet(object.maintainerID) ? MaintainerID.fromJSON(object.maintainerID) : undefined
    };
  },
  toJSON(message: Key): unknown {
    const obj: any = {};
    message.maintainerID !== undefined && (obj.maintainerID = message.maintainerID ? MaintainerID.toJSON(message.maintainerID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.maintainerID = object.maintainerID !== undefined && object.maintainerID !== null ? MaintainerID.fromPartial(object.maintainerID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    return {
      maintainerID: object?.maintainer_i_d ? MaintainerID.fromAmino(object.maintainer_i_d) : undefined
    };
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.maintainer_i_d = message.maintainerID ? MaintainerID.toAmino(message.maintainerID) : undefined;
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
      typeUrl: "/assetmantle.modules.maintainers.key.Key",
      value: Key.encode(message).finish()
    };
  }
};