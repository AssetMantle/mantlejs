import * as _m0 from "protobufjs/minimal";
export interface QueryResponse {
    supply: string;
}
export interface QueryResponseProtoMsg {
    typeUrl: "/assetmantle.modules.splits.queries.supply.QueryResponse";
    value: Uint8Array;
}
export interface QueryResponseAmino {
    supply: string;
}
export interface QueryResponseAminoMsg {
    type: "/assetmantle.modules.splits.queries.supply.QueryResponse";
    value: QueryResponseAmino;
}
export interface QueryResponseSDKType {
    supply: string;
}
export declare const QueryResponse: {
    encode(message: QueryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse;
    fromJSON(object: any): QueryResponse;
    toJSON(message: QueryResponse): unknown;
    fromPartial(object: Partial<QueryResponse>): QueryResponse;
    fromAmino(object: QueryResponseAmino): QueryResponse;
    toAmino(message: QueryResponse): QueryResponseAmino;
    fromAminoMsg(object: QueryResponseAminoMsg): QueryResponse;
    fromProtoMsg(message: QueryResponseProtoMsg): QueryResponse;
    toProto(message: QueryResponse): Uint8Array;
    toProtoMsg(message: QueryResponse): QueryResponseProtoMsg;
};
