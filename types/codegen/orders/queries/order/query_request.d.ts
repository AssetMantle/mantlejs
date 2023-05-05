import { OrderID, OrderIDAmino, OrderIDSDKType } from "../../../ids/base/order_id";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    orderID?: OrderID;
}
export interface QueryRequestProtoMsg {
    typeUrl: "/assetmantle.modules.orders.queries.order.QueryRequest";
    value: Uint8Array;
}
export interface QueryRequestAmino {
    order_i_d?: OrderIDAmino;
}
export interface QueryRequestAminoMsg {
    type: "/assetmantle.modules.orders.queries.order.QueryRequest";
    value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
    order_i_d?: OrderIDSDKType;
}
export declare const QueryRequest: {
    encode(message: QueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest;
    fromJSON(object: any): QueryRequest;
    toJSON(message: QueryRequest): unknown;
    fromPartial(object: Partial<QueryRequest>): QueryRequest;
    fromAmino(object: QueryRequestAmino): QueryRequest;
    toAmino(message: QueryRequest): QueryRequestAmino;
    fromAminoMsg(object: QueryRequestAminoMsg): QueryRequest;
    fromProtoMsg(message: QueryRequestProtoMsg): QueryRequest;
    toProto(message: QueryRequest): Uint8Array;
    toProtoMsg(message: QueryRequest): QueryRequestProtoMsg;
};
