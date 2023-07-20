import { Key, KeyAmino, KeySDKType } from "../../key/key";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryRequest {
  key?: Key;
  limit: number;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/assetmantle.modules.identities.queries.identities.QueryRequest";
  value: Uint8Array;
}
export interface QueryRequestAmino {
  key?: KeyAmino;
  limit: number;
}
export interface QueryRequestAminoMsg {
  type: "/assetmantle.modules.identities.queries.identities.QueryRequest";
  value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
  key?: KeySDKType;
  limit: number;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    key: undefined,
    limit: 0
  };
}
export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = Key.decode(reader, reader.uint32());
          break;
        case 2:
          message.limit = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRequest {
    return {
      key: isSet(object.key) ? Key.fromJSON(object.key) : undefined,
      limit: isSet(object.limit) ? Number(object.limit) : 0
    };
  },
  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? Key.toJSON(message.key) : undefined);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.limit = object.limit ?? 0;
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    return {
      key: object?.key ? Key.fromAmino(object.key) : undefined,
      limit: object.limit
    };
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.key = message.key ? Key.toAmino(message.key) : undefined;
    obj.limit = message.limit;
    return obj;
  },
  fromAminoMsg(object: QueryRequestAminoMsg): QueryRequest {
    return QueryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestProtoMsg): QueryRequest {
    return QueryRequest.decode(message.value);
  },
  toProto(message: QueryRequest): Uint8Array {
    return QueryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequest): QueryRequestProtoMsg {
    return {
      typeUrl: "/assetmantle.modules.identities.queries.identities.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};