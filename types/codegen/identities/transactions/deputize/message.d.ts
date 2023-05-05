import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../../ids/base/classification_id";
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../../lists/base/property_list";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    toID?: IdentityID;
    classificationID?: ClassificationID;
    maintainedProperties?: PropertyList;
    canMintAsset: boolean;
    canBurnAsset: boolean;
    canRenumerateAsset: boolean;
    canAddMaintainer: boolean;
    canRemoveMaintainer: boolean;
    canMutateMaintainer: boolean;
}
export interface MessageProtoMsg {
    typeUrl: "/assetmantle.modules.identities.transactions.deputize.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    from: string;
    from_i_d?: IdentityIDAmino;
    to_i_d?: IdentityIDAmino;
    classification_i_d?: ClassificationIDAmino;
    maintained_properties?: PropertyListAmino;
    can_mint_asset: boolean;
    can_burn_asset: boolean;
    can_renumerate_asset: boolean;
    can_add_maintainer: boolean;
    can_remove_maintainer: boolean;
    can_mutate_maintainer: boolean;
}
export interface MessageAminoMsg {
    type: "/assetmantle.modules.identities.transactions.deputize.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    to_i_d?: IdentityIDSDKType;
    classification_i_d?: ClassificationIDSDKType;
    maintained_properties?: PropertyListSDKType;
    can_mint_asset: boolean;
    can_burn_asset: boolean;
    can_renumerate_asset: boolean;
    can_add_maintainer: boolean;
    can_remove_maintainer: boolean;
    can_mutate_maintainer: boolean;
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
