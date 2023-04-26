import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../lists/base/property_list";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Mutables {
  propertyList?: PropertyList;
}
export interface MutablesProtoMsg {
  typeUrl: "/assetmantle.schema.qualified.base.Mutables";
  value: Uint8Array;
}
export interface MutablesAmino {
  property_list?: PropertyListAmino;
}
export interface MutablesAminoMsg {
  type: "/assetmantle.schema.qualified.base.Mutables";
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
  encode(message: Mutables, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.propertyList !== undefined) {
      PropertyList.encode(message.propertyList, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Mutables {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): Mutables {
    return {
      propertyList: isSet(object.propertyList) ? PropertyList.fromJSON(object.propertyList) : undefined
    };
  },
  toJSON(message: Mutables): unknown {
    const obj: any = {};
    message.propertyList !== undefined && (obj.propertyList = message.propertyList ? PropertyList.toJSON(message.propertyList) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Mutables>): Mutables {
    const message = createBaseMutables();
    message.propertyList = object.propertyList !== undefined && object.propertyList !== null ? PropertyList.fromPartial(object.propertyList) : undefined;
    return message;
  },
  fromAmino(object: MutablesAmino): Mutables {
    return {
      propertyList: object?.property_list ? PropertyList.fromAmino(object.property_list) : undefined
    };
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
      typeUrl: "/assetmantle.schema.qualified.base.Mutables",
      value: Mutables.encode(message).finish()
    };
  }
};