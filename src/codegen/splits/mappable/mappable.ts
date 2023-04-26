import { Split, SplitAmino, SplitSDKType } from "../../types/base/split";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Mappable {
  split?: Split;
}
export interface MappableProtoMsg {
  typeUrl: "/assetmantle.modules.splits.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  split?: SplitAmino;
}
export interface MappableAminoMsg {
  type: "/assetmantle.modules.splits.mappable.Mappable";
  value: MappableAmino;
}
export interface MappableSDKType {
  split?: SplitSDKType;
}
function createBaseMappable(): Mappable {
  return {
    split: undefined
  };
}
export const Mappable = {
  encode(message: Mappable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.split !== undefined) {
      Split.encode(message.split, writer.uint32(10).fork()).ldelim();
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
          message.split = Split.decode(reader, reader.uint32());
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
      split: isSet(object.split) ? Split.fromJSON(object.split) : undefined
    };
  },
  toJSON(message: Mappable): unknown {
    const obj: any = {};
    message.split !== undefined && (obj.split = message.split ? Split.toJSON(message.split) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Mappable>): Mappable {
    const message = createBaseMappable();
    message.split = object.split !== undefined && object.split !== null ? Split.fromPartial(object.split) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    return {
      split: object?.split ? Split.fromAmino(object.split) : undefined
    };
  },
  toAmino(message: Mappable): MappableAmino {
    const obj: any = {};
    obj.split = message.split ? Split.toAmino(message.split) : undefined;
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
      typeUrl: "/assetmantle.modules.splits.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};