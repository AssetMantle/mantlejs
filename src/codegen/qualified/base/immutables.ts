import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../lists/base/property_list";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Immutables {
  propertyList?: PropertyList;
}
export interface ImmutablesProtoMsg {
  typeUrl: "/assetmantle.schema.qualified.base.Immutables";
  value: Uint8Array;
}
export interface ImmutablesAmino {
  property_list?: PropertyListAmino;
}
export interface ImmutablesAminoMsg {
  type: "/assetmantle.schema.qualified.base.Immutables";
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
  encode(message: Immutables, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.propertyList !== undefined) {
      PropertyList.encode(message.propertyList, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Immutables {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): Immutables {
    return {
      propertyList: isSet(object.propertyList) ? PropertyList.fromJSON(object.propertyList) : undefined
    };
  },
  toJSON(message: Immutables): unknown {
    const obj: any = {};
    message.propertyList !== undefined && (obj.propertyList = message.propertyList ? PropertyList.toJSON(message.propertyList) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Immutables>): Immutables {
    const message = createBaseImmutables();
    message.propertyList = object.propertyList !== undefined && object.propertyList !== null ? PropertyList.fromPartial(object.propertyList) : undefined;
    return message;
  },
  fromAmino(object: ImmutablesAmino): Immutables {
    return {
      propertyList: object?.property_list ? PropertyList.fromAmino(object.property_list) : undefined
    };
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
      typeUrl: "/assetmantle.schema.qualified.base.Immutables",
      value: Immutables.encode(message).finish()
    };
  }
};