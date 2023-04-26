import { Mappable, MappableAmino, MappableSDKType } from "../../mappable/mappable";
import * as _m0 from "protobufjs/minimal";
export interface QueryResponse {
  list: Mappable[];
}
export interface QueryResponseProtoMsg {
  typeUrl: "/assetmantle.modules.maintainers.queries.maintainers.QueryResponse";
  value: Uint8Array;
}
export interface QueryResponseAmino {
  list: MappableAmino[];
}
export interface QueryResponseAminoMsg {
  type: "/assetmantle.modules.maintainers.queries.maintainers.QueryResponse";
  value: QueryResponseAmino;
}
export interface QueryResponseSDKType {
  list: MappableSDKType[];
}
function createBaseQueryResponse(): QueryResponse {
  return {
    list: []
  };
}
export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      Mappable.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.list.push(Mappable.decode(reader, reader.uint32()));
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
      list: Array.isArray(object?.list) ? object.list.map((e: any) => Mappable.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? Mappable.toJSON(e) : undefined);
    } else {
      obj.list = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.list = object.list?.map(e => Mappable.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryResponseAmino): QueryResponse {
    return {
      list: Array.isArray(object?.list) ? object.list.map((e: any) => Mappable.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryResponse): QueryResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? Mappable.toAmino(e) : undefined);
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
      typeUrl: "/assetmantle.modules.maintainers.queries.maintainers.QueryResponse",
      value: QueryResponse.encode(message).finish()
    };
  }
};