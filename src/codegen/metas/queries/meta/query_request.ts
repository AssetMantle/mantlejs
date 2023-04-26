import { DataID, DataIDAmino, DataIDSDKType } from "../../../ids/base/data_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryRequest {
  dataID?: DataID;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/assetmantle.modules.metas.queries.meta.QueryRequest";
  value: Uint8Array;
}
export interface QueryRequestAmino {
  data_i_d?: DataIDAmino;
}
export interface QueryRequestAminoMsg {
  type: "/assetmantle.modules.metas.queries.meta.QueryRequest";
  value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
  data_i_d?: DataIDSDKType;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    dataID: undefined
  };
}
export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataID !== undefined) {
      DataID.encode(message.dataID, writer.uint32(10).fork()).ldelim();
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
          message.dataID = DataID.decode(reader, reader.uint32());
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
      dataID: isSet(object.dataID) ? DataID.fromJSON(object.dataID) : undefined
    };
  },
  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.dataID !== undefined && (obj.dataID = message.dataID ? DataID.toJSON(message.dataID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.dataID = object.dataID !== undefined && object.dataID !== null ? DataID.fromPartial(object.dataID) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    return {
      dataID: object?.data_i_d ? DataID.fromAmino(object.data_i_d) : undefined
    };
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.data_i_d = message.dataID ? DataID.toAmino(message.dataID) : undefined;
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
      typeUrl: "/assetmantle.modules.metas.queries.meta.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};