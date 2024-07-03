//@ts-nocheck
import { Record, RecordAmino, RecordSDKType } from "../../record/record";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface QueryResponse {
  record?: Record;
}
export interface QueryResponseProtoMsg {
  typeUrl: "/AssetMantle.modules.orders.queries.order.QueryResponse";
  value: Uint8Array;
}
export interface QueryResponseAmino {
  record?: RecordAmino;
}
export interface QueryResponseAminoMsg {
  type: "/AssetMantle.modules.orders.queries.order.QueryResponse";
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
  typeUrl: "/AssetMantle.modules.orders.queries.order.QueryResponse",
  encode(message: QueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      Record.encode(message.record, writer.uint32(10).fork()).ldelim();
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
          message.record = Record.decode(reader, reader.uint32());
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
    message.record = object.record !== undefined && object.record !== null ? Record.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryResponseAmino): QueryResponse {
    const message = createBaseQueryResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = Record.fromAmino(object.record);
    }
    return message;
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
      typeUrl: "/AssetMantle.modules.orders.queries.order.QueryResponse",
      value: QueryResponse.encode(message).finish()
    };
  }
};