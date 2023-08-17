import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Split {
  value: string;
}
export interface SplitProtoMsg {
  typeUrl: "/assetmantle.schema.types.base.Split";
  value: Uint8Array;
}
export interface SplitAmino {
  value: string;
}
export interface SplitAminoMsg {
  type: "/assetmantle.schema.types.base.Split";
  value: SplitAmino;
}
export interface SplitSDKType {
  value: string;
}
function createBaseSplit(): Split {
  return {
    value: ""
  };
}
export const Split = {
  encode(message: Split, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Split {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSplit();
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
  fromJSON(object: any): Split {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Split): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<Split>): Split {
    const message = createBaseSplit();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: SplitAmino): Split {
    return {
      value: object.value
    };
  },
  toAmino(message: Split): SplitAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: SplitAminoMsg): Split {
    return Split.fromAmino(object.value);
  },
  fromProtoMsg(message: SplitProtoMsg): Split {
    return Split.decode(message.value);
  },
  toProto(message: Split): Uint8Array {
    return Split.encode(message).finish();
  },
  toProtoMsg(message: Split): SplitProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.types.base.Split",
      value: Split.encode(message).finish()
    };
  }
};