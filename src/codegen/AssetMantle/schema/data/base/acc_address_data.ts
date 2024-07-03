//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
export interface AccAddressData {
  value: Uint8Array;
}
export interface AccAddressDataProtoMsg {
  typeUrl: "/AssetMantle.schema.data.base.AccAddressData";
  value: Uint8Array;
}
export interface AccAddressDataAmino {
  value?: string;
}
export interface AccAddressDataAminoMsg {
  type: "/AssetMantle.schema.data.base.AccAddressData";
  value: AccAddressDataAmino;
}
export interface AccAddressDataSDKType {
  value: Uint8Array;
}
function createBaseAccAddressData(): AccAddressData {
  return {
    value: new Uint8Array()
  };
}
export const AccAddressData = {
  typeUrl: "/AssetMantle.schema.data.base.AccAddressData",
  encode(message: AccAddressData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccAddressData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccAddressData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AccAddressData>): AccAddressData {
    const message = createBaseAccAddressData();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AccAddressDataAmino): AccAddressData {
    const message = createBaseAccAddressData();
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: AccAddressData): AccAddressDataAmino {
    const obj: any = {};
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccAddressDataAminoMsg): AccAddressData {
    return AccAddressData.fromAmino(object.value);
  },
  fromProtoMsg(message: AccAddressDataProtoMsg): AccAddressData {
    return AccAddressData.decode(message.value);
  },
  toProto(message: AccAddressData): Uint8Array {
    return AccAddressData.encode(message).finish();
  },
  toProtoMsg(message: AccAddressData): AccAddressDataProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.data.base.AccAddressData",
      value: AccAddressData.encode(message).finish()
    };
  }
};