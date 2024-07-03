//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface TransactionResponse {}
export interface TransactionResponseProtoMsg {
  typeUrl: "/AssetMantle.modules.assets.transactions.renumerate.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {}
export interface TransactionResponseAminoMsg {
  type: "/AssetMantle.modules.assets.transactions.renumerate.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {}
function createBaseTransactionResponse(): TransactionResponse {
  return {};
}
export const TransactionResponse = {
  typeUrl: "/AssetMantle.modules.assets.transactions.renumerate.TransactionResponse",
  encode(_: TransactionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransactionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    return message;
  },
  fromAmino(_: TransactionResponseAmino): TransactionResponse {
    const message = createBaseTransactionResponse();
    return message;
  },
  toAmino(_: TransactionResponse): TransactionResponseAmino {
    const obj: any = {};
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
      typeUrl: "/AssetMantle.modules.assets.transactions.renumerate.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};