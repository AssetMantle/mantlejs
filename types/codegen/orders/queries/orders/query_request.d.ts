import { Key, KeyAmino, KeySDKType } from "../../key/key";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    key?: Key;
    limit: number;
}
export interface QueryRequestProtoMsg {
    typeUrl: "/assetmantle.modules.orders.queries.orders.QueryRequest";
    value: Uint8Array;
}
export interface QueryRequestAmino {
    key?: KeyAmino;
    limit: number;
}
export interface QueryRequestAminoMsg {
    type: "/assetmantle.modules.orders.queries.orders.QueryRequest";
    value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
    key?: KeySDKType;
    limit: number;
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
