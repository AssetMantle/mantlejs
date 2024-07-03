//@ts-nocheck
import { Key, KeyAmino, KeySDKType } from "../../key/key";
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../../../schema/ids/base/identity_id";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface QueryRequest {
  key?: Key;
  limit: number;
  identityID?: IdentityID;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/AssetMantle.modules.splits.queries.balances.QueryRequest";
  value: Uint8Array;
}
export interface QueryRequestAmino {
  key?: KeyAmino;
  limit?: number;
  identity_i_d?: IdentityIDAmino;
}
export interface QueryRequestAminoMsg {
  type: "/AssetMantle.modules.splits.queries.balances.QueryRequest";
  value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
  key?: KeySDKType;
  limit: number;
  identity_i_d?: IdentityIDSDKType;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    key: undefined,
    limit: 0,
    identityID: undefined
  };
}
export const QueryRequest = {
  typeUrl: "/AssetMantle.modules.splits.queries.balances.QueryRequest",
  encode(message: QueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    if (message.identityID !== undefined) {
      IdentityID.encode(message.identityID, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.identityID = IdentityID.decode(reader, reader.uint32());
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
    message.identityID = object.identityID !== undefined && object.identityID !== null ? IdentityID.fromPartial(object.identityID) : undefined;
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
    if (object.identity_i_d !== undefined && object.identity_i_d !== null) {
      message.identityID = IdentityID.fromAmino(object.identity_i_d);
    }
    return message;
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.key = message.key ? Key.toAmino(message.key) : undefined;
    obj.limit = message.limit === 0 ? undefined : message.limit;
    obj.identity_i_d = message.identityID ? IdentityID.toAmino(message.identityID) : undefined;
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
      typeUrl: "/AssetMantle.modules.splits.queries.balances.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};