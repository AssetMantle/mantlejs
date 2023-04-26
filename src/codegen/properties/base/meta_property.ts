import { PropertyID, PropertyIDAmino, PropertyIDSDKType } from "../../ids/base/property_id";
import { AnyData, AnyDataAmino, AnyDataSDKType } from "../../data/base/any_data";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface MetaProperty {
  iD?: PropertyID;
  data?: AnyData;
}
export interface MetaPropertyProtoMsg {
  typeUrl: "/assetmantle.schema.properties.base.MetaProperty";
  value: Uint8Array;
}
export interface MetaPropertyAmino {
  i_d?: PropertyIDAmino;
  data?: AnyDataAmino;
}
export interface MetaPropertyAminoMsg {
  type: "/assetmantle.schema.properties.base.MetaProperty";
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
  encode(message: MetaProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iD !== undefined) {
      PropertyID.encode(message.iD, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      AnyData.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MetaProperty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): MetaProperty {
    return {
      iD: isSet(object.iD) ? PropertyID.fromJSON(object.iD) : undefined,
      data: isSet(object.data) ? AnyData.fromJSON(object.data) : undefined
    };
  },
  toJSON(message: MetaProperty): unknown {
    const obj: any = {};
    message.iD !== undefined && (obj.iD = message.iD ? PropertyID.toJSON(message.iD) : undefined);
    message.data !== undefined && (obj.data = message.data ? AnyData.toJSON(message.data) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MetaProperty>): MetaProperty {
    const message = createBaseMetaProperty();
    message.iD = object.iD !== undefined && object.iD !== null ? PropertyID.fromPartial(object.iD) : undefined;
    message.data = object.data !== undefined && object.data !== null ? AnyData.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: MetaPropertyAmino): MetaProperty {
    return {
      iD: object?.i_d ? PropertyID.fromAmino(object.i_d) : undefined,
      data: object?.data ? AnyData.fromAmino(object.data) : undefined
    };
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
      typeUrl: "/assetmantle.schema.properties.base.MetaProperty",
      value: MetaProperty.encode(message).finish()
    };
  }
};