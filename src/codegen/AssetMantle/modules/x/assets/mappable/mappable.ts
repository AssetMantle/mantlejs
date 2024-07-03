//@ts-nocheck
import { Document, DocumentAmino, DocumentSDKType } from "../../../../schema/documents/base/document";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Mappable {
  asset?: Document;
}
export interface MappableProtoMsg {
  typeUrl: "/AssetMantle.modules.assets.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  asset?: DocumentAmino;
}
export interface MappableAminoMsg {
  type: "/AssetMantle.modules.assets.mappable.Mappable";
  value: MappableAmino;
}
export interface MappableSDKType {
  asset?: DocumentSDKType;
}
function createBaseMappable(): Mappable {
  return {
    asset: undefined
  };
}
export const Mappable = {
  typeUrl: "/AssetMantle.modules.assets.mappable.Mappable",
  encode(message: Mappable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.asset !== undefined) {
      Document.encode(message.asset, writer.uint32(10).fork()).ldelim();
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
          message.asset = Document.decode(reader, reader.uint32());
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
    message.asset = object.asset !== undefined && object.asset !== null ? Document.fromPartial(object.asset) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    const message = createBaseMappable();
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = Document.fromAmino(object.asset);
    }
    return message;
  },
  toAmino(message: Mappable): MappableAmino {
    const obj: any = {};
    obj.asset = message.asset ? Document.toAmino(message.asset) : undefined;
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
      typeUrl: "/AssetMantle.modules.assets.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};