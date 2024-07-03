//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface DecData {
  value: string;
}
export interface DecDataProtoMsg {
  typeUrl: "/AssetMantle.schema.data.base.DecData";
  value: Uint8Array;
}
export interface DecDataAmino {
  value?: string;
}
export interface DecDataAminoMsg {
  type: "/AssetMantle.schema.data.base.DecData";
  value: DecDataAmino;
}
export interface DecDataSDKType {
  value: string;
}
function createBaseDecData(): DecData {
  return {
    value: ""
  };
}
export const DecData = {
  typeUrl: "/AssetMantle.schema.data.base.DecData",
  encode(message: DecData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DecData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecData();
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
  fromPartial(object: Partial<DecData>): DecData {
    const message = createBaseDecData();
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: DecDataAmino): DecData {
    const message = createBaseDecData();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: DecData): DecDataAmino {
    const obj: any = {};
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: DecDataAminoMsg): DecData {
    return DecData.fromAmino(object.value);
  },
  fromProtoMsg(message: DecDataProtoMsg): DecData {
    return DecData.decode(message.value);
  },
  toProto(message: DecData): Uint8Array {
    return DecData.encode(message).finish();
  },
  toProtoMsg(message: DecData): DecDataProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.data.base.DecData",
      value: DecData.encode(message).finish()
    };
  }
};