//@ts-nocheck
import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface IdentityID {
  hashID?: HashID;
}
export interface IdentityIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.IdentityID";
  value: Uint8Array;
}
export interface IdentityIDAmino {
  hash_i_d?: HashIDAmino;
}
export interface IdentityIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.IdentityID";
  value: IdentityIDAmino;
}
export interface IdentityIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseIdentityID(): IdentityID {
  return {
    hashID: undefined
  };
}
export const IdentityID = {
  typeUrl: "/AssetMantle.schema.ids.base.IdentityID",
  encode(message: IdentityID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentityID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityID();
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
  fromPartial(object: Partial<IdentityID>): IdentityID {
    const message = createBaseIdentityID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  },
  fromAmino(object: IdentityIDAmino): IdentityID {
    const message = createBaseIdentityID();
    if (object.hash_i_d !== undefined && object.hash_i_d !== null) {
      message.hashID = HashID.fromAmino(object.hash_i_d);
    }
    return message;
  },
  toAmino(message: IdentityID): IdentityIDAmino {
    const obj: any = {};
    obj.hash_i_d = message.hashID ? HashID.toAmino(message.hashID) : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentityIDAminoMsg): IdentityID {
    return IdentityID.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentityIDProtoMsg): IdentityID {
    return IdentityID.decode(message.value);
  },
  toProto(message: IdentityID): Uint8Array {
    return IdentityID.encode(message).finish();
  },
  toProtoMsg(message: IdentityID): IdentityIDProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.ids.base.IdentityID",
      value: IdentityID.encode(message).finish()
    };
  }
};