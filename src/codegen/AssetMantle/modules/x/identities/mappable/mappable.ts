//@ts-nocheck
import { Document, DocumentAmino, DocumentSDKType } from "../../../../schema/documents/base/document";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Mappable {
  identity?: Document;
}
export interface MappableProtoMsg {
  typeUrl: "/AssetMantle.modules.identities.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  identity?: DocumentAmino;
}
export interface MappableAminoMsg {
  type: "/AssetMantle.modules.identities.mappable.Mappable";
  value: MappableAmino;
}
export interface MappableSDKType {
  identity?: DocumentSDKType;
}
function createBaseMappable(): Mappable {
  return {
    identity: undefined
  };
}
export const Mappable = {
  typeUrl: "/AssetMantle.modules.identities.mappable.Mappable",
  encode(message: Mappable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identity !== undefined) {
      Document.encode(message.identity, writer.uint32(10).fork()).ldelim();
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
          message.identity = Document.decode(reader, reader.uint32());
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
    message.identity = object.identity !== undefined && object.identity !== null ? Document.fromPartial(object.identity) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    const message = createBaseMappable();
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = Document.fromAmino(object.identity);
    }
    return message;
  },
  toAmino(message: Mappable): MappableAmino {
    const obj: any = {};
    obj.identity = message.identity ? Document.toAmino(message.identity) : undefined;
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
      typeUrl: "/AssetMantle.modules.identities.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};