import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../ids/base/identity_id";
import { AnyOwnableID, AnyOwnableIDAmino, AnyOwnableIDSDKType } from "../../ids/base/any_ownable_id";
import * as _m0 from "protobufjs/minimal";
export interface Split {
    ownerID?: IdentityID;
    ownableID?: AnyOwnableID;
    value: string;
}
export interface SplitProtoMsg {
    typeUrl: "/assetmantle.schema.types.base.Split";
    value: Uint8Array;
}
export interface SplitAmino {
    owner_i_d?: IdentityIDAmino;
    ownable_i_d?: AnyOwnableIDAmino;
    value: string;
}
export interface SplitAminoMsg {
    type: "/assetmantle.schema.types.base.Split";
    value: SplitAmino;
}
export interface SplitSDKType {
    owner_i_d?: IdentityIDSDKType;
    ownable_i_d?: AnyOwnableIDSDKType;
    value: string;
}
export declare const Split: {
    encode(message: Split, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Split;
    fromJSON(object: any): Split;
    toJSON(message: Split): unknown;
    fromPartial(object: Partial<Split>): Split;
    fromAmino(object: SplitAmino): Split;
    toAmino(message: Split): SplitAmino;
    fromAminoMsg(object: SplitAminoMsg): Split;
    fromProtoMsg(message: SplitProtoMsg): Split;
    toProto(message: Split): Uint8Array;
    toProtoMsg(message: Split): SplitProtoMsg;
};
