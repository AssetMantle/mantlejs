import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    to: string;
    identityID?: IdentityID;
}
export interface MessageProtoMsg {
    typeUrl: "/assetmantle.modules.identities.transactions.provision.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    from: string;
    to: string;
    identity_i_d?: IdentityIDAmino;
}
export interface MessageAminoMsg {
    type: "/assetmantle.modules.identities.transactions.provision.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    from: string;
    to: string;
    identity_i_d?: IdentityIDSDKType;
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
