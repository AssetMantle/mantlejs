//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface BooleanData {
  value: boolean;
}
export interface BooleanDataProtoMsg {
  typeUrl: "/AssetMantle.schema.data.base.BooleanData";
  value: Uint8Array;
}
export interface BooleanDataAmino {
  value?: boolean;
}
export interface BooleanDataAminoMsg {
  type: "/AssetMantle.schema.data.base.BooleanData";
  value: BooleanDataAmino;
}
export interface BooleanDataSDKType {
  value: boolean;
}
function createBaseBooleanData(): BooleanData {
  return {
    value: false
  };
}
export const BooleanData = {
  typeUrl: "/AssetMantle.schema.data.base.BooleanData",
  encode(message: BooleanData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BooleanData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBooleanData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BooleanData>): BooleanData {
    const message = createBaseBooleanData();
    message.value = object.value ?? false;
    return message;
  },
  fromAmino(object: BooleanDataAmino): BooleanData {
    const message = createBaseBooleanData();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: BooleanData): BooleanDataAmino {
    const obj: any = {};
    obj.value = message.value === false ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: BooleanDataAminoMsg): BooleanData {
    return BooleanData.fromAmino(object.value);
  },
  fromProtoMsg(message: BooleanDataProtoMsg): BooleanData {
    return BooleanData.decode(message.value);
  },
  toProto(message: BooleanData): Uint8Array {
    return BooleanData.encode(message).finish();
  },
  toProtoMsg(message: BooleanData): BooleanDataProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.data.base.BooleanData",
      value: BooleanData.encode(message).finish()
    };
  }
};