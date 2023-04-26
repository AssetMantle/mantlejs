import { AnyData, AnyDataAmino, AnyDataSDKType } from "../../data/base/any_data";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Mappable {
  data?: AnyData;
}
export interface MappableProtoMsg {
  typeUrl: "/assetmantle.modules.metas.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  data?: AnyDataAmino;
}
export interface MappableAminoMsg {
  type: "/assetmantle.modules.metas.mappable.Mappable";
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
  encode(message: Mappable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      AnyData.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Mappable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): Mappable {
    return {
      data: isSet(object.data) ? AnyData.fromJSON(object.data) : undefined
    };
  },
  toJSON(message: Mappable): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data ? AnyData.toJSON(message.data) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Mappable>): Mappable {
    const message = createBaseMappable();
    message.data = object.data !== undefined && object.data !== null ? AnyData.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    return {
      data: object?.data ? AnyData.fromAmino(object.data) : undefined
    };
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
      typeUrl: "/assetmantle.modules.metas.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};