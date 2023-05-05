import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../ids/base/identity_id";
import * as _m0 from "protobufjs/minimal";
export interface Key {
    identityID?: IdentityID;
}
export interface KeyProtoMsg {
    typeUrl: "/assetmantle.modules.identities.key.Key";
    value: Uint8Array;
}
export interface KeyAmino {
    identity_i_d?: IdentityIDAmino;
}
export interface KeyAminoMsg {
    type: "/assetmantle.modules.identities.key.Key";
    value: KeyAmino;
}
export interface KeySDKType {
    identity_i_d?: IdentityIDSDKType;
}
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    fromPartial(object: Partial<Key>): Key;
    fromAmino(object: KeyAmino): Key;
    toAmino(message: Key): KeyAmino;
    fromAminoMsg(object: KeyAminoMsg): Key;
    fromProtoMsg(message: KeyProtoMsg): Key;
    toProto(message: Key): Uint8Array;
    toProtoMsg(message: Key): KeyProtoMsg;
};
