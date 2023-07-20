import { CoinID, CoinIDAmino, CoinIDSDKType } from "../../../ids/base/coin_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface TransactionResponse {
  coinID?: CoinID;
}
export interface TransactionResponseProtoMsg {
  typeUrl: "/assetmantle.modules.splits.transactions.wrap.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {
  coin_i_d?: CoinIDAmino;
}
export interface TransactionResponseAminoMsg {
  type: "/assetmantle.modules.splits.transactions.wrap.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
  coin_i_d?: CoinIDSDKType;
}
function createBaseTransactionResponse(): TransactionResponse {
  return {
    coinID: undefined
  };
}
export const TransactionResponse = {
  encode(message: TransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinID !== undefined) {
      CoinID.encode(message.coinID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinID = CoinID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransactionResponse {
    return {
      coinID: isSet(object.coinID) ? CoinID.fromJSON(object.coinID) : undefined
    };
  },
  toJSON(message: TransactionResponse): unknown {
    const obj: any = {};
    message.coinID !== undefined && (obj.coinID = message.coinID ? CoinID.toJSON(message.coinID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.coinID = object.coinID !== undefined && object.coinID !== null ? CoinID.fromPartial(object.coinID) : undefined;
    return message;
  },
  fromAmino(object: TransactionResponseAmino): TransactionResponse {
    return {
      coinID: object?.coin_i_d ? CoinID.fromAmino(object.coin_i_d) : undefined
    };
  },
  toAmino(message: TransactionResponse): TransactionResponseAmino {
    const obj: any = {};
    obj.coin_i_d = message.coinID ? CoinID.toAmino(message.coinID) : undefined;
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
      typeUrl: "/assetmantle.modules.splits.transactions.wrap.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};