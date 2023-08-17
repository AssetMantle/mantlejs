import { AnyListableData, AnyListableDataAmino, AnyListableDataSDKType } from "./any_listable_data";
import * as _m0 from "protobufjs/minimal";
export interface ListData {
  value: AnyListableData[];
}
export interface ListDataProtoMsg {
  typeUrl: "/assetmantle.schema.data.base.ListData";
  value: Uint8Array;
}
export interface ListDataAmino {
  value: AnyListableDataAmino[];
}
export interface ListDataAminoMsg {
  type: "/assetmantle.schema.data.base.ListData";
  value: ListDataAmino;
}
export interface ListDataSDKType {
  value: AnyListableDataSDKType[];
}
function createBaseListData(): ListData {
  return {
    value: []
  };
}
export const ListData = {
  encode(message: ListData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.value) {
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
          message.value.push(AnyListableData.decode(reader, reader.uint32()));
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
      value: Array.isArray(object?.value) ? object.value.map((e: any) => AnyListableData.fromJSON(e)) : []
    };
  },
  toJSON(message: ListData): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map(e => e ? AnyListableData.toJSON(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ListData>): ListData {
    const message = createBaseListData();
    message.value = object.value?.map(e => AnyListableData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListDataAmino): ListData {
    return {
      value: Array.isArray(object?.value) ? object.value.map((e: any) => AnyListableData.fromAmino(e)) : []
    };
  },
  toAmino(message: ListData): ListDataAmino {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map(e => e ? AnyListableData.toAmino(e) : undefined);
    } else {
      obj.value = [];
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