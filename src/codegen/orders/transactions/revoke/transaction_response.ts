import * as _m0 from "protobufjs/minimal";
export interface TransactionResponse {}
export interface TransactionResponseProtoMsg {
  typeUrl: "/assetmantle.modules.orders.transactions.revoke.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {}
export interface TransactionResponseAminoMsg {
  type: "/assetmantle.modules.orders.transactions.revoke.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {}
function createBaseTransactionResponse(): TransactionResponse {
  return {};
}
export const TransactionResponse = {
  encode(_: TransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(_: any): TransactionResponse {
    return {};
  },
  toJSON(_: TransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    return message;
  },
  fromAmino(_: TransactionResponseAmino): TransactionResponse {
    return {};
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
      typeUrl: "/assetmantle.modules.orders.transactions.revoke.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};