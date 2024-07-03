//@ts-nocheck
import { Height, HeightAmino, HeightSDKType } from "../../types/base/height";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface HeightData {
  value?: Height;
}
export interface HeightDataProtoMsg {
  typeUrl: "/AssetMantle.schema.data.base.HeightData";
  value: Uint8Array;
}
export interface HeightDataAmino {
  value?: HeightAmino;
}
export interface HeightDataAminoMsg {
  type: "/AssetMantle.schema.data.base.HeightData";
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
  typeUrl: "/AssetMantle.schema.data.base.HeightData",
  encode(message: HeightData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      Height.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HeightData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<HeightData>): HeightData {
    const message = createBaseHeightData();
    message.value = object.value !== undefined && object.value !== null ? Height.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: HeightDataAmino): HeightData {
    const message = createBaseHeightData();
    if (object.value !== undefined && object.value !== null) {
      message.value = Height.fromAmino(object.value);
    }
    return message;
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
      typeUrl: "/AssetMantle.schema.data.base.HeightData",
      value: HeightData.encode(message).finish()
    };
  }
};