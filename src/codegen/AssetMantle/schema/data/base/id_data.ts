//@ts-nocheck
import { AnyID, AnyIDAmino, AnyIDSDKType } from "../../ids/base/any_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface IDData {
  value?: AnyID;
}
export interface IDDataProtoMsg {
  typeUrl: "/AssetMantle.schema.data.base.IDData";
  value: Uint8Array;
}
export interface IDDataAmino {
  value?: AnyIDAmino;
}
export interface IDDataAminoMsg {
  type: "/AssetMantle.schema.data.base.IDData";
  value: IDDataAmino;
}
export interface IDDataSDKType {
  value?: AnyIDSDKType;
}
function createBaseIDData(): IDData {
  return {
    value: undefined
  };
}
export const IDData = {
  typeUrl: "/AssetMantle.schema.data.base.IDData",
  encode(message: IDData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== undefined) {
      AnyID.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IDData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = AnyID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IDData>): IDData {
    const message = createBaseIDData();
    message.value = object.value !== undefined && object.value !== null ? AnyID.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: IDDataAmino): IDData {
    const message = createBaseIDData();
    if (object.value !== undefined && object.value !== null) {
      message.value = AnyID.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: IDData): IDDataAmino {
    const obj: any = {};
    obj.value = message.value ? AnyID.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: IDDataAminoMsg): IDData {
    return IDData.fromAmino(object.value);
  },
  fromProtoMsg(message: IDDataProtoMsg): IDData {
    return IDData.decode(message.value);
  },
  toProto(message: IDData): Uint8Array {
    return IDData.encode(message).finish();
  },
  toProtoMsg(message: IDData): IDDataProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.data.base.IDData",
      value: IDData.encode(message).finish()
    };
  }
};