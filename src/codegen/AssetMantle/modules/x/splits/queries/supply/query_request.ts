//@ts-nocheck
import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../../../../schema/ids/base/asset_id";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface QueryRequest {
  assetID?: AssetID;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/AssetMantle.modules.splits.queries.supply.QueryRequest";
  value: Uint8Array;
}
export interface QueryRequestAmino {
  asset_i_d?: AssetIDAmino;
}
export interface QueryRequestAminoMsg {
  type: "/AssetMantle.modules.splits.queries.supply.QueryRequest";
  value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
  asset_i_d?: AssetIDSDKType;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    assetID: undefined
  };
}
export const QueryRequest = {
  typeUrl: "/AssetMantle.modules.splits.queries.supply.QueryRequest",
  encode(message: QueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetID = AssetID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    const message = createBaseQueryRequest();
    if (object.asset_i_d !== undefined && object.asset_i_d !== null) {
      message.assetID = AssetID.fromAmino(object.asset_i_d);
    }
    return message;
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.asset_i_d = message.assetID ? AssetID.toAmino(message.assetID) : undefined;
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
      typeUrl: "/AssetMantle.modules.splits.queries.supply.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};