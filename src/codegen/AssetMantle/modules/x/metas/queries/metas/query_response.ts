//@ts-nocheck
import { Record, RecordAmino, RecordSDKType } from "../../record/record";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface QueryResponse {
  list: Record[];
}
export interface QueryResponseProtoMsg {
  typeUrl: "/AssetMantle.modules.metas.queries.metas.QueryResponse";
  value: Uint8Array;
}
export interface QueryResponseAmino {
  list?: RecordAmino[];
}
export interface QueryResponseAminoMsg {
  type: "/AssetMantle.modules.metas.queries.metas.QueryResponse";
  value: QueryResponseAmino;
}
export interface QueryResponseSDKType {
  list: RecordSDKType[];
}
function createBaseQueryResponse(): QueryResponse {
  return {
    list: []
  };
}
export const QueryResponse = {
  typeUrl: "/AssetMantle.modules.metas.queries.metas.QueryResponse",
  encode(message: QueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      Record.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.list.push(Record.decode(reader, reader.uint32()));
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
    message.list = object.list?.map(e => Record.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryResponseAmino): QueryResponse {
    const message = createBaseQueryResponse();
    message.list = object.list?.map(e => Record.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryResponse): QueryResponseAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? Record.toAmino(e) : undefined);
    } else {
      obj.list = message.list;
    }
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
      typeUrl: "/AssetMantle.modules.metas.queries.metas.QueryResponse",
      value: QueryResponse.encode(message).finish()
    };
  }
};