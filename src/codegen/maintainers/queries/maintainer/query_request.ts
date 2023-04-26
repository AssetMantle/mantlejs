import { MaintainerID, MaintainerIDAmino, MaintainerIDSDKType } from "../../../ids/base/maintainer_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryRequest {
  maintainerID?: MaintainerID;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/assetmantle.modules.maintainers.queries.maintainer.QueryRequest";
  value: Uint8Array;
}
export interface QueryRequestAmino {
  maintainer_i_d?: MaintainerIDAmino;
}
export interface QueryRequestAminoMsg {
  type: "/assetmantle.modules.maintainers.queries.maintainer.QueryRequest";
  value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
  maintainer_i_d?: MaintainerIDSDKType;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    maintainerID: undefined
  };
}
export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maintainerID !== undefined) {
      MaintainerID.encode(message.maintainerID, writer.uint32(10).fork()).ldelim();
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
          message.maintainerID = MaintainerID.decode(reader, reader.uint32());
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
      maintainerID: isSet(object.maintainerID) ? MaintainerID.fromJSON(object.maintainerID) : undefined
    };
  },
  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.maintainerID !== undefined && (obj.maintainerID = message.maintainerID ? MaintainerID.toJSON(message.maintainerID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.maintainerID = object.maintainerID !== undefined && object.maintainerID !== null ? MaintainerID.fromPartial(object.maintainerID) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    return {
      maintainerID: object?.maintainer_i_d ? MaintainerID.fromAmino(object.maintainer_i_d) : undefined
    };
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.maintainer_i_d = message.maintainerID ? MaintainerID.toAmino(message.maintainerID) : undefined;
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
      typeUrl: "/assetmantle.modules.maintainers.queries.maintainer.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};