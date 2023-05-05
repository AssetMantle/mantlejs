import { DataID, DataIDAmino, DataIDSDKType } from "../../../ids/base/data_id";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    dataID?: DataID;
}
export interface QueryRequestProtoMsg {
    typeUrl: "/assetmantle.modules.metas.queries.meta.QueryRequest";
    value: Uint8Array;
}
export interface QueryRequestAmino {
    data_i_d?: DataIDAmino;
}
export interface QueryRequestAminoMsg {
    type: "/assetmantle.modules.metas.queries.meta.QueryRequest";
    value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
    data_i_d?: DataIDSDKType;
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
