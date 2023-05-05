import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    identityID?: IdentityID;
}
export interface QueryRequestProtoMsg {
    typeUrl: "/assetmantle.modules.identities.queries.identity.QueryRequest";
    value: Uint8Array;
}
export interface QueryRequestAmino {
    identity_i_d?: IdentityIDAmino;
}
export interface QueryRequestAminoMsg {
    type: "/assetmantle.modules.identities.queries.identity.QueryRequest";
    value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
    identity_i_d?: IdentityIDSDKType;
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
