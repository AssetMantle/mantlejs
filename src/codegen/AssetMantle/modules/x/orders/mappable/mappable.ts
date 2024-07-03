//@ts-nocheck
import { Document, DocumentAmino, DocumentSDKType } from "../../../../schema/documents/base/document";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Mappable {
  order?: Document;
}
export interface MappableProtoMsg {
  typeUrl: "/AssetMantle.modules.orders.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  order?: DocumentAmino;
}
export interface MappableAminoMsg {
  type: "/AssetMantle.modules.orders.mappable.Mappable";
  value: MappableAmino;
}
export interface MappableSDKType {
  order?: DocumentSDKType;
}
function createBaseMappable(): Mappable {
  return {
    order: undefined
  };
}
export const Mappable = {
  typeUrl: "/AssetMantle.modules.orders.mappable.Mappable",
  encode(message: Mappable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Document.encode(message.order, writer.uint32(10).fork()).ldelim();
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
          message.order = Document.decode(reader, reader.uint32());
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
    message.order = object.order !== undefined && object.order !== null ? Document.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    const message = createBaseMappable();
    if (object.order !== undefined && object.order !== null) {
      message.order = Document.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: Mappable): MappableAmino {
    const obj: any = {};
    obj.order = message.order ? Document.toAmino(message.order) : undefined;
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
      typeUrl: "/AssetMantle.modules.orders.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};