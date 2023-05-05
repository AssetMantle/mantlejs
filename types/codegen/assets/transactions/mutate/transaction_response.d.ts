import * as _m0 from "protobufjs/minimal";
export interface TransactionResponse {
}
export interface TransactionResponseProtoMsg {
    typeUrl: "/assetmantle.modules.assets.transactions.mutate.TransactionResponse";
    value: Uint8Array;
}
export interface TransactionResponseAmino {
}
export interface TransactionResponseAminoMsg {
    type: "/assetmantle.modules.assets.transactions.mutate.TransactionResponse";
    value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
}
export declare const TransactionResponse: {
    encode(_: TransactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse;
    fromJSON(_: any): TransactionResponse;
    toJSON(_: TransactionResponse): unknown;
    fromPartial(_: Partial<TransactionResponse>): TransactionResponse;
    fromAmino(_: TransactionResponseAmino): TransactionResponse;
    toAmino(_: TransactionResponse): TransactionResponseAmino;
    fromAminoMsg(object: TransactionResponseAminoMsg): TransactionResponse;
    fromProtoMsg(message: TransactionResponseProtoMsg): TransactionResponse;
    toProto(message: TransactionResponse): Uint8Array;
    toProtoMsg(message: TransactionResponse): TransactionResponseProtoMsg;
};
