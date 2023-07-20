import { Record, RecordAmino, RecordSDKType } from "../../record/record";
import * as _m0 from "protobufjs/minimal";
export interface QueryResponse {
  list: Record[];
}
export interface QueryResponseProtoMsg {
  typeUrl: "/assetmantle.modules.metas.queries.metas.QueryResponse";
  value: Uint8Array;
}
export interface QueryResponseAmino {
  list: RecordAmino[];
}
export interface QueryResponseAminoMsg {
  type: "/assetmantle.modules.metas.queries.metas.QueryResponse";
  value: QueryResponseAmino;
}
export interface QueryResponseSDKType {
  list: RecordSDKType[];
}
function createBaseQueryResponse(): QueryResponse {
  return {
    list: []
  };
}
export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      Record.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(Record.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResponse {
    return {
      list: Array.isArray(object?.list) ? object.list.map((e: any) => Record.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? Record.toJSON(e) : undefined);
    } else {
      obj.list = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.list = object.list?.map(e => Record.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryResponseAmino): QueryResponse {
    return {
      list: Array.isArray(object?.list) ? object.list.map((e: any) => Record.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryResponse): QueryResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? Record.toAmino(e) : undefined);
    } else {
      obj.list = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryResponseAminoMsg): QueryResponse {
    return QueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResponseProtoMsg): QueryResponse {
    return QueryResponse.decode(message.value);
  },
  toProto(message: QueryResponse): Uint8Array {
    return QueryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryResponse): QueryResponseProtoMsg {
    return {
      typeUrl: "/assetmantle.modules.metas.queries.metas.QueryResponse",
      value: QueryResponse.encode(message).finish()
    };
  }
};