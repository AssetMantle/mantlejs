//@ts-nocheck
import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../../../../schema/ids/base/asset_id";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface TransactionResponse {
  assetID?: AssetID;
}
export interface TransactionResponseProtoMsg {
  typeUrl: "/AssetMantle.modules.assets.transactions.mint.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {
  asset_i_d?: AssetIDAmino;
}
export interface TransactionResponseAminoMsg {
  type: "/AssetMantle.modules.assets.transactions.mint.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
  asset_i_d?: AssetIDSDKType;
}
function createBaseTransactionResponse(): TransactionResponse {
  return {
    assetID: undefined
  };
}
export const TransactionResponse = {
  typeUrl: "/AssetMantle.modules.assets.transactions.mint.TransactionResponse",
  encode(message: TransactionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransactionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResponse();
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
  fromPartial(object: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    return message;
  },
  fromAmino(object: TransactionResponseAmino): TransactionResponse {
    const message = createBaseTransactionResponse();
    if (object.asset_i_d !== undefined && object.asset_i_d !== null) {
      message.assetID = AssetID.fromAmino(object.asset_i_d);
    }
    return message;
  },
  toAmino(message: TransactionResponse): TransactionResponseAmino {
    const obj: any = {};
    obj.asset_i_d = message.assetID ? AssetID.toAmino(message.assetID) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransactionResponseAminoMsg): TransactionResponse {
    return TransactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TransactionResponseProtoMsg): TransactionResponse {
    return TransactionResponse.decode(message.value);
  },
  toProto(message: TransactionResponse): Uint8Array {
    return TransactionResponse.encode(message).finish();
  },
  toProtoMsg(message: TransactionResponse): TransactionResponseProtoMsg {
    return {
      typeUrl: "/AssetMantle.modules.assets.transactions.mint.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};