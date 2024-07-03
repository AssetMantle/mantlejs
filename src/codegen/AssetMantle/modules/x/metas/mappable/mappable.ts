//@ts-nocheck
import { AnyData, AnyDataAmino, AnyDataSDKType } from "../../../../schema/data/base/any_data";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Mappable {
  data?: AnyData;
}
export interface MappableProtoMsg {
  typeUrl: "/AssetMantle.modules.metas.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  data?: AnyDataAmino;
}
export interface MappableAminoMsg {
  type: "/AssetMantle.modules.metas.mappable.Mappable";
  value: MappableAmino;
}
export interface MappableSDKType {
  data?: AnyDataSDKType;
}
function createBaseMappable(): Mappable {
  return {
    data: undefined
  };
}
export const Mappable = {
  typeUrl: "/AssetMantle.modules.metas.mappable.Mappable",
  encode(message: Mappable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data !== undefined) {
      AnyData.encode(message.data, writer.uint32(10).fork()).ldelim();
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
          message.data = AnyData.decode(reader, reader.uint32());
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
    message.data = object.data !== undefined && object.data !== null ? AnyData.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    const message = createBaseMappable();
    if (object.data !== undefined && object.data !== null) {
      message.data = AnyData.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message: Mappable): MappableAmino {
    const obj: any = {};
    obj.data = message.data ? AnyData.toAmino(message.data) : undefined;
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
      typeUrl: "/AssetMantle.modules.metas.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};