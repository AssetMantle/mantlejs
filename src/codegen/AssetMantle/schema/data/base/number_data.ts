//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface NumberData {
  value: string;
}
export interface NumberDataProtoMsg {
  typeUrl: "/AssetMantle.schema.data.base.NumberData";
  value: Uint8Array;
}
export interface NumberDataAmino {
  value?: string;
}
export interface NumberDataAminoMsg {
  type: "/AssetMantle.schema.data.base.NumberData";
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
  typeUrl: "/AssetMantle.schema.data.base.NumberData",
  encode(message: NumberData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NumberData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<NumberData>): NumberData {
    const message = createBaseNumberData();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: NumberDataAmino): NumberData {
    const message = createBaseNumberData();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: NumberData): NumberDataAmino {
    const obj: any = {};
    obj.value = message.value === "" ? undefined : message.value;
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
      typeUrl: "/AssetMantle.schema.data.base.NumberData",
      value: NumberData.encode(message).finish()
    };
  }
};