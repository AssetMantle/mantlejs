import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryResponse {
  success: boolean;
  error: string;
  value: string;
}
export interface QueryResponseProtoMsg {
  typeUrl: "/assetmantle.modules.splits.queries.ownable.QueryResponse";
  value: Uint8Array;
}
export interface QueryResponseAmino {
  success: boolean;
  error: string;
  value: string;
}
export interface QueryResponseAminoMsg {
  type: "/assetmantle.modules.splits.queries.ownable.QueryResponse";
  value: QueryResponseAmino;
}
export interface QueryResponseSDKType {
  success: boolean;
  error: string;
  value: string;
}
function createBaseQueryResponse(): QueryResponse {
  return {
    success: false,
    error: "",
    value: ""
  };
}
export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
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
          message.success = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          message.value = reader.string();
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
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error) ? String(object.error) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: QueryResponseAmino): QueryResponse {
    return {
      success: object.success,
      error: object.error,
      value: object.value
    };
  },
  toAmino(message: QueryResponse): QueryResponseAmino {
    const obj: any = {};
    obj.success = message.success;
    obj.error = message.error;
    obj.value = message.value;
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
      typeUrl: "/assetmantle.modules.splits.queries.ownable.QueryResponse",
      value: QueryResponse.encode(message).finish()
    };
  }
};