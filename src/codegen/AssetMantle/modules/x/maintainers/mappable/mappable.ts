//@ts-nocheck
import { Document, DocumentAmino, DocumentSDKType } from "../../../../schema/documents/base/document";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Mappable {
  maintainer?: Document;
}
export interface MappableProtoMsg {
  typeUrl: "/AssetMantle.modules.maintainers.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  maintainer?: DocumentAmino;
}
export interface MappableAminoMsg {
  type: "/AssetMantle.modules.maintainers.mappable.Mappable";
  value: MappableAmino;
}
export interface MappableSDKType {
  maintainer?: DocumentSDKType;
}
function createBaseMappable(): Mappable {
  return {
    maintainer: undefined
  };
}
export const Mappable = {
  typeUrl: "/AssetMantle.modules.maintainers.mappable.Mappable",
  encode(message: Mappable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maintainer !== undefined) {
      Document.encode(message.maintainer, writer.uint32(10).fork()).ldelim();
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
          message.maintainer = Document.decode(reader, reader.uint32());
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
    message.maintainer = object.maintainer !== undefined && object.maintainer !== null ? Document.fromPartial(object.maintainer) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    const message = createBaseMappable();
    if (object.maintainer !== undefined && object.maintainer !== null) {
      message.maintainer = Document.fromAmino(object.maintainer);
    }
    return message;
  },
  toAmino(message: Mappable): MappableAmino {
    const obj: any = {};
    obj.maintainer = message.maintainer ? Document.toAmino(message.maintainer) : undefined;
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
      typeUrl: "/AssetMantle.modules.maintainers.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};