import { SplitID, SplitIDAmino, SplitIDSDKType } from "../../../ids/base/split_id";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    splitID?: SplitID;
}
export interface QueryRequestProtoMsg {
    typeUrl: "/assetmantle.modules.splits.queries.split.QueryRequest";
    value: Uint8Array;
}
export interface QueryRequestAmino {
    split_i_d?: SplitIDAmino;
}
export interface QueryRequestAminoMsg {
    type: "/assetmantle.modules.splits.queries.split.QueryRequest";
    value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
    split_i_d?: SplitIDSDKType;
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
