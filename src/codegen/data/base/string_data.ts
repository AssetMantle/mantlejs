import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface StringData {
  value: string;
}
export interface StringDataProtoMsg {
  typeUrl: "/assetmantle.schema.data.base.StringData";
  value: Uint8Array;
}
export interface StringDataAmino {
  value: string;
}
export interface StringDataAminoMsg {
  type: "/assetmantle.schema.data.base.StringData";
  value: StringDataAmino;
}
export interface StringDataSDKType {
  value: string;
}
function createBaseStringData(): StringData {
  return {
    value: ""
  };
}
export const StringData = {
  encode(message: StringData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StringData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringData();
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
  fromJSON(object: any): StringData {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: StringData): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<StringData>): StringData {
    const message = createBaseStringData();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: StringDataAmino): StringData {
    return {
      value: object.value
    };
  },
  toAmino(message: StringData): StringDataAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: StringDataAminoMsg): StringData {
    return StringData.fromAmino(object.value);
  },
  fromProtoMsg(message: StringDataProtoMsg): StringData {
    return StringData.decode(message.value);
  },
  toProto(message: StringData): Uint8Array {
    return StringData.encode(message).finish();
  },
  toProtoMsg(message: StringData): StringDataProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.data.base.StringData",
      value: StringData.encode(message).finish()
    };
  }
};