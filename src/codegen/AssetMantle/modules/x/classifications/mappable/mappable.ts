//@ts-nocheck
import { Document, DocumentAmino, DocumentSDKType } from "../../../../schema/documents/base/document";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Mappable {
  classification?: Document;
}
export interface MappableProtoMsg {
  typeUrl: "/AssetMantle.modules.classifications.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  classification?: DocumentAmino;
}
export interface MappableAminoMsg {
  type: "/AssetMantle.modules.classifications.mappable.Mappable";
  value: MappableAmino;
}
export interface MappableSDKType {
  classification?: DocumentSDKType;
}
function createBaseMappable(): Mappable {
  return {
    classification: undefined
  };
}
export const Mappable = {
  typeUrl: "/AssetMantle.modules.classifications.mappable.Mappable",
  encode(message: Mappable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classification !== undefined) {
      Document.encode(message.classification, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Mappable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMappable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classification = Document.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Mappable>): Mappable {
    const message = createBaseMappable();
    message.classification = object.classification !== undefined && object.classification !== null ? Document.fromPartial(object.classification) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    const message = createBaseMappable();
    if (object.classification !== undefined && object.classification !== null) {
      message.classification = Document.fromAmino(object.classification);
    }
    return message;
  },
  toAmino(message: Mappable): MappableAmino {
    const obj: any = {};
    obj.classification = message.classification ? Document.toAmino(message.classification) : undefined;
    return obj;
  },
  fromAminoMsg(object: MappableAminoMsg): Mappable {
    return Mappable.fromAmino(object.value);
  },
  fromProtoMsg(message: MappableProtoMsg): Mappable {
    return Mappable.decode(message.value);
  },
  toProto(message: Mappable): Uint8Array {
    return Mappable.encode(message).finish();
  },
  toProtoMsg(message: Mappable): MappableProtoMsg {
    return {
      typeUrl: "/AssetMantle.modules.classifications.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};