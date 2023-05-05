import { DataID, DataIDAmino, DataIDSDKType } from "../../ids/base/data_id";
import * as _m0 from "protobufjs/minimal";
export interface Key {
    dataID?: DataID;
}
export interface KeyProtoMsg {
    typeUrl: "/assetmantle.modules.metas.key.Key";
    value: Uint8Array;
}
export interface KeyAmino {
    data_i_d?: DataIDAmino;
}
export interface KeyAminoMsg {
    type: "/assetmantle.modules.metas.key.Key";
    value: KeyAmino;
}
export interface KeySDKType {
    data_i_d?: DataIDSDKType;
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
