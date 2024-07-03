//@ts-nocheck
import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface ClassificationID {
  hashID?: HashID;
}
export interface ClassificationIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.ClassificationID";
  value: Uint8Array;
}
export interface ClassificationIDAmino {
  hash_i_d?: HashIDAmino;
}
export interface ClassificationIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.ClassificationID";
  value: ClassificationIDAmino;
}
export interface ClassificationIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseClassificationID(): ClassificationID {
  return {
    hashID: undefined
  };
}
export const ClassificationID = {
  typeUrl: "/AssetMantle.schema.ids.base.ClassificationID",
  encode(message: ClassificationID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClassificationID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassificationID();
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
  fromPartial(object: Partial<ClassificationID>): ClassificationID {
    const message = createBaseClassificationID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  },
  fromAmino(object: ClassificationIDAmino): ClassificationID {
    const message = createBaseClassificationID();
    if (object.hash_i_d !== undefined && object.hash_i_d !== null) {
      message.hashID = HashID.fromAmino(object.hash_i_d);
    }
    return message;
  },
  toAmino(message: ClassificationID): ClassificationIDAmino {
    const obj: any = {};
    obj.hash_i_d = message.hashID ? HashID.toAmino(message.hashID) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassificationIDAminoMsg): ClassificationID {
    return ClassificationID.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassificationIDProtoMsg): ClassificationID {
    return ClassificationID.decode(message.value);
  },
  toProto(message: ClassificationID): Uint8Array {
    return ClassificationID.encode(message).finish();
  },
  toProtoMsg(message: ClassificationID): ClassificationIDProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.ids.base.ClassificationID",
      value: ClassificationID.encode(message).finish()
    };
  }
};