import { Record, RecordAmino, RecordSDKType } from "../../record/record";
import * as _m0 from "protobufjs/minimal";
export interface QueryResponse {
    list: Record[];
}
export interface QueryResponseProtoMsg {
    typeUrl: "/assetmantle.modules.orders.queries.orders.QueryResponse";
    value: Uint8Array;
}
export interface QueryResponseAmino {
    list: RecordAmino[];
}
export interface QueryResponseAminoMsg {
    type: "/assetmantle.modules.orders.queries.orders.QueryResponse";
    value: QueryResponseAmino;
}
export interface QueryResponseSDKType {
    list: RecordSDKType[];
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
