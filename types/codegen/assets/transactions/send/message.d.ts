import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../../ids/base/asset_id";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    toID?: IdentityID;
    assetID?: AssetID;
    value: string;
}
export interface MessageProtoMsg {
    typeUrl: "/assetmantle.modules.assets.transactions.send.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    from: string;
    from_i_d?: IdentityIDAmino;
    to_i_d?: IdentityIDAmino;
    asset_i_d?: AssetIDAmino;
    value: string;
}
export interface MessageAminoMsg {
    type: "/assetmantle.modules.assets.transactions.send.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    to_i_d?: IdentityIDSDKType;
    asset_i_d?: AssetIDSDKType;
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
