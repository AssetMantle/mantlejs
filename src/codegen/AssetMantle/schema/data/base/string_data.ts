//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface StringData {
  value: string;
}
export interface StringDataProtoMsg {
  typeUrl: "/AssetMantle.schema.data.base.StringData";
  value: Uint8Array;
}
export interface StringDataAmino {
  value?: string;
}
export interface StringDataAminoMsg {
  type: "/AssetMantle.schema.data.base.StringData";
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
  typeUrl: "/AssetMantle.schema.data.base.StringData",
  encode(message: StringData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StringData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<StringData>): StringData {
    const message = createBaseStringData();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: StringDataAmino): StringData {
    const message = createBaseStringData();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: StringData): StringDataAmino {
    const obj: any = {};
    obj.value = message.value === "" ? undefined : message.value;
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
      typeUrl: "/AssetMantle.schema.data.base.StringData",
      value: StringData.encode(message).finish()
    };
  }
};