//@ts-nocheck
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../lists/base/property_list";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface Mutables {
  propertyList?: PropertyList;
}
export interface MutablesProtoMsg {
  typeUrl: "/AssetMantle.schema.qualified.base.Mutables";
  value: Uint8Array;
}
export interface MutablesAmino {
  property_list?: PropertyListAmino;
}
export interface MutablesAminoMsg {
  type: "/AssetMantle.schema.qualified.base.Mutables";
  value: MutablesAmino;
}
export interface MutablesSDKType {
  property_list?: PropertyListSDKType;
}
function createBaseMutables(): Mutables {
  return {
    propertyList: undefined
  };
}
export const Mutables = {
  typeUrl: "/AssetMantle.schema.qualified.base.Mutables",
  encode(message: Mutables, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.propertyList !== undefined) {
      PropertyList.encode(message.propertyList, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Mutables {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMutables();
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
  fromPartial(object: Partial<Mutables>): Mutables {
    const message = createBaseMutables();
    message.propertyList = object.propertyList !== undefined && object.propertyList !== null ? PropertyList.fromPartial(object.propertyList) : undefined;
    return message;
  },
  fromAmino(object: MutablesAmino): Mutables {
    const message = createBaseMutables();
    if (object.property_list !== undefined && object.property_list !== null) {
      message.propertyList = PropertyList.fromAmino(object.property_list);
    }
    return message;
  },
  toAmino(message: Mutables): MutablesAmino {
    const obj: any = {};
    obj.property_list = message.propertyList ? PropertyList.toAmino(message.propertyList) : undefined;
    return obj;
  },
  fromAminoMsg(object: MutablesAminoMsg): Mutables {
    return Mutables.fromAmino(object.value);
  },
  fromProtoMsg(message: MutablesProtoMsg): Mutables {
    return Mutables.decode(message.value);
  },
  toProto(message: Mutables): Uint8Array {
    return Mutables.encode(message).finish();
  },
  toProtoMsg(message: Mutables): MutablesProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.qualified.base.Mutables",
      value: Mutables.encode(message).finish()
    };
  }
};