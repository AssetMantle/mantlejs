import { CoinID, CoinIDAmino, CoinIDSDKType } from "../../../ids/base/coin_id";
import * as _m0 from "protobufjs/minimal";
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
export declare const TransactionResponse: {
    encode(message: TransactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse;
    fromJSON(object: any): TransactionResponse;
    toJSON(message: TransactionResponse): unknown;
    fromPartial(object: Partial<TransactionResponse>): TransactionResponse;
    fromAmino(object: TransactionResponseAmino): TransactionResponse;
    toAmino(message: TransactionResponse): TransactionResponseAmino;
    fromAminoMsg(object: TransactionResponseAminoMsg): TransactionResponse;
    fromProtoMsg(message: TransactionResponseProtoMsg): TransactionResponse;
    toProto(message: TransactionResponse): Uint8Array;
    toProtoMsg(message: TransactionResponse): TransactionResponseProtoMsg;
};
