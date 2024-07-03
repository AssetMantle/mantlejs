//@ts-nocheck
import { StringID, StringIDAmino, StringIDSDKType } from "./string_id";
import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface DataID {
  typeID?: StringID;
  hashID?: HashID;
}
export interface DataIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.DataID";
  value: Uint8Array;
}
export interface DataIDAmino {
  type_i_d?: StringIDAmino;
  hash_i_d?: HashIDAmino;
}
export interface DataIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.DataID";
  value: DataIDAmino;
}
export interface DataIDSDKType {
  type_i_d?: StringIDSDKType;
  hash_i_d?: HashIDSDKType;
}
function createBaseDataID(): DataID {
  return {
    typeID: undefined,
    hashID: undefined
  };
}
export const DataID = {
  typeUrl: "/AssetMantle.schema.ids.base.DataID",
  encode(message: DataID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.typeID !== undefined) {
      StringID.encode(message.typeID, writer.uint32(10).fork()).ldelim();
    }
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DataID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeID = StringID.decode(reader, reader.uint32());
          break;
        case 2:
          message.hashID = HashID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DataID>): DataID {
    const message = createBaseDataID();
    message.typeID = object.typeID !== undefined && object.typeID !== null ? StringID.fromPartial(object.typeID) : undefined;
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  },
  fromAmino(object: DataIDAmino): DataID {
    const message = createBaseDataID();
    if (object.type_i_d !== undefined && object.type_i_d !== null) {
      message.typeID = StringID.fromAmino(object.type_i_d);
    }
    if (object.hash_i_d !== undefined && object.hash_i_d !== null) {
      message.hashID = HashID.fromAmino(object.hash_i_d);
    }
    return message;
  },
  toAmino(message: DataID): DataIDAmino {
    const obj: any = {};
    obj.type_i_d = message.typeID ? StringID.toAmino(message.typeID) : undefined;
    obj.hash_i_d = message.hashID ? HashID.toAmino(message.hashID) : undefined;
    return obj;
  },
  fromAminoMsg(object: DataIDAminoMsg): DataID {
    return DataID.fromAmino(object.value);
  },
  fromProtoMsg(message: DataIDProtoMsg): DataID {
    return DataID.decode(message.value);
  },
  toProto(message: DataID): Uint8Array {
    return DataID.encode(message).finish();
  },
  toProtoMsg(message: DataID): DataIDProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.ids.base.DataID",
      value: DataID.encode(message).finish()
    };
  }
};