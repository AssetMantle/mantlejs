import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../../ids/base/classification_id";
import { AnyOwnableID, AnyOwnableIDAmino, AnyOwnableIDSDKType } from "../../../ids/base/any_ownable_id";
import { Height, HeightAmino, HeightSDKType } from "../../../types/base/height";
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../../lists/base/property_list";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    classificationID?: ClassificationID;
    takerID?: IdentityID;
    makerOwnableID?: AnyOwnableID;
    takerOwnableID?: AnyOwnableID;
    expiresIn?: Height;
    makerOwnableSplit: string;
    takerOwnableSplit: string;
    immutableMetaProperties?: PropertyList;
    immutableProperties?: PropertyList;
    mutableMetaProperties?: PropertyList;
    mutableProperties?: PropertyList;
}
export interface MessageProtoMsg {
    typeUrl: "/assetmantle.modules.orders.transactions.immediate.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    from: string;
    from_i_d?: IdentityIDAmino;
    classification_i_d?: ClassificationIDAmino;
    taker_i_d?: IdentityIDAmino;
    maker_ownable_i_d?: AnyOwnableIDAmino;
    taker_ownable_i_d?: AnyOwnableIDAmino;
    expires_in?: HeightAmino;
    maker_ownable_split: string;
    taker_ownable_split: string;
    immutable_meta_properties?: PropertyListAmino;
    immutable_properties?: PropertyListAmino;
    mutable_meta_properties?: PropertyListAmino;
    mutable_properties?: PropertyListAmino;
}
export interface MessageAminoMsg {
    type: "/assetmantle.modules.orders.transactions.immediate.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    classification_i_d?: ClassificationIDSDKType;
    taker_i_d?: IdentityIDSDKType;
    maker_ownable_i_d?: AnyOwnableIDSDKType;
    taker_ownable_i_d?: AnyOwnableIDSDKType;
    expires_in?: HeightSDKType;
    maker_ownable_split: string;
    taker_ownable_split: string;
    immutable_meta_properties?: PropertyListSDKType;
    immutable_properties?: PropertyListSDKType;
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
