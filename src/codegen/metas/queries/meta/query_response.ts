import { Record, RecordAmino, RecordSDKType } from "../../record/record";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryResponse {
  record?: Record;
}
export interface QueryResponseProtoMsg {
  typeUrl: "/assetmantle.modules.metas.queries.meta.QueryResponse";
  value: Uint8Array;
}
export interface QueryResponseAmino {
  record?: RecordAmino;
}
export interface QueryResponseAminoMsg {
  type: "/assetmantle.modules.metas.queries.meta.QueryResponse";
  value: QueryResponseAmino;
}
export interface QueryResponseSDKType {
  record?: RecordSDKType;
}
function createBaseQueryResponse(): QueryResponse {
  return {
    record: undefined
  };
}
export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      Record.encode(message.record, writer.uint32(10).fork()).ldelim();
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
          message.record = Record.decode(reader, reader.uint32());
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
      record: isSet(object.record) ? Record.fromJSON(object.record) : undefined
    };
  },
  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? Record.toJSON(message.record) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.record = object.record !== undefined && object.record !== null ? Record.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryResponseAmino): QueryResponse {
    return {
      record: object?.record ? Record.fromAmino(object.record) : undefined
    };
  },
  toAmino(message: QueryResponse): QueryResponseAmino {
    const obj: any = {};
    obj.record = message.record ? Record.toAmino(message.record) : undefined;
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
      typeUrl: "/assetmantle.modules.metas.queries.meta.QueryResponse",
      value: QueryResponse.encode(message).finish()
    };
  }
};