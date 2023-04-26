import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../ids/base/asset_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Key {
  assetID?: AssetID;
}
export interface KeyProtoMsg {
  typeUrl: "/assetmantle.modules.assets.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  asset_i_d?: AssetIDAmino;
}
export interface KeyAminoMsg {
  type: "/assetmantle.modules.assets.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  asset_i_d?: AssetIDSDKType;
}
function createBaseKey(): Key {
  return {
    assetID: undefined
  };
}
export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
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
          message.assetID = AssetID.decode(reader, reader.uint32());
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
      assetID: isSet(object.assetID) ? AssetID.fromJSON(object.assetID) : undefined
    };
  },
  toJSON(message: Key): unknown {
    const obj: any = {};
    message.assetID !== undefined && (obj.assetID = message.assetID ? AssetID.toJSON(message.assetID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    return {
      assetID: object?.asset_i_d ? AssetID.fromAmino(object.asset_i_d) : undefined
    };
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.asset_i_d = message.assetID ? AssetID.toAmino(message.assetID) : undefined;
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
      typeUrl: "/assetmantle.modules.assets.key.Key",
      value: Key.encode(message).finish()
    };
  }
};