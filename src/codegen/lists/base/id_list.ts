import { AnyID, AnyIDAmino, AnyIDSDKType } from "../../ids/base/any_id";
import * as _m0 from "protobufjs/minimal";
export interface IDList {
  iDList: AnyID[];
}
export interface IDListProtoMsg {
  typeUrl: "/assetmantle.schema.lists.base.IDList";
  value: Uint8Array;
}
export interface IDListAmino {
  i_d_list: AnyIDAmino[];
}
export interface IDListAminoMsg {
  type: "/assetmantle.schema.lists.base.IDList";
  value: IDListAmino;
}
export interface IDListSDKType {
  i_d_list: AnyIDSDKType[];
}
function createBaseIDList(): IDList {
  return {
    iDList: []
  };
}
export const IDList = {
  encode(message: IDList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.iDList) {
      AnyID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IDList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iDList.push(AnyID.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IDList {
    return {
      iDList: Array.isArray(object?.iDList) ? object.iDList.map((e: any) => AnyID.fromJSON(e)) : []
    };
  },
  toJSON(message: IDList): unknown {
    const obj: any = {};
    if (message.iDList) {
      obj.iDList = message.iDList.map(e => e ? AnyID.toJSON(e) : undefined);
    } else {
      obj.iDList = [];
    }
    return obj;
  },
  fromPartial(object: Partial<IDList>): IDList {
    const message = createBaseIDList();
    message.iDList = object.iDList?.map(e => AnyID.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IDListAmino): IDList {
    return {
      iDList: Array.isArray(object?.i_d_list) ? object.i_d_list.map((e: any) => AnyID.fromAmino(e)) : []
    };
  },
  toAmino(message: IDList): IDListAmino {
    const obj: any = {};
    if (message.iDList) {
      obj.i_d_list = message.iDList.map(e => e ? AnyID.toAmino(e) : undefined);
    } else {
      obj.i_d_list = [];
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
      typeUrl: "/assetmantle.schema.lists.base.IDList",
      value: IDList.encode(message).finish()
    };
  }
};