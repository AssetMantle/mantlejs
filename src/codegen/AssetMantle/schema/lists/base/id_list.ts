//@ts-nocheck
import { AnyID, AnyIDAmino, AnyIDSDKType } from "../../ids/base/any_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface IDList {
  anyIDs: AnyID[];
}
export interface IDListProtoMsg {
  typeUrl: "/AssetMantle.schema.lists.base.IDList";
  value: Uint8Array;
}
export interface IDListAmino {
  any_i_ds?: AnyIDAmino[];
}
export interface IDListAminoMsg {
  type: "/AssetMantle.schema.lists.base.IDList";
  value: IDListAmino;
}
export interface IDListSDKType {
  any_i_ds: AnyIDSDKType[];
}
function createBaseIDList(): IDList {
  return {
    anyIDs: []
  };
}
export const IDList = {
  typeUrl: "/AssetMantle.schema.lists.base.IDList",
  encode(message: IDList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.anyIDs) {
      AnyID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IDList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.anyIDs.push(AnyID.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<IDList>): IDList {
    const message = createBaseIDList();
    message.anyIDs = object.anyIDs?.map(e => AnyID.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IDListAmino): IDList {
    const message = createBaseIDList();
    message.anyIDs = object.any_i_ds?.map(e => AnyID.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: IDList): IDListAmino {
    const obj: any = {};
    if (message.anyIDs) {
      obj.any_i_ds = message.anyIDs.map(e => e ? AnyID.toAmino(e) : undefined);
    } else {
      obj.any_i_ds = message.anyIDs;
    }
    return obj;
  },
  fromAminoMsg(object: IDListAminoMsg): IDList {
    return IDList.fromAmino(object.value);
  },
  fromProtoMsg(message: IDListProtoMsg): IDList {
    return IDList.decode(message.value);
  },
  toProto(message: IDList): Uint8Array {
    return IDList.encode(message).finish();
  },
  toProtoMsg(message: IDList): IDListProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.lists.base.IDList",
      value: IDList.encode(message).finish()
    };
  }
};