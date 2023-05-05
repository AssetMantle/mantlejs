import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../../ids/base/classification_id";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    classificationID?: ClassificationID;
}
export interface QueryRequestProtoMsg {
    typeUrl: "/assetmantle.modules.classifications.queries.classification.QueryRequest";
    value: Uint8Array;
}
export interface QueryRequestAmino {
    classification_i_d?: ClassificationIDAmino;
}
export interface QueryRequestAminoMsg {
    type: "/assetmantle.modules.classifications.queries.classification.QueryRequest";
    value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
    classification_i_d?: ClassificationIDSDKType;
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
