//@ts-nocheck
import { Split, SplitAmino, SplitSDKType } from "../../../../schema/types/base/split";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Mappable {
  split?: Split;
}
export interface MappableProtoMsg {
  typeUrl: "/AssetMantle.modules.splits.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  split?: SplitAmino;
}
export interface MappableAminoMsg {
  type: "/AssetMantle.modules.splits.mappable.Mappable";
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
  typeUrl: "/AssetMantle.modules.splits.mappable.Mappable",
  encode(message: Mappable, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.split !== undefined) {
      Split.encode(message.split, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Mappable {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Mappable>): Mappable {
    const message = createBaseMappable();
    message.split = object.split !== undefined && object.split !== null ? Split.fromPartial(object.split) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    const message = createBaseMappable();
    if (object.split !== undefined && object.split !== null) {
      message.split = Split.fromAmino(object.split);
    }
    return message;
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
      typeUrl: "/AssetMantle.modules.splits.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};