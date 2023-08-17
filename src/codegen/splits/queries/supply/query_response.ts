import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryResponse {
  supply: string;
}
export interface QueryResponseProtoMsg {
  typeUrl: "/assetmantle.modules.splits.queries.supply.QueryResponse";
  value: Uint8Array;
}
export interface QueryResponseAmino {
  supply: string;
}
export interface QueryResponseAminoMsg {
  type: "/assetmantle.modules.splits.queries.supply.QueryResponse";
  value: QueryResponseAmino;
}
export interface QueryResponseSDKType {
  supply: string;
}
function createBaseQueryResponse(): QueryResponse {
  return {
    supply: ""
  };
}
export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supply !== "") {
      writer.uint32(10).string(message.supply);
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
          message.supply = reader.string();
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
      supply: isSet(object.supply) ? String(object.supply) : ""
    };
  },
  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    message.supply !== undefined && (obj.supply = message.supply);
    return obj;
  },
  fromPartial(object: Partial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.supply = object.supply ?? "";
    return message;
  },
  fromAmino(object: QueryResponseAmino): QueryResponse {
    return {
      supply: object.supply
    };
  },
  toAmino(message: QueryResponse): QueryResponseAmino {
    const obj: any = {};
    obj.supply = message.supply;
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
      typeUrl: "/assetmantle.modules.splits.queries.supply.QueryResponse",
      value: QueryResponse.encode(message).finish()
    };
  }
};