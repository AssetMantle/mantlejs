//@ts-nocheck
import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface AssetID {
  hashID?: HashID;
}
export interface AssetIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.AssetID";
  value: Uint8Array;
}
export interface AssetIDAmino {
  hash_i_d?: HashIDAmino;
}
export interface AssetIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.AssetID";
  value: AssetIDAmino;
}
export interface AssetIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseAssetID(): AssetID {
  return {
    hashID: undefined
  };
}
export const AssetID = {
  typeUrl: "/AssetMantle.schema.ids.base.AssetID",
  encode(message: AssetID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashID = HashID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AssetID>): AssetID {
    const message = createBaseAssetID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  },
  fromAmino(object: AssetIDAmino): AssetID {
    const message = createBaseAssetID();
    if (object.hash_i_d !== undefined && object.hash_i_d !== null) {
      message.hashID = HashID.fromAmino(object.hash_i_d);
    }
    return message;
  },
  toAmino(message: AssetID): AssetIDAmino {
    const obj: any = {};
    obj.hash_i_d = message.hashID ? HashID.toAmino(message.hashID) : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetIDAminoMsg): AssetID {
    return AssetID.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetIDProtoMsg): AssetID {
    return AssetID.decode(message.value);
  },
  toProto(message: AssetID): Uint8Array {
    return AssetID.encode(message).finish();
  },
  toProtoMsg(message: AssetID): AssetIDProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.ids.base.AssetID",
      value: AssetID.encode(message).finish()
    };
  }
};