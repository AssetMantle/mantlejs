import { Height, HeightAmino, HeightSDKType } from "../../types/base/height";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface HeightData {
  value?: Height;
}
export interface HeightDataProtoMsg {
  typeUrl: "/assetmantle.schema.data.base.HeightData";
  value: Uint8Array;
}
export interface HeightDataAmino {
  value?: HeightAmino;
}
export interface HeightDataAminoMsg {
  type: "/assetmantle.schema.data.base.HeightData";
  value: HeightDataAmino;
}
export interface HeightDataSDKType {
  value?: HeightSDKType;
}
function createBaseHeightData(): HeightData {
  return {
    value: undefined
  };
}
export const HeightData = {
  encode(message: HeightData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Height.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HeightData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeightData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HeightData {
    return {
      value: isSet(object.value) ? Height.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: HeightData): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Height.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: Partial<HeightData>): HeightData {
    const message = createBaseHeightData();
    message.value = object.value !== undefined && object.value !== null ? Height.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: HeightDataAmino): HeightData {
    return {
      value: object?.value ? Height.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: HeightData): HeightDataAmino {
    const obj: any = {};
    obj.value = message.value ? Height.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: HeightDataAminoMsg): HeightData {
    return HeightData.fromAmino(object.value);
  },
  fromProtoMsg(message: HeightDataProtoMsg): HeightData {
    return HeightData.decode(message.value);
  },
  toProto(message: HeightData): Uint8Array {
    return HeightData.encode(message).finish();
  },
  toProtoMsg(message: HeightData): HeightDataProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.data.base.HeightData",
      value: HeightData.encode(message).finish()
    };
  }
};