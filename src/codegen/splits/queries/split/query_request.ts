import { SplitID, SplitIDAmino, SplitIDSDKType } from "../../../ids/base/split_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryRequest {
  splitID?: SplitID;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/assetmantle.modules.splits.queries.split.QueryRequest";
  value: Uint8Array;
}
export interface QueryRequestAmino {
  split_i_d?: SplitIDAmino;
}
export interface QueryRequestAminoMsg {
  type: "/assetmantle.modules.splits.queries.split.QueryRequest";
  value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
  split_i_d?: SplitIDSDKType;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    splitID: undefined
  };
}
export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.splitID !== undefined) {
      SplitID.encode(message.splitID, writer.uint32(10).fork()).ldelim();
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
          message.splitID = SplitID.decode(reader, reader.uint32());
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
      splitID: isSet(object.splitID) ? SplitID.fromJSON(object.splitID) : undefined
    };
  },
  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.splitID !== undefined && (obj.splitID = message.splitID ? SplitID.toJSON(message.splitID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.splitID = object.splitID !== undefined && object.splitID !== null ? SplitID.fromPartial(object.splitID) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    return {
      splitID: object?.split_i_d ? SplitID.fromAmino(object.split_i_d) : undefined
    };
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.split_i_d = message.splitID ? SplitID.toAmino(message.splitID) : undefined;
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
      typeUrl: "/assetmantle.modules.splits.queries.split.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};