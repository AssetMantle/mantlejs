import { MaintainerID, MaintainerIDAmino, MaintainerIDSDKType } from "../../../ids/base/maintainer_id";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    maintainerID?: MaintainerID;
}
export interface QueryRequestProtoMsg {
    typeUrl: "/assetmantle.modules.maintainers.queries.maintainer.QueryRequest";
    value: Uint8Array;
}
export interface QueryRequestAmino {
    maintainer_i_d?: MaintainerIDAmino;
}
export interface QueryRequestAminoMsg {
    type: "/assetmantle.modules.maintainers.queries.maintainer.QueryRequest";
    value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
    maintainer_i_d?: MaintainerIDSDKType;
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
