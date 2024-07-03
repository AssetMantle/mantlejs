//@ts-nocheck
import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface MaintainerID {
  hashID?: HashID;
}
export interface MaintainerIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.MaintainerID";
  value: Uint8Array;
}
export interface MaintainerIDAmino {
  hash_i_d?: HashIDAmino;
}
export interface MaintainerIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.MaintainerID";
  value: MaintainerIDAmino;
}
export interface MaintainerIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseMaintainerID(): MaintainerID {
  return {
    hashID: undefined
  };
}
export const MaintainerID = {
  typeUrl: "/AssetMantle.schema.ids.base.MaintainerID",
  encode(message: MaintainerID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MaintainerID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaintainerID();
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
  fromPartial(object: Partial<MaintainerID>): MaintainerID {
    const message = createBaseMaintainerID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  },
  fromAmino(object: MaintainerIDAmino): MaintainerID {
    const message = createBaseMaintainerID();
    if (object.hash_i_d !== undefined && object.hash_i_d !== null) {
      message.hashID = HashID.fromAmino(object.hash_i_d);
    }
    return message;
  },
  toAmino(message: MaintainerID): MaintainerIDAmino {
    const obj: any = {};
    obj.hash_i_d = message.hashID ? HashID.toAmino(message.hashID) : undefined;
    return obj;
  },
  fromAminoMsg(object: MaintainerIDAminoMsg): MaintainerID {
    return MaintainerID.fromAmino(object.value);
  },
  fromProtoMsg(message: MaintainerIDProtoMsg): MaintainerID {
    return MaintainerID.decode(message.value);
  },
  toProto(message: MaintainerID): Uint8Array {
    return MaintainerID.encode(message).finish();
  },
  toProtoMsg(message: MaintainerID): MaintainerIDProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.ids.base.MaintainerID",
      value: MaintainerID.encode(message).finish()
    };
  }
};