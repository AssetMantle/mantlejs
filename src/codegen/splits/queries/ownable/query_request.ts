import { AnyOwnableID, AnyOwnableIDAmino, AnyOwnableIDSDKType } from "../../../ids/base/any_ownable_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryRequest {
  ownableID?: AnyOwnableID;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/assetmantle.modules.splits.queries.ownable.QueryRequest";
  value: Uint8Array;
}
export interface QueryRequestAmino {
  ownable_i_d?: AnyOwnableIDAmino;
}
export interface QueryRequestAminoMsg {
  type: "/assetmantle.modules.splits.queries.ownable.QueryRequest";
  value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
  ownable_i_d?: AnyOwnableIDSDKType;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    ownableID: undefined
  };
}
export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownableID !== undefined) {
      AnyOwnableID.encode(message.ownableID, writer.uint32(10).fork()).ldelim();
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
          message.ownableID = AnyOwnableID.decode(reader, reader.uint32());
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
      ownableID: isSet(object.ownableID) ? AnyOwnableID.fromJSON(object.ownableID) : undefined
    };
  },
  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.ownableID !== undefined && (obj.ownableID = message.ownableID ? AnyOwnableID.toJSON(message.ownableID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.ownableID = object.ownableID !== undefined && object.ownableID !== null ? AnyOwnableID.fromPartial(object.ownableID) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    return {
      ownableID: object?.ownable_i_d ? AnyOwnableID.fromAmino(object.ownable_i_d) : undefined
    };
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.ownable_i_d = message.ownableID ? AnyOwnableID.toAmino(message.ownableID) : undefined;
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
      typeUrl: "/assetmantle.modules.splits.queries.ownable.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};