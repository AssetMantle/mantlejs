import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Height {
  value: Long;
}
export interface HeightProtoMsg {
  typeUrl: "/assetmantle.schema.types.base.Height";
  value: Uint8Array;
}
export interface HeightAmino {
  value: string;
}
export interface HeightAminoMsg {
  type: "/assetmantle.schema.types.base.Height";
  value: HeightAmino;
}
export interface HeightSDKType {
  value: Long;
}
function createBaseHeight(): Height {
  return {
    value: Long.ZERO
  };
}
export const Height = {
  encode(message: Height, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Height {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeight();
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
  fromJSON(object: any): Height {
    return {
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO
    };
  },
  toJSON(message: Height): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<Height>): Height {
    const message = createBaseHeight();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  },
  fromAmino(object: HeightAmino): Height {
    return {
      value: Long.fromString(object.value)
    };
  },
  toAmino(message: Height): HeightAmino {
    const obj: any = {};
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: HeightAminoMsg): Height {
    return Height.fromAmino(object.value);
  },
  fromProtoMsg(message: HeightProtoMsg): Height {
    return Height.decode(message.value);
  },
  toProto(message: Height): Uint8Array {
    return Height.encode(message).finish();
  },
  toProtoMsg(message: Height): HeightProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.types.base.Height",
      value: Height.encode(message).finish()
    };
  }
};