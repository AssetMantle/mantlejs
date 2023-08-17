import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../../ids/base/asset_id";
import { Height, HeightAmino, HeightSDKType } from "../../../types/base/height";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    makerAssetID?: AssetID;
    takerAssetID?: AssetID;
    makerSplit: string;
    takerSplit: string;
    expiryHeight?: Height;
}
export interface MessageProtoMsg {
    typeUrl: "/assetmantle.modules.orders.transactions.put.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    from: string;
    from_i_d?: IdentityIDAmino;
    maker_asset_i_d?: AssetIDAmino;
    taker_asset_i_d?: AssetIDAmino;
    maker_split: string;
    taker_split: string;
    expiry_height?: HeightAmino;
}
export interface MessageAminoMsg {
    type: "/assetmantle.modules.orders.transactions.put.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    maker_asset_i_d?: AssetIDSDKType;
    taker_asset_i_d?: AssetIDSDKType;
    maker_split: string;
    taker_split: string;
    expiry_height?: HeightSDKType;
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
