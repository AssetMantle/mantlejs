//@ts-nocheck
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../../../schema/ids/base/classification_id";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Key {
  classificationID?: ClassificationID;
}
export interface KeyProtoMsg {
  typeUrl: "/AssetMantle.modules.classifications.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  classification_i_d?: ClassificationIDAmino;
}
export interface KeyAminoMsg {
  type: "/AssetMantle.modules.classifications.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  classification_i_d?: ClassificationIDSDKType;
}
function createBaseKey(): Key {
  return {
    classificationID: undefined
  };
}
export const Key = {
  typeUrl: "/AssetMantle.modules.classifications.key.Key",
  encode(message: Key, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(10).fork()).ldelim();
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
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
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
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    const message = createBaseKey();
    if (object.classification_i_d !== undefined && object.classification_i_d !== null) {
      message.classificationID = ClassificationID.fromAmino(object.classification_i_d);
    }
    return message;
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.classification_i_d = message.classificationID ? ClassificationID.toAmino(message.classificationID) : undefined;
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
      typeUrl: "/AssetMantle.modules.classifications.key.Key",
      value: Key.encode(message).finish()
    };
  }
};