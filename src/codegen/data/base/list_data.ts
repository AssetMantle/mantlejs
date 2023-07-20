import { AnyListableData, AnyListableDataAmino, AnyListableDataSDKType } from "./any_listable_data";
import * as _m0 from "protobufjs/minimal";
export interface ListData {
  anyListableData: AnyListableData[];
}
export interface ListDataProtoMsg {
  typeUrl: "/assetmantle.schema.data.base.ListData";
  value: Uint8Array;
}
export interface ListDataAmino {
  any_listable_data: AnyListableDataAmino[];
}
export interface ListDataAminoMsg {
  type: "/assetmantle.schema.data.base.ListData";
  value: ListDataAmino;
}
export interface ListDataSDKType {
  any_listable_data: AnyListableDataSDKType[];
}
function createBaseListData(): ListData {
  return {
    anyListableData: []
  };
}
export const ListData = {
  encode(message: ListData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.anyListableData) {
      AnyListableData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ListData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.anyListableData.push(AnyListableData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListData {
    return {
      anyListableData: Array.isArray(object?.anyListableData) ? object.anyListableData.map((e: any) => AnyListableData.fromJSON(e)) : []
    };
  },
  toJSON(message: ListData): unknown {
    const obj: any = {};
    if (message.anyListableData) {
      obj.anyListableData = message.anyListableData.map(e => e ? AnyListableData.toJSON(e) : undefined);
    } else {
      obj.anyListableData = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ListData>): ListData {
    const message = createBaseListData();
    message.anyListableData = object.anyListableData?.map(e => AnyListableData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListDataAmino): ListData {
    return {
      anyListableData: Array.isArray(object?.any_listable_data) ? object.any_listable_data.map((e: any) => AnyListableData.fromAmino(e)) : []
    };
  },
  toAmino(message: ListData): ListDataAmino {
    const obj: any = {};
    if (message.anyListableData) {
      obj.any_listable_data = message.anyListableData.map(e => e ? AnyListableData.toAmino(e) : undefined);
    } else {
      obj.any_listable_data = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListDataAminoMsg): ListData {
    return ListData.fromAmino(object.value);
  },
  fromProtoMsg(message: ListDataProtoMsg): ListData {
    return ListData.decode(message.value);
  },
  toProto(message: ListData): Uint8Array {
    return ListData.encode(message).finish();
  },
  toProtoMsg(message: ListData): ListDataProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.data.base.ListData",
      value: ListData.encode(message).finish()
    };
  }
};