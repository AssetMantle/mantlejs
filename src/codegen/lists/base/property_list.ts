import { AnyProperty, AnyPropertyAmino, AnyPropertySDKType } from "../../properties/base/any_property";
import * as _m0 from "protobufjs/minimal";
export interface PropertyList {
  properties: AnyProperty[];
}
export interface PropertyListProtoMsg {
  typeUrl: "/assetmantle.schema.lists.base.PropertyList";
  value: Uint8Array;
}
export interface PropertyListAmino {
  properties: AnyPropertyAmino[];
}
export interface PropertyListAminoMsg {
  type: "/assetmantle.schema.lists.base.PropertyList";
  value: PropertyListAmino;
}
export interface PropertyListSDKType {
  properties: AnyPropertySDKType[];
}
function createBasePropertyList(): PropertyList {
  return {
    properties: []
  };
}
export const PropertyList = {
  encode(message: PropertyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.properties) {
      AnyProperty.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PropertyList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropertyList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.properties.push(AnyProperty.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PropertyList {
    return {
      properties: Array.isArray(object?.properties) ? object.properties.map((e: any) => AnyProperty.fromJSON(e)) : []
    };
  },
  toJSON(message: PropertyList): unknown {
    const obj: any = {};
    if (message.properties) {
      obj.properties = message.properties.map(e => e ? AnyProperty.toJSON(e) : undefined);
    } else {
      obj.properties = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PropertyList>): PropertyList {
    const message = createBasePropertyList();
    message.properties = object.properties?.map(e => AnyProperty.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PropertyListAmino): PropertyList {
    return {
      properties: Array.isArray(object?.properties) ? object.properties.map((e: any) => AnyProperty.fromAmino(e)) : []
    };
  },
  toAmino(message: PropertyList): PropertyListAmino {
    const obj: any = {};
    if (message.properties) {
      obj.properties = message.properties.map(e => e ? AnyProperty.toAmino(e) : undefined);
    } else {
      obj.properties = [];
    }
    return obj;
  },
  fromAminoMsg(object: PropertyListAminoMsg): PropertyList {
    return PropertyList.fromAmino(object.value);
  },
  fromProtoMsg(message: PropertyListProtoMsg): PropertyList {
    return PropertyList.decode(message.value);
  },
  toProto(message: PropertyList): Uint8Array {
    return PropertyList.encode(message).finish();
  },
  toProtoMsg(message: PropertyList): PropertyListProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.lists.base.PropertyList",
      value: PropertyList.encode(message).finish()
    };
  }
};