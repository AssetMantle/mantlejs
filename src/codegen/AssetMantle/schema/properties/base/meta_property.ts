//@ts-nocheck
import { PropertyID, PropertyIDAmino, PropertyIDSDKType } from "../../ids/base/property_id";
import { AnyData, AnyDataAmino, AnyDataSDKType } from "../../data/base/any_data";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface MetaProperty {
  iD?: PropertyID;
  data?: AnyData;
}
export interface MetaPropertyProtoMsg {
  typeUrl: "/AssetMantle.schema.properties.base.MetaProperty";
  value: Uint8Array;
}
export interface MetaPropertyAmino {
  i_d?: PropertyIDAmino;
  data?: AnyDataAmino;
}
export interface MetaPropertyAminoMsg {
  type: "/AssetMantle.schema.properties.base.MetaProperty";
  value: MetaPropertyAmino;
}
export interface MetaPropertySDKType {
  i_d?: PropertyIDSDKType;
  data?: AnyDataSDKType;
}
function createBaseMetaProperty(): MetaProperty {
  return {
    iD: undefined,
    data: undefined
  };
}
export const MetaProperty = {
  typeUrl: "/AssetMantle.schema.properties.base.MetaProperty",
  encode(message: MetaProperty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iD !== undefined) {
      PropertyID.encode(message.iD, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      AnyData.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MetaProperty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetaProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iD = PropertyID.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = AnyData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MetaProperty>): MetaProperty {
    const message = createBaseMetaProperty();
    message.iD = object.iD !== undefined && object.iD !== null ? PropertyID.fromPartial(object.iD) : undefined;
    message.data = object.data !== undefined && object.data !== null ? AnyData.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: MetaPropertyAmino): MetaProperty {
    const message = createBaseMetaProperty();
    if (object.i_d !== undefined && object.i_d !== null) {
      message.iD = PropertyID.fromAmino(object.i_d);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = AnyData.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message: MetaProperty): MetaPropertyAmino {
    const obj: any = {};
    obj.i_d = message.iD ? PropertyID.toAmino(message.iD) : undefined;
    obj.data = message.data ? AnyData.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: MetaPropertyAminoMsg): MetaProperty {
    return MetaProperty.fromAmino(object.value);
  },
  fromProtoMsg(message: MetaPropertyProtoMsg): MetaProperty {
    return MetaProperty.decode(message.value);
  },
  toProto(message: MetaProperty): Uint8Array {
    return MetaProperty.encode(message).finish();
  },
  toProtoMsg(message: MetaProperty): MetaPropertyProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.properties.base.MetaProperty",
      value: MetaProperty.encode(message).finish()
    };
  }
};