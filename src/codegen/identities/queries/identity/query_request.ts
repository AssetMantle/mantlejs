import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryRequest {
  identityID?: IdentityID;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/assetmantle.modules.identities.queries.identity.QueryRequest";
  value: Uint8Array;
}
export interface QueryRequestAmino {
  identity_i_d?: IdentityIDAmino;
}
export interface QueryRequestAminoMsg {
  type: "/assetmantle.modules.identities.queries.identity.QueryRequest";
  value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
  identity_i_d?: IdentityIDSDKType;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    identityID: undefined
  };
}
export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identityID !== undefined) {
      IdentityID.encode(message.identityID, writer.uint32(10).fork()).ldelim();
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
          message.identityID = IdentityID.decode(reader, reader.uint32());
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
      identityID: isSet(object.identityID) ? IdentityID.fromJSON(object.identityID) : undefined
    };
  },
  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.identityID !== undefined && (obj.identityID = message.identityID ? IdentityID.toJSON(message.identityID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.identityID = object.identityID !== undefined && object.identityID !== null ? IdentityID.fromPartial(object.identityID) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    return {
      identityID: object?.identity_i_d ? IdentityID.fromAmino(object.identity_i_d) : undefined
    };
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
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
      typeUrl: "/assetmantle.modules.identities.queries.identity.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};