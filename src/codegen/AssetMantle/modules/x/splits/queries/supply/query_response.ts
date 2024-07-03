//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface QueryResponse {
  supply: string;
}
export interface QueryResponseProtoMsg {
  typeUrl: "/AssetMantle.modules.splits.queries.supply.QueryResponse";
  value: Uint8Array;
}
export interface QueryResponseAmino {
  supply?: string;
}
export interface QueryResponseAminoMsg {
  type: "/AssetMantle.modules.splits.queries.supply.QueryResponse";
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
  typeUrl: "/AssetMantle.modules.splits.queries.supply.QueryResponse",
  encode(message: QueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supply !== "") {
      writer.uint32(10).string(message.supply);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.supply = object.supply ?? "";
    return message;
  },
  fromAmino(object: QueryResponseAmino): QueryResponse {
    const message = createBaseQueryResponse();
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply;
    }
    return message;
  },
  toAmino(message: QueryResponse): QueryResponseAmino {
    const obj: any = {};
    obj.supply = message.supply === "" ? undefined : message.supply;
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
      typeUrl: "/AssetMantle.modules.splits.queries.supply.QueryResponse",
      value: QueryResponse.encode(message).finish()
    };
  }
};