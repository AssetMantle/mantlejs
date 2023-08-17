import { OrderID, OrderIDAmino, OrderIDSDKType } from "../../../ids/base/order_id";
import * as _m0 from "protobufjs/minimal";
export interface TransactionResponse {
    orderID?: OrderID;
}
export interface TransactionResponseProtoMsg {
    typeUrl: "/assetmantle.modules.orders.transactions.put.TransactionResponse";
    value: Uint8Array;
}
export interface TransactionResponseAmino {
    order_i_d?: OrderIDAmino;
}
export interface TransactionResponseAminoMsg {
    type: "/assetmantle.modules.orders.transactions.put.TransactionResponse";
    value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
    order_i_d?: OrderIDSDKType;
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
