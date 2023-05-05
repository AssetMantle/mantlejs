import { StringID, StringIDAmino, StringIDSDKType } from "../../../ids/base/string_id";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    nubID?: StringID;
}
export interface MessageProtoMsg {
    typeUrl: "/assetmantle.modules.identities.transactions.nub.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    from: string;
    nub_i_d?: StringIDAmino;
}
export interface MessageAminoMsg {
    type: "/assetmantle.modules.identities.transactions.nub.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    from: string;
    nub_i_d?: StringIDSDKType;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
    fromAmino(object: MessageAmino): Message;
    toAmino(message: Message): MessageAmino;
    fromAminoMsg(object: MessageAminoMsg): Message;
    fromProtoMsg(message: MessageProtoMsg): Message;
    toProto(message: Message): Uint8Array;
    toProtoMsg(message: Message): MessageProtoMsg;
};
