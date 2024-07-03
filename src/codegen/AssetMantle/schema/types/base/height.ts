//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface Height {
  value: bigint;
}
export interface HeightProtoMsg {
  typeUrl: "/AssetMantle.schema.types.base.Height";
  value: Uint8Array;
}
export interface HeightAmino {
  value?: string;
}
export interface HeightAminoMsg {
  type: "/AssetMantle.schema.types.base.Height";
  value: HeightAmino;
}
export interface HeightSDKType {
  value: bigint;
}
function createBaseHeight(): Height {
  return {
    value: BigInt(0)
  };
}
export const Height = {
  typeUrl: "/AssetMantle.schema.types.base.Height",
  encode(message: Height, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== BigInt(0)) {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Height {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Height>): Height {
    const message = createBaseHeight();
    message.value = object.value !== undefined && object.value !== null ? BigInt(object.value.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: HeightAmino): Height {
    const message = createBaseHeight();
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value);
    }
    return message;
  },
  toAmino(message: Height): HeightAmino {
    const obj: any = {};
    obj.value = message.value !== BigInt(0) ? message.value.toString() : undefined;
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
      typeUrl: "/AssetMantle.schema.types.base.Height",
      value: Height.encode(message).finish()
    };
  }
};