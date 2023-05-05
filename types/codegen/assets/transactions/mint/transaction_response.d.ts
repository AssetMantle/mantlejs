import * as _m0 from "protobufjs/minimal";
export interface TransactionResponse {
    assetID: string;
}
export interface TransactionResponseProtoMsg {
    typeUrl: "/assetmantle.modules.assets.transactions.mint.TransactionResponse";
    value: Uint8Array;
}
export interface TransactionResponseAmino {
    asset_i_d: string;
}
export interface TransactionResponseAminoMsg {
    type: "/assetmantle.modules.assets.transactions.mint.TransactionResponse";
    value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
    asset_i_d: string;
}
export declare const TransactionResponse: {
    encode(message: TransactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse;
    fromJSON(object: any): TransactionResponse;
    toJSON(message: TransactionResponse): unknown;
    fromPartial(object: Partial<TransactionResponse>): TransactionResponse;
    fromAmino(object: TransactionResponseAmino): TransactionResponse;
    toAmino(message: TransactionResponse): TransactionResponseAmino;
    fromAminoMsg(object: TransactionResponseAminoMsg): TransactionResponse;
    fromProtoMsg(message: TransactionResponseProtoMsg): TransactionResponse;
    toProto(message: TransactionResponse): Uint8Array;
    toProtoMsg(message: TransactionResponse): TransactionResponseProtoMsg;
};
