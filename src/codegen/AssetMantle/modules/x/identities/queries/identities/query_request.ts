//@ts-nocheck
import { Key, KeyAmino, KeySDKType } from "../../key/key";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface QueryRequest {
  key?: Key;
  limit: number;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/AssetMantle.modules.identities.queries.identities.QueryRequest";
  value: Uint8Array;
}
export interface QueryRequestAmino {
  key?: KeyAmino;
  limit?: number;
}
export interface QueryRequestAminoMsg {
  type: "/AssetMantle.modules.identities.queries.identities.QueryRequest";
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
  typeUrl: "/AssetMantle.modules.identities.queries.identities.QueryRequest",
  encode(message: QueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.limit = object.limit ?? 0;
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    const message = createBaseQueryRequest();
    if (object.key !== undefined && object.key !== null) {
      message.key = Key.fromAmino(object.key);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    }
    return message;
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.key = message.key ? Key.toAmino(message.key) : undefined;
    obj.limit = message.limit === 0 ? undefined : message.limit;
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
      typeUrl: "/AssetMantle.modules.identities.queries.identities.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};