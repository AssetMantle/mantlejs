import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    coins: Coin[];
}
export interface MessageProtoMsg {
    typeUrl: "/assetmantle.modules.assets.transactions.wrap.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    from: string;
    from_i_d?: IdentityIDAmino;
    coins: CoinAmino[];
}
export interface MessageAminoMsg {
    type: "/assetmantle.modules.assets.transactions.wrap.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    coins: CoinSDKType[];
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
