import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface NumberData {
  value: string;
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
  value: string;
}
function createBaseNumberData(): NumberData {
  return {
    value: ""
  };
}
export const NumberData = {
  encode(message: NumberData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
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
          message.value = reader.string();
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
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: NumberData): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<NumberData>): NumberData {
    const message = createBaseNumberData();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: NumberDataAmino): NumberData {
    return {
      value: object.value
    };
  },
  toAmino(message: NumberData): NumberDataAmino {
    const obj: any = {};
    obj.value = message.value;
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