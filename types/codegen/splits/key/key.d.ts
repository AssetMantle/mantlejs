import { SplitID, SplitIDAmino, SplitIDSDKType } from "../../ids/base/split_id";
import * as _m0 from "protobufjs/minimal";
export interface Key {
    splitID?: SplitID;
}
export interface KeyProtoMsg {
    typeUrl: "/assetmantle.modules.splits.key.Key";
    value: Uint8Array;
}
export interface KeyAmino {
    split_i_d?: SplitIDAmino;
}
export interface KeyAminoMsg {
    type: "/assetmantle.modules.splits.key.Key";
    value: KeyAmino;
}
export interface KeySDKType {
    split_i_d?: SplitIDSDKType;
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
