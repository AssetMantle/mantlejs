//@ts-nocheck
import { AnyProperty, AnyPropertyAmino, AnyPropertySDKType } from "../../properties/base/any_property";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface PropertyList {
  anyProperties: AnyProperty[];
}
export interface PropertyListProtoMsg {
  typeUrl: "/AssetMantle.schema.lists.base.PropertyList";
  value: Uint8Array;
}
export interface PropertyListAmino {
  any_properties?: AnyPropertyAmino[];
}
export interface PropertyListAminoMsg {
  type: "/AssetMantle.schema.lists.base.PropertyList";
  value: PropertyListAmino;
}
export interface PropertyListSDKType {
  any_properties: AnyPropertySDKType[];
}
function createBasePropertyList(): PropertyList {
  return {
    anyProperties: []
  };
}
export const PropertyList = {
  typeUrl: "/AssetMantle.schema.lists.base.PropertyList",
  encode(message: PropertyList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.anyProperties) {
      AnyProperty.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PropertyList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropertyList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.anyProperties.push(AnyProperty.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<PropertyList>): PropertyList {
    const message = createBasePropertyList();
    message.anyProperties = object.anyProperties?.map(e => AnyProperty.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PropertyListAmino): PropertyList {
    const message = createBasePropertyList();
    message.anyProperties = object.any_properties?.map(e => AnyProperty.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PropertyList): PropertyListAmino {
    const obj: any = {};
    if (message.anyProperties) {
      obj.any_properties = message.anyProperties.map(e => e ? AnyProperty.toAmino(e) : undefined);
    } else {
      obj.any_properties = message.anyProperties;
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
      typeUrl: "/AssetMantle.schema.lists.base.PropertyList",
      value: PropertyList.encode(message).finish()
    };
  }
};