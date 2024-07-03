//@ts-nocheck
import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../../../schema/ids/base/asset_id";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Key {
  assetID?: AssetID;
}
export interface KeyProtoMsg {
  typeUrl: "/AssetMantle.modules.assets.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  asset_i_d?: AssetIDAmino;
}
export interface KeyAminoMsg {
  type: "/AssetMantle.modules.assets.key.Key";
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
  typeUrl: "/AssetMantle.modules.assets.key.Key",
  encode(message: Key, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Key {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    const message = createBaseKey();
    if (object.asset_i_d !== undefined && object.asset_i_d !== null) {
      message.assetID = AssetID.fromAmino(object.asset_i_d);
    }
    return message;
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
      typeUrl: "/AssetMantle.modules.assets.key.Key",
      value: Key.encode(message).finish()
    };
  }
};