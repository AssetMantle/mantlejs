//@ts-nocheck
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../lists/base/property_list";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface Immutables {
  propertyList?: PropertyList;
}
export interface ImmutablesProtoMsg {
  typeUrl: "/AssetMantle.schema.qualified.base.Immutables";
  value: Uint8Array;
}
export interface ImmutablesAmino {
  property_list?: PropertyListAmino;
}
export interface ImmutablesAminoMsg {
  type: "/AssetMantle.schema.qualified.base.Immutables";
  value: ImmutablesAmino;
}
export interface ImmutablesSDKType {
  property_list?: PropertyListSDKType;
}
function createBaseImmutables(): Immutables {
  return {
    propertyList: undefined
  };
}
export const Immutables = {
  typeUrl: "/AssetMantle.schema.qualified.base.Immutables",
  encode(message: Immutables, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.propertyList !== undefined) {
      PropertyList.encode(message.propertyList, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Immutables {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImmutables();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.propertyList = PropertyList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Immutables>): Immutables {
    const message = createBaseImmutables();
    message.propertyList = object.propertyList !== undefined && object.propertyList !== null ? PropertyList.fromPartial(object.propertyList) : undefined;
    return message;
  },
  fromAmino(object: ImmutablesAmino): Immutables {
    const message = createBaseImmutables();
    if (object.property_list !== undefined && object.property_list !== null) {
      message.propertyList = PropertyList.fromAmino(object.property_list);
    }
    return message;
  },
  toAmino(message: Immutables): ImmutablesAmino {
    const obj: any = {};
    obj.property_list = message.propertyList ? PropertyList.toAmino(message.propertyList) : undefined;
    return obj;
  },
  fromAminoMsg(object: ImmutablesAminoMsg): Immutables {
    return Immutables.fromAmino(object.value);
  },
  fromProtoMsg(message: ImmutablesProtoMsg): Immutables {
    return Immutables.decode(message.value);
  },
  toProto(message: Immutables): Uint8Array {
    return Immutables.encode(message).finish();
  },
  toProtoMsg(message: Immutables): ImmutablesProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.qualified.base.Immutables",
      value: Immutables.encode(message).finish()
    };
  }
};