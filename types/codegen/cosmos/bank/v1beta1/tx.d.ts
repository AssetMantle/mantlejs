import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputAmino, InputSDKType, Output, OutputAmino, OutputSDKType } from "./bank";
import * as _m0 from "protobufjs/minimal";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}
export interface MsgSendProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend";
    value: Uint8Array;
}
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSendAmino {
    from_address: string;
    to_address: string;
    amount: CoinAmino[];
}
export interface MsgSendAminoMsg {
    type: "cosmos-sdk/MsgSend";
    value: MsgSendAmino;
}
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSendSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
}
export interface MsgSendResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse";
    value: Uint8Array;
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseAmino {
}
export interface MsgSendResponseAminoMsg {
    type: "cosmos-sdk/MsgSendResponse";
    value: MsgSendResponseAmino;
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseSDKType {
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
    inputs: Input[];
    outputs: Output[];
}
export interface MsgMultiSendProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend";
    value: Uint8Array;
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSendAmino {
    inputs: InputAmino[];
    outputs: OutputAmino[];
}
export interface MsgMultiSendAminoMsg {
    type: "cosmos-sdk/MsgMultiSend";
    value: MsgMultiSendAmino;
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSendSDKType {
    inputs: InputSDKType[];
    outputs: OutputSDKType[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {
}
export interface MsgMultiSendResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse";
    value: Uint8Array;
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponseAmino {
}
export interface MsgMultiSendResponseAminoMsg {
    type: "cosmos-sdk/MsgMultiSendResponse";
    value: MsgMultiSendResponseAmino;
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponseSDKType {
}
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial(object: Partial<MsgSend>): MsgSend;
    fromAmino(object: MsgSendAmino): MsgSend;
    toAmino(message: MsgSend): MsgSendAmino;
    fromAminoMsg(object: MsgSendAminoMsg): MsgSend;
    toAminoMsg(message: MsgSend): MsgSendAminoMsg;
    fromProtoMsg(message: MsgSendProtoMsg): MsgSend;
    toProto(message: MsgSend): Uint8Array;
    toProtoMsg(message: MsgSend): MsgSendProtoMsg;
};
export declare const MsgSendResponse: {
    encode(_: MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse;
    fromJSON(_: any): MsgSendResponse;
    toJSON(_: MsgSendResponse): unknown;
    fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse;
    fromAmino(_: MsgSendResponseAmino): MsgSendResponse;
    toAmino(_: MsgSendResponse): MsgSendResponseAmino;
    fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse;
    toAminoMsg(message: MsgSendResponse): MsgSendResponseAminoMsg;
    fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse;
    toProto(message: MsgSendResponse): Uint8Array;
    toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg;
};
export declare const MsgMultiSend: {
    encode(message: MsgMultiSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSend;
    fromJSON(object: any): MsgMultiSend;
    toJSON(message: MsgMultiSend): unknown;
    fromPartial(object: Partial<MsgMultiSend>): MsgMultiSend;
    fromAmino(object: MsgMultiSendAmino): MsgMultiSend;
    toAmino(message: MsgMultiSend): MsgMultiSendAmino;
    fromAminoMsg(object: MsgMultiSendAminoMsg): MsgMultiSend;
    toAminoMsg(message: MsgMultiSend): MsgMultiSendAminoMsg;
    fromProtoMsg(message: MsgMultiSendProtoMsg): MsgMultiSend;
    toProto(message: MsgMultiSend): Uint8Array;
    toProtoMsg(message: MsgMultiSend): MsgMultiSendProtoMsg;
};
export declare const MsgMultiSendResponse: {
    encode(_: MsgMultiSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendResponse;
    fromJSON(_: any): MsgMultiSendResponse;
    toJSON(_: MsgMultiSendResponse): unknown;
    fromPartial(_: Partial<MsgMultiSendResponse>): MsgMultiSendResponse;
    fromAmino(_: MsgMultiSendResponseAmino): MsgMultiSendResponse;
    toAmino(_: MsgMultiSendResponse): MsgMultiSendResponseAmino;
    fromAminoMsg(object: MsgMultiSendResponseAminoMsg): MsgMultiSendResponse;
    toAminoMsg(message: MsgMultiSendResponse): MsgMultiSendResponseAminoMsg;
    fromProtoMsg(message: MsgMultiSendResponseProtoMsg): MsgMultiSendResponse;
    toProto(message: MsgMultiSendResponse): Uint8Array;
    toProtoMsg(message: MsgMultiSendResponse): MsgMultiSendResponseProtoMsg;
};
