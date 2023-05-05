import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { AnyOwnableID, AnyOwnableIDAmino, AnyOwnableIDSDKType } from "../../../ids/base/any_ownable_id";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    ownableID?: AnyOwnableID;
    value: string;
}
export interface MessageProtoMsg {
    typeUrl: "/assetmantle.modules.splits.transactions.unwrap.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    from: string;
    from_i_d?: IdentityIDAmino;
    ownable_i_d?: AnyOwnableIDAmino;
    value: string;
}
export interface MessageAminoMsg {
    type: "/assetmantle.modules.splits.transactions.unwrap.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    ownable_i_d?: AnyOwnableIDSDKType;
    value: string;
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
