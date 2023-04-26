import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface NumberData {
  value: Long;
}
export interface NumberDataProtoMsg {
  typeUrl: "/assetmantle.schema.data.base.NumberData";
  value: Uint8Array;
}
export interface NumberDataAmino {
  value: string;
}
export interface NumberDataAminoMsg {
  type: "/assetmantle.schema.data.base.NumberData";
  value: NumberDataAmino;
}
export interface NumberDataSDKType {
  value: Long;
}
function createBaseNumberData(): NumberData {
  return {
    value: Long.ZERO
  };
}
export const NumberData = {
  encode(message: NumberData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NumberData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumberData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NumberData {
    return {
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO
    };
  },
  toJSON(message: NumberData): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<NumberData>): NumberData {
    const message = createBaseNumberData();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  },
  fromAmino(object: NumberDataAmino): NumberData {
    return {
      value: Long.fromString(object.value)
    };
  },
  toAmino(message: NumberData): NumberDataAmino {
    const obj: any = {};
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NumberDataAminoMsg): NumberData {
    return NumberData.fromAmino(object.value);
  },
  fromProtoMsg(message: NumberDataProtoMsg): NumberData {
    return NumberData.decode(message.value);
  },
  toProto(message: NumberData): Uint8Array {
    return NumberData.encode(message).finish();
  },
  toProtoMsg(message: NumberData): NumberDataProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.data.base.NumberData",
      value: NumberData.encode(message).finish()
    };
  }
};