import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../../lists/base/property_list";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    identityID?: IdentityID;
    mutableMetaProperties?: PropertyList;
    mutableProperties?: PropertyList;
}
export interface MessageProtoMsg {
    typeUrl: "/assetmantle.modules.identities.transactions.mutate.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    from: string;
    from_i_d?: IdentityIDAmino;
    identity_i_d?: IdentityIDAmino;
    mutable_meta_properties?: PropertyListAmino;
    mutable_properties?: PropertyListAmino;
}
export interface MessageAminoMsg {
    type: "/assetmantle.modules.identities.transactions.mutate.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    identity_i_d?: IdentityIDSDKType;
    mutable_meta_properties?: PropertyListSDKType;
    mutable_properties?: PropertyListSDKType;
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
