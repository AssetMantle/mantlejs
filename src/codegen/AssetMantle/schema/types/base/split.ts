//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface Split {
  value: string;
}
export interface SplitProtoMsg {
  typeUrl: "/AssetMantle.schema.types.base.Split";
  value: Uint8Array;
}
export interface SplitAmino {
  value?: string;
}
export interface SplitAminoMsg {
  type: "/AssetMantle.schema.types.base.Split";
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
  typeUrl: "/AssetMantle.schema.types.base.Split",
  encode(message: Split, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Split {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Split>): Split {
    const message = createBaseSplit();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: SplitAmino): Split {
    const message = createBaseSplit();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Split): SplitAmino {
    const obj: any = {};
    obj.value = message.value === "" ? undefined : message.value;
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
      typeUrl: "/AssetMantle.schema.types.base.Split",
      value: Split.encode(message).finish()
    };
  }
};