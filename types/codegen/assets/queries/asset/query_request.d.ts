import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../../ids/base/asset_id";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    assetID?: AssetID;
}
export interface QueryRequestProtoMsg {
    typeUrl: "/assetmantle.modules.assets.queries.asset.QueryRequest";
    value: Uint8Array;
}
export interface QueryRequestAmino {
    asset_i_d?: AssetIDAmino;
}
export interface QueryRequestAminoMsg {
    type: "/assetmantle.modules.assets.queries.asset.QueryRequest";
    value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
    asset_i_d?: AssetIDSDKType;
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
